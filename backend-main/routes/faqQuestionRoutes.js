import { Router } from "express";
import passport from "passport";
import { addOpd, deleteMany, deleteOne, getOneOpd, getOpd, updateOne } from "../controllers/opdController";
import { addFaqQuestion, deleteFaqQuestion, getFaqQuestion, getOneFaqQuestion, updateFaqQuestion } from "../controllers/faqQuestionController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opds = await getFaqQuestion(req.query);
        res.send(opds);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);


router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opd = await getOneFaqQuestion(req.params.id);
        res.send(opd);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await addFaqQuestion(req.body);
            res.send({ result: result, message: "Question created successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateFaqQuestion(req.body);
        res.send({ result: result, message: "Question updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteFaqQuestion(req.params.id);
        res.send({ result: result, message: "Question deleted successfully" });
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
