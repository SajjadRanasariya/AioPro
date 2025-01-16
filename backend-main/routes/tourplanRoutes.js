import { Router } from "express";
import passport from "passport";
import { addOne, deleteOne, getOne, getTour, updateOne } from "../controllers/tourController";
const router = Router();


router.get("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await getTour(req.query);
            res.send({ result: result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.get("/:id",passport.authenticate("jwt", { session: false }),async (req, res) => {
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

router.post("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await addOne(req.body);
            res.send({ result: result, message: "Tour Plan added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await updateOne(req.body);
            res.send({ result: result, message: "Tour Plan updated successfully" });
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
        res.send({ result: result, message: "Tour Plan deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
