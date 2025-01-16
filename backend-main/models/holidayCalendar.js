import mongoose from "mongoose";
const Schema = mongoose.Schema;

const holidayCalendarSchema = Schema({
  zone: {
    type: String,
    required: true,
  },
  holidayDate: {
    type: Date,
    required: true,
  },
  holidayName: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdOn: { type: Date, default: Date.now },
  modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("holidayCalendar", holidayCalendarSchema);
