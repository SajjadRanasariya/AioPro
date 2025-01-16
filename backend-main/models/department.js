import mongoose from "mongoose";
const Schema = mongoose.Schema;

const departmentSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  createBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updateAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model("Department", departmentSchema);
