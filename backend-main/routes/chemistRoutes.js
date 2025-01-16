import { Router } from "express";
import passport from "passport";
import {
  addChemist,
  allChemist,
  deleteChemist,
  editChemist,
  changeStatus,
  oneChemist,
  deleteManyChemist,
} from "../controllers/chemistController";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const opds = await allChemist(req.query);
      res.send(opds);
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
      const opd = await oneChemist(req.params.id);
      res.send(opd);
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
      const result = await addChemist(req.body);
      res.send({ result: result, message: "chemist created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await editChemist(req.body);
      res.send({ result: result, message: "Chemist updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put(
  "/changeStatus",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await changeStatus(req.body);
      res.send({ result: result, message: "Status change successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await deleteChemist(req.params.id);
      res.send({ result: result, message: "Chemists deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post(
  "/deleteMany",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const deletItems = req.body;
    try {
      const result = await deleteManyChemist(deletItems);
      res.send({ result: result, message: "Chemists Delete Successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);
export default router;
