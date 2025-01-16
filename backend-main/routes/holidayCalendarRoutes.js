import { Router } from "express";
import passport from "passport";
import { allHoliday, addHoliday,editHoliday,deleteHoliday, insertMany } from "../controllers/holidayCalendarController";

const router = Router();

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const holiday = await allHoliday(req.query);
            res.send({ result: holiday });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
)



router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await addHoliday(req.body);
            res.send({ result: result, message: "Holiday added successfully" });
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

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await editHoliday(req.body);
        res.send({ result: result, message: "Holiday updated successfully" });
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
        const result = await deleteHoliday(req.params.id);
        res.send({result: result ,message:"Holiday delete successfully"});
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
      }
    }
  );

export default router;
