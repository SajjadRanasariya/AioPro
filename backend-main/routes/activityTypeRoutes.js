import { Router } from "express";
import passport from "passport";
import {
  allActivityType,
  addActivityType,
  deleteActivityType,
  oneActivityType,
  editActivityType
} from "../controllers/activityTypeController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const result = await allActivityType(req.query);
    res.send({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

router.get("/:id", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const opd = await oneActivityType(req.params.id);
      res.send(opd);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await addActivityType(req.body);
      res.send({ result: result, message: "Activity Type Add successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await editActivityType(req.body);
      res.send({ result: result, message: "Activity updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.delete("/:id", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await deleteActivityType(req.params.id);
      res.send({ result: result, message: "Activity deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

// router.post(
//   "/deleteMany",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const deletItems = req.body;
//     try {
//       const result = await deleteManyChemist(deletItems);
//       res.send({ result: result, message: "Chemists Delete Successfully" });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ error: error.toString() });
//     }
//   }
// );
export default router;
