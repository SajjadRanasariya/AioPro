import { Router } from "express";
import passport from "passport";
import { allCity, addCity, updateOne, deleteOne, updateManyData } from "../controllers/cityController";
import cityMaster from "../models/cityMaster";

const router = Router();

async function getNextAutoIncrementValue() {
    const cityId = await cityMaster.countDocuments({});
    return cityId + 1;
}

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await allCity(req.query);
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

            const result = await addCity({ cityId: nextAutoIncrementValue, ...req.body });

            res.send({ result: result, message: "City added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put(
    "/zoneMap/addMany",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await updateManyData(req.body);
            res.send({ result: result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
  );
  

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateOne(req.body);
        res.send({ result: result, message: "City updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.put("/zoneMap", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateOne(req.body);
        res.send({ result: result, message: "Zone Mapping successfully" });
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
        res.send({ result: result, message: "City deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
