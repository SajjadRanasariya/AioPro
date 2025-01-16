import { Router } from "express";
import passport from "passport";
import { getAll,getOne,addOne,updateOne,deleteOne } from "../controllers/firmTypeController";
import firmType from "../models/firmType";
const router = Router();

async function getNextAutoIncrementValue() {
    const firmTypeId = await firmType.countDocuments({});
    return firmTypeId + 1;
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

            const result = await addOne({ firmTypeId: nextAutoIncrementValue, ...req.body });
            res.send({ result: result, message: "Type added successfully" });
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
            res.send({ result: result, message: "Type updated successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put(
    "/changeStatus",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await updateOne(req.body);
            res.send({ result: result});
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
        res.send({ result: result, message: "Type deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
