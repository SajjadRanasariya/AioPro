import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tourSchema = Schema({
  zone: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  employee: {
    type: String,
    require: true,
  },
  employeeId:{
    type: mongoose.Schema.ObjectId,
    ref: "employee",
  },
  Date: {
    type: Date,
  },
  month: {
    type: String,
  },
  year: {
    type: String,
  },
  Doctor: {
    type: String,
  },
  DoctorZone: {
    type: String,
  },
  approvedBy: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    default: "Pending",
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
},
});

export default mongoose.model("Tour", tourSchema);
