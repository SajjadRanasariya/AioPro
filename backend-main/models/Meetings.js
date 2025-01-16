import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MeetingSchema = Schema({
  subject: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  bach: {
    type: String,
    required: true,
  },
  doctors: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  parentId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("meeting", MeetingSchema);
