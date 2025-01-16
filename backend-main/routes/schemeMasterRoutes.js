import { Router } from "express";
import passport from "passport";
import { getAll, getOne, addOne, updateOne, deleteOne } from "../controllers/schemeMasterController";
import schemeMaster from "../models/schemeMaster";
const router = Router();

async function getNextAutoIncrementValue() {
    const srNo = await schemeMaster.countDocuments({});
    return srNo + 1;
}

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await getAll(req.query);
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
                return res.send({ message: "Not Found" })
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
            const nextAutoIncrementValue = await getNextAutoIncrementValue();

            const result = await addOne({ srNo: nextAutoIncrementValue, ...req.body });
            res.send({ result: result, message: "Scheme added successfully" });
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
            const result = await updateOne(req.body);
            res.send({ result: result, message: "Scheme updated successfully" });
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
        res.send({ result: result, message: "Scheme deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
