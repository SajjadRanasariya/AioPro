import mongoose from "mongoose";
const Schema = mongoose.Schema;

const notificationSchema = Schema({
  data: {
    type: Object,
    require: true,
  },
  type: {
    type: String,
    require: false,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  approvalBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  status:{
    type:String,
    default:"active"
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("notifications", notificationSchema);
