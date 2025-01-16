import { Router } from "express";
import passport from "passport";
import { getAll, addOne, getOne, updateOne,insertMany, deleteOne } from "../controllers/doctorController";
import doctor from "../models/doctor";
import mongoose from "mongoose";
import multer from "multer";
import fs from 'fs'
import path from 'path'


const router = Router();

function generateCode(prefix, length) {
  // Generate a random number with the desired length
  const randomNumber = Math.floor(Math.random() * Math.pow(10, length));

  // Convert the random number to a string and pad it with zeros
  const formattedNumber = randomNumber.toString().padStart(length, '0');

  // Concatenate the prefix and formatted number
  const generatedCode = `${prefix}${formattedNumber}`;

  return generatedCode;
}

async function getNextAutoIncrementValue() {
  const doctorId = await doctor.countDocuments({});
  return doctorId + 1;
}

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await getAll(req.query);
      res.send({ result: result });
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
      const result = await getOne(req.params.id);
      if (!result) {
        return res.send({ message: "Not Found" })
      }
      res.send({ result: result });
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
      const doctorId = await getNextAutoIncrementValue();
      const doctorCode = generateCode('VOI', 5);

      const result = await addOne({ doctorId: doctorId, doctorCode: doctorCode, ...req.body });
      res.send({ result: result, message: "Doctor added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post(
  "/addMany",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
      try {
          const result = await insertMany(req.body);
          res.send({ result: result });
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
      const result = await updateOne(req.body);
      res.send({ result: result, message: "Doctor updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const result = await deleteOne(req.params.id);
    if (!result) {
      return res.send({ message: "Not Found" })
    }
    res.send({ result: result, message: "Doctor deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);



export default router;
