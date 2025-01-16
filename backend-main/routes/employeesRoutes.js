import { Router } from "express";
import passport from "passport";
import { upload } from "../utils/upload";
import { allEmployees, oneEmployees, addEmployees, updateEmployees, deleteEmployees, deleteMany, insertMany } from "../controllers/employeesController";

const router = Router();


router.get("/", async (req, res) => {
  try {
    const users = await allEmployees(req.query);
    res.send({ result: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const user = await oneEmployees(req.params.id);
    res.send({ result: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);


router.post("/", passport.authenticate("jwt", { session: false }), upload.single("profileImg"), async (req, res) => {
  try {
      let url = req.protocol + "://" + req.get("host");
      const imgUrl = req.file ? `${url}/public/${req.file.filename}` : ""
    const result = await addEmployees(req.body, imgUrl);
    res.send({ result: result, message: "Employees Add successfully" });
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

router.put("/", passport.authenticate("jwt", { session: false }), upload.single("profileImg"), async (req, res) => {
  try {
    let url = req.protocol + "://" + req.get("host");
    const imgUrl = req.file ? `${url}/public/${req.file.filename}` : ""
    const result = await updateEmployees(req.body, imgUrl);
    res.send({ result: result, message: "Employees update successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const result = await deleteEmployees(req.params.id);
    res.send({ result: result, message: "Delete successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);



router.post("/deleteMany", passport.authenticate("jwt", { session: false }), async (req, res) => {
  const { deletItems } = req.body;
  try {
    const result = await deleteMany(deletItems);
    res.send({ result: result, message: "Employees delete successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

export default router;
