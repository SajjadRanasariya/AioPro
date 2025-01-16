import { Router } from "express";
import passport from "passport";
import { getAllDivision, getOne, addOne, updateOne, deleteOne } from "../controllers/divisionController";
import { upload } from "../utils/upload";
const router = Router();


router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await getAllDivision(req.query);
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
    passport.authenticate("jwt", { session: false }), upload.single("appLogo"),
    async (req, res) => {
        try {
            let url = req.protocol + "://" + req.get("host");
            const result = await addOne({ appLogo: req.file ? `${url}/public/${req.file.filename}` : "", divisionName: req.body.divisionName });
            res.send({ result: result, message: "Division added successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put(
    "/",
    passport.authenticate("jwt", { session: false }), upload.single("appLogo"),
    async (req, res) => {
        try {
            let url = req.protocol + "://" + req.get("host");
            const result = await updateOne({ _id: req.body._id, appLogo: req.file ? `${url}/public/${req.file.filename}` : "", divisionName: req.body.divisionName });
            res.send({ result: result, message: "Division updated successfully" });
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
        res.send({ result: result, message: "Division deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
