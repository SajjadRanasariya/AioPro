import { Router } from "express";
import passport from "passport";
import {
  getAllUsers,
  getOneUser,
  addUser,
  updateUser,
  changeStatus,
  deleteUser,
  updatePassword,
  deleteMany,
  updateUserRole,
} from "../controllers/userController";
import { sendMail } from "../middlewares/sendMail";
import { upload } from "../utils/upload";
import { addNotification } from "../controllers/notificationcontroller";
import User from "../models/user";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers(req.query);
    res.send(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await getOneUser(req.params.id);
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
      const result = await addUser(req.body);
      // sendMail('registration_Confirm_Template',result.email)
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
  upload.single("avatar"),
  async (req, res) => {
    const reqUser = req.body;
    try {

      const user = await User.findById(reqUser._id)

      let url = req.protocol + "://" + req.get("host");

      // if (!reqUser.parentId === user.parentId || !reqUser.role === user.role) {
        let data = {
          data: {
            id: reqUser._id,
            role: reqUser.role,
            parentId: reqUser.parentId,
            message:"change user position",
          },
          type: "user_update",
          createdBy: reqUser._id,
          approvalBy: reqUser.oldParentId,
        };
        await addNotification(data);
      // }

      const result = await updateUser({
        _id: reqUser._id,
        avatar: req.file ? `${url}/public/${req.file.filename}` : "",
        url: reqUser.url,
        firstName: reqUser.firstName,
        lastName: reqUser.lastName,
        email: reqUser.email,
        phoneNumber: reqUser.phoneNumber,
        address: reqUser.address,
        country: reqUser.country,
        state: reqUser.state,
        city: reqUser.city,
        zipCode: reqUser.zipCode,
        password: reqUser.password,
        status: reqUser.status,
        modifiedAt: reqUser.modifiedAt,
      });
      res.send({ result: result, message: "User update successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/update", passport.authenticate("jwt", { session: false }),async (req, res) => {
    const reqUser = req.body;
    try {
      const result = await updateUserRole({
        _id: reqUser._id,
        role: reqUser.role,
        parentId: reqUser.parentId,
      });
      
      res.send({ result: result, message: "User update successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/changeStatus", passport.authenticate("jwt", { session: false }),async (req, res) => {
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
      const result = await deleteUser(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put(
  "/updatePassword",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await updatePassword(req.body);
      if (result && result.status && result.status == 400) {
        res.status(400).json({ error: result.message });
      } else {
        res.send(result);
      }
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
    const { deletItems } = req.body;
    try {
      const result = await deleteMany(deletItems);
      res.send(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

export default router;
