import mongoose from "mongoose";
const Schema = mongoose.Schema;

const doctorVisitSchema = Schema({
  visitId: {
    type: String,
  },
  doctorId: {
    type: String,
    require: true,
  },
  doctorName: {
    type: String,
    require: true,
  },
  clinicAddress: {
    type: String,
    require: true,
  },
  zoneName: {
    type: String,
    require: true,
  },
  cityName: {
    type: String,
    require: true,
  },
  employeeName: {
    type: String,
    require: true,
  },
  visitDate: {
    type: Date,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  createBy: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  visitBy:{
    type:mongoose.Schema.ObjectId,
    ref:'doctors'
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("DoctorVisit", doctorVisitSchema);
