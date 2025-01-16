import { Router } from "express";
import passport from "passport";
import { getTax, addOne, updateOne, getOne, deleteOne } from "../controllers/taxMasterController";
import taxMaster from "../models/taxMaster";
const router = Router();

async function getNextAutoIncrementValue() {
    const firmTypeId = await taxMaster.countDocuments({});
    return firmTypeId + 1;
}

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await getTax(req.query);
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
            const result = await addOne({ id: nextAutoIncrementValue,...req.body });

            res.send({ result: result, message: "Tax added successfully" });
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
            res.send({ result: result, message: "Tax updated successfully" });
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
        res.send({ result: result, message: "Tax deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
