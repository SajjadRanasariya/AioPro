import { Router } from "express";
import passport from "passport";
import fs from 'fs'
import { getAll, getOne, addOne, deleteOne, updateOne } from "../controllers/folderController";
const router = Router();


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

router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
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

router.post('/createFolder', passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await addOne(req.body)
        res.send({ result: result, message: "Folder created successfully" });
        // res.status(200).send('Folder created and stored in MongoDB');
    } catch (error) {
        console.error('Error storing folder in MongoDB:', error);
        res.status(500).send('Failed to store folder in MongoDB');
    }
});

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteOne(req.params.id);
        if (!result) {
            return res.send({ message: "Not Found" })
        }
        res.send({ result: result, message: "Folder deleted successfully" });
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
            res.send({ result: result, message: "Folder updated successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);


export default router;
