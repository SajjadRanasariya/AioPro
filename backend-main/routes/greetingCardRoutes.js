import { Router } from "express";
import passport from "passport";
import {
  addGreetingCard,
  allGreetingCard,
  deleteMany,
  deleteOne,
  editGreetingCard,
  oneGreetingCard,
} from "../controllers/greetingCardController";
import { sendMail } from "../middlewares/sendMail";
import greetingCard from "../models/greetingCard";
import { upload } from "../utils/upload";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const greetingCards = await allGreetingCard(req.query);
    res.send(greetingCards);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
});

router.get("/:id",async (req, res) => {
    try {
      const greetingCard = await oneGreetingCard(req.params.id);
      res.send(greetingCard); 
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/",passport.authenticate("jwt", { session: false }),upload.single("img"),async (req, res) => {

  let url = req.protocol + "://" + req.get("host");
  const data = req.file ? `${url}/public/${req.file.filename}` : ""

    try {
      const result = await addGreetingCard(req.body);
      // sendMail('registration_Confirm_Template',result.email)
      res.send({ result: result, message: "Template created successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.put("/", passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await editGreetingCard(req.body);
      res.send({ result: result, message: "Template updated successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.delete("/:id",passport.authenticate("jwt", { session: false }),async (req, res) => {
    try {
      const result = await deleteOne(req.params.id);
      res.send({ result: result, message: "Template deleted successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

router.post("/send",passport.authenticate("jwt", { session: false }),async (req, res) => {
  const {templateId,to,form,subject} =req.body
  try {
    const template = await greetingCard.findById(templateId);
    sendMail({ to:to,from:form,subject:subject,template});
    res.send({ message: "Card send successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  }
}
);

router.post("/deleteMany",passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const deletItems = req.body;
    try {
      const result = await deleteMany(deletItems);
      res.send({result: result ,message:"Templates deleted successfully"});
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.toString() });
    }
  }
);

export default router;
