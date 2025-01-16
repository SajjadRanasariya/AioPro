import { Router } from "express";
import passport from "passport";
import { addFaqMaster, deleteFaqMaster, getFaqMaster, getOneFaqMaster, updateFaqMaster } from "../controllers/faqMasterController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opds = await getFaqMaster(req.query);
        res.send(opds);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);


router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opd = await getOneFaqMaster(req.params.id);
        res.send(opd);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/",passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await addFaqMaster(req.body);
            res.send({ result: result, message: "FAQ created successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateFaqMaster(req.body);
        res.send({ result: result, message: "FAQ updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteFaqMaster(req.params.id);
        res.send({ result: result, message: "FAQ deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

// router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
//     const deletItems = req.body;
//     try {
//         const result = await deleteMany(deletItems);
//         res.send({ result: result, message: "Opds delete successfully" });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ error: error.toString() });
//     }
// }
// );
export default router;
