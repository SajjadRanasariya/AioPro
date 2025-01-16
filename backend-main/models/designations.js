import mongoose from "mongoose";
const Schema = mongoose.Schema;

const designationsSchema = Schema({
  parent: {
    type: String,
    require: true,
  },
  abbreviation: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  child: {
    type: String,
    require: true,
  },
  workType: {
    type: String,
    require: true,
  },
  leval: {
    type: String,
    require: true,
  },
  approval: {
    type: String,
    default:false
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("designations", designationsSchema);
