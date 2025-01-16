import { Router } from "express";
import passport from "passport";
import { addDesignations, deleteDesignations, getAllDesignations, getDesignations, updateDesignations } from "../controllers/designationsController";



const router = Router();





router.get( "/",passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await getAllDesignations(req.query);
      res.send({ result: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.get("/:id", passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await getDesignations(req.params.id);
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
      const result = await addDesignations(req.body);
      res.send({ result: result, message: "Designations added successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await updateDesignations(req.body);
      res.send({ result: result, message: "Designations updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const result = await deleteDesignations(req.params.id);
    if (!result) {
      return res.send({ message: "Not Found" })
    }
    res.send({ result: result, message: "Designations deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);



export default router;
