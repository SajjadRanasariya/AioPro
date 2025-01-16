import { Router } from "express";
import passport from "passport";
import { allCountry, addCountry } from "../controllers/countryMasterController";
import countryMaster from "../models/countryMaster";
const router = Router();


async function getNextAutoIncrementValue() {
    const countryId = await countryMaster.countDocuments({});
    return countryId + 1;
}

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await allCountry(req.query);
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
            const result = await addCountry({ countryId: nextAutoIncrementValue, ...req.body });

            res.send({ result: result, message: "Country added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

export default router;
