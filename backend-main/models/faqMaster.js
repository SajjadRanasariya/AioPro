import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FAQSchema = Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: Object,
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

export default mongoose.model("FAQ", FAQSchema);
