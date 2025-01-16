import { Router } from "express";
import passport from "passport";
import { allState, addState } from "../controllers/stateMasterController";
import stateMaster from "../models/stateMaster";

const router = Router();

async function getNextAutoIncrementValue() {
    const stateId = await stateMaster.countDocuments({});
    return stateId + 1;
}


router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await allState(req.query);
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
            const nextAutoIncrementValue = await getNextAutoIncrementValue();
            const result = await addState({ stateId: nextAutoIncrementValue, ...req.body });

            res.send({ result: result, message: "State added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

export default router;
