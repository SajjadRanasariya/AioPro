import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teamSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  teamMember: {
    type: Array,
    require: true,
  },
  manager: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export default mongoose.model("Teams", teamSchema);
