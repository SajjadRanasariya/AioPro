import { Router } from "express";
import passport from "passport";
import { getType, addOne, updateOne, getOne, deleteOne } from '../controllers/typeController'

const router = Router();


router.get("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await getType(req.query);
            res.send({ result: result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.get( "/:id",passport.authenticate("jwt", { session: false }),async (req, res) => {
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
            res.send({ result: result, message: "Type added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await updateOne(req.body);
            res.send({ result: result, message: "Type updated successfully" });
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
