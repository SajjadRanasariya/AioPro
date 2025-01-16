import { Router } from "express";
import passport from "passport";
import { addOne, getAll, updateOne } from "../controllers/firmMonthMaintenanceController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const result = await getAll(req.query);
    res.send({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

// router.get("/:id", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const opd = await oneActivityType(req.params.id);
//       res.send(opd);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ error: error.toString() });
//     }
//   }
// );

router.post("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await addOne(req.body);
      res.send({ result: result, message: "Add successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/", passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const result = await updateOne(req.body);
      res.send({ result: result, message: "updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

// router.delete("/:id", passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const result = await deleteActivityType(req.params.id);
//       res.send({ result: result, message: "Activity deleted successfully" });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ error: error.toString() });
//     }
//   }
// );

export default router;
