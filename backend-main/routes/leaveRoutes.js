import { Router } from "express";
import passport from "passport";
import {
  addLeave,
  getLeave,
  getOne,
  updateLeave,
  deleteOne,
  leaveReport,
} from "../controllers/leaveController";
const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await getLeave(req.query);
      res.send({ result: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get(
  "/report",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await leaveReport(req.query);

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
        return res.send({ message: "Not Found" });
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
      const result = await addLeave(req.body);
      res.send({ result: result, message: "Leave added successfully" });
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
      const result = await updateLeave(req.body);
      res.send({ result: result, message: "Leave updated successfully" });
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
      const result = await deleteOne(req.params.id);
      if (!result) {
        return res.send({ message: "Not Found" });
      }
      res.send({ result: result, message: "Leave deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

export default router;
