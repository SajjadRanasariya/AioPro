import { Router } from "express";
import passport from "passport";
import {
  addMeetings,
  allMeetings,
  deleteManyMeeting,
  deleteMeetings,
  editMeetings,
  oneMeetings,
} from "../controllers/meetingController";
import { addNotification } from "../controllers/notificationcontroller";
import { getOneUser } from "../controllers/userController";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const users = await allMeetings(req.query);
      res.send(users);
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
      const user = await oneMeetings(req.params.id);
      res.send(user);
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
      const result = await addMeetings(req.body);
      const user = await getOneUser(req.body.createdBy);
      let data = {
        data: {
          id: result._id,
          subject: result.subject,
          startDate: result.startDate,
          city: result.city,
          status: result.status,
          message: `${user.firstName} (${user.role}) create a new meeting`,
        },
        type: "meeting",
        createdBy: result.createdBy,
        approvalBy: result.parentId,
      };
      await addNotification(data);

      res.send(result);
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
      const result = await editMeetings(req.body);
      res.send({result: result ,message:"Meeting updated Successfully"});
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
      const result = await deleteMeetings(req.params.id);
      res.send({result: result ,message:"Meeting Delete Successfully"});
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
      const result = await deleteManyMeeting(deletItems);
      res.send({result: result ,message:"Meetings Delete Successfully"});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

export default router;
