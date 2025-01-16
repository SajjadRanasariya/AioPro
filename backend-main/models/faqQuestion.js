import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FaqQuestionchema = Schema({
  question: {
    type: String,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("FaqQuestion", FaqQuestionchema);
