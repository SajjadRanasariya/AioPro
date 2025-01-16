import mongoose from "mongoose";
const Schema = mongoose.Schema;

const targetSchema = Schema({
    srNo: {
        type: String,
        // require: true,
    },
    targetType: {
        type: String,
        // require: true,
    },
    employeeName: {
        type: String,
        // require: true,
    },
    zone: {
        type: String,
        // require: true,
    },
    city: {
        type: String,
        // require: true,
    },
    frequency: {
        type: String,
        // require: true,
    },
    year: {
        type: String,
        // require: true,
    },
    month: {
        type: String,
        // require: true,
    },
    quarter: {
        type: String,
        // require: true,
    },
    pobSec: {
        type: String,
        // require: true,
    },
    firmSec: {
        type: String,
        // require: true,
    },
    noOfDrVisit: {
        type: String,
        // require: true,
    },
    noOfChemistVisit: {
        type: String,
        // require: true,
    },
    noOfNewChemistAdddition: {
        type: String,
        // require: true,
    },
    noOfNewDoctorAdddition: {
        type: String,
        // require: true,
    },
});

export default mongoose.model("target", targetSchema);
