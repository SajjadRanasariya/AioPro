import mongoose from "mongoose";
const Schema = mongoose.Schema;

const doctorMonthMaintenance = Schema({
    year: {
        type: String,
        require: true,
    },
    monthData: {
        type: Object,
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

export default mongoose.model("doctorMonthMaintenance", doctorMonthMaintenance);
