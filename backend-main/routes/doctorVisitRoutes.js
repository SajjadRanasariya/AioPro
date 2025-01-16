import { Router } from "express";
import passport from "passport";
import { allVisit, addVisit,getOne } from "../controllers/doctorVisitController";
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import doctorVisit from "../models/doctorVisit";
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const generateVisitId = () => {
  const uuid = uuidv4();
  const visitId = uuid.replace(/-/g, '').substring(0, 8);
  return visitId;
};


router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const doctorVisit = await allVisit(req.query);
      res.send({ result: doctorVisit });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const doctorVisit = await getOne(req.params.id);
      res.send({ result: doctorVisit });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const visitId = generateVisitId();
      const result = await addVisit({ visitId: visitId, ...req.body });
      res.send({ result: result, message: "Visit created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get(
  "/export-csv",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const csvWriter = createCsvWriter({
      path: 'output.csv',
      header: [
        { id: 'visitId', title: 'Visit Id' },
        { id: 'doctorId', title: 'Doctor Id' },
        { id: 'doctorName', title: 'Doctor Name' },
        { id: 'clinicAddress', title: 'Clinic Address' },
        { id: 'zone', title: 'Zone' },
        { id: 'city', title: 'City' },
        { id: 'employeeName', title: 'Employee Name' },
        { id: 'visitDate', title: 'Date' },
        { id: 'status', title: 'Status' },
      ],
    });

    const result = await doctorVisit.find()

    csvWriter.writeRecords(result)
      .then(() => {
        res.download('output.csv', 'output.csv', (err) => {
          if (err) {
            console.error('Error downloading CSV:', err);
            res.status(500).send('Internal Server Error');
          } else {
            fs.unlinkSync('output.csv'); 
          }
        });
      })
      .catch((error) => {
        console.error('Error writing CSV:', error);
        res.status(500).send('Internal Server Error');
      });
  }
);



export default router;
