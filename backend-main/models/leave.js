import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LeaveSchema = Schema({
  employeesId: {
    type: mongoose.Schema.ObjectId,
    ref: "employee",
    require: true,
  },
  leaveReasonId: {
    type: mongoose.Schema.ObjectId,
    ref: "leaveReason",
    require: true,
  },
  dayOfLeave: {
    type: String,
    require: true,
  },
  leaveType: {
    type: String,
    require: false,
  },
  leaveStartDate: {
    type: Date,
    require: true,
  },
  leaveEndDate: {
    type: Date,
    require: true,
  },
  satatus: {
    type: String,
    default: "pending",
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

export default mongoose.model("leave", LeaveSchema);
