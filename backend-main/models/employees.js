import mongoose from "mongoose";
const Schema = mongoose.Schema;

const EmployeesSchema = Schema({
  basicInformation: {
    type: Object,
    require: true,
  },
  contactInformation: {
    type: Object,
    require: true,
  },
  workInformation: {
    type: Object,
    require: true,
  },
  otherInformation: {
    type: Object,
    require: true,
  },
  dailyAllowanceInformation: {
    type: Object,
    require: true,
  },
  accountInformation: {
    type: Object,
    require: true,
  },
  status: {
    type: String,
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("employee", EmployeesSchema);
