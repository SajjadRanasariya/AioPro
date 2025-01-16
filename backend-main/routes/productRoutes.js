import { Router } from "express";
import passport from "passport";
import { addProduct, allProduct, deleteManyProduct, updateProduct } from "../controllers/productController";

const router = Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opds = await allProduct(req.query);
        res.send(opds);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);


router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const opd = await getOneProduct(req.params.id);
        res.send(opd);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
        try {
            const result = await addProduct(req.body);
            res.send({ result: result, message: "Product Add Successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.toString() });
        }
    }
);

router.put("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await updateProduct(req.body);
        res.send({ result: result, message: "Product updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteOneProduct(req.params.id);
        res.send({ result: result, message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const result = await deleteManyProduct(req.body);
        res.send({ result: result, message: "Product delete successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
}
);

export default router;
