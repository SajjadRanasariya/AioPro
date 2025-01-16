import { Router } from "express";
import passport from "passport";
import { getAll, addOne, deleteOne } from "../controllers/mediaGalleryController";
import { upload } from "../utils/upload";
import mediaGallery from "../models/mediaGallery";
const router = Router();

async function getNextAutoIncrementValue() {
    const srNo = await mediaGallery.countDocuments({});
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


router.post(
    "/",
    passport.authenticate("jwt", { session: false }), upload.single("image"),
    async (req, res) => {
        try {
            const nextAutoIncrementValue = await getNextAutoIncrementValue();

            let url = req.protocol + "://" + req.get("host");
            const result = await addOne({ srNo: nextAutoIncrementValue, image: req.file ? `${url}/public/${req.file.filename}` : "", name: req.body.name, divisionName: req.body.divisionName });
            res.send({ result: result, message: "Media added successfully" });
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
        res.send({ result: result, message: "Media deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
