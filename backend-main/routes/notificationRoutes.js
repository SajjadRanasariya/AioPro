import { Router } from "express";
import { deleteManyNotification, getNotification, updateNotification, updateNotificationApproval, updateUserNotification } from "../controllers/notificationcontroller";
import passport from "passport";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const notification = await getNotification(req.query);
      res.send(notification);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
);

router.put("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await updateNotification(req.body);
      res.send(result);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
);

router.put("/userchange", passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await updateUserNotification(req.body);
      res.send(result);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
);


router.put("/approvel", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await updateNotificationApproval(req.body);
      res.send(result);
    } catch (error) {
      return res.status(400).json({ error: error.toString() });
    }
  }
);

// router.put("/userapprovel", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const result = await updateNotificationUserApproval(req.body);
//       res.send(result);
//     } catch (error) {
//       return res.status(400).json({ error: error.toString() });
//     }
//   }
// );

router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const deletItems = req.body;
  try {
    const result = await deleteManyNotification(deletItems);
    res.send({ result: result, message:"Notification deleted successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

export default router;
