import { Router } from "express";
import passport from "passport";
import firmType from "../models/firmType";
import { AllFirms, addFirm,insertMany,deleteFirm,getOneFirm,updateFirm } from "../controllers/firmController";
import multer from "multer";
import fs from 'fs'
import path from 'path'


const router = Router();

async function getNextAutoIncrementValue() {
    const firmId = await firmType.countDocuments({});
    return firmId + 1;
}

router.get("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await AllFirms(req.query);
            res.send({ result: result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.get("/:id",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await getOneFirm(req.params.id);
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
            const nextAutoIncrementValue = await getNextAutoIncrementValue();
            const result = await addFirm({ firmId: nextAutoIncrementValue, ...req.body });
            res.send({ result: result, message: " Farm add  successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.post(
    "/addMany",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const result = await insertMany(req.body);
            res.send({ result: result });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
  );

router.put("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await updateFirm(req.body);
            res.send({ result: result, message: "Farm updated successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteFirm(req.params.id);
        if (!result) {
            return res.send({ message: "Not Found" })
        }
        res.send({ result: result, message: "Farm deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
