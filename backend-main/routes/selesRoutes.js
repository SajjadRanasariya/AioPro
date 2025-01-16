import { Router } from "express";
import passport from "passport";
import { OneSales, addSales, allSales, deleteManySales, deleteOneSales, updateSales } from "../controllers/selesController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opds = await allSales(req.query);
        res.send(opds);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opd = await OneSales(req.params.id);
        res.send(opd);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await addSales(req.body);
            res.send({ result: result, message: "Sells Details Add Successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateSales(req.body);
        res.send({ result: result, message: "Product updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteOneSales(req.params.id);
        res.send({ result: result, message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteManySales(req.body);
        res.send({ result: result, message: "Product delete successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
