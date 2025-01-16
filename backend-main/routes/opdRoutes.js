import { Router } from "express";
import passport from "passport";
import { addOpd, deleteMany, deleteOne, getOneOpd, getOpd, updateOne } from "../controllers/opdController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opds = await getOpd(req.query);
        res.send(opds);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);


router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opd = await getOneOpd(req.params.id);
        res.send(opd);
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
            const result = await addOpd(req.body);
            res.send({ result: result, message: "Opd created successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateOne(req.body);
        res.send({ result: result, message: "Opd updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteOne(req.params.id);
        res.send({ result: result, message: "Opd deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
    const deletItems = req.body;
    try {
        const result = await deleteMany(deletItems);
        res.send({ result: result, message: "Opds delete successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);
export default router;
