import mongoose from "mongoose";
const Schema = mongoose.Schema;

const visitCounterSchema = Schema({
    type: {
        type: String,
        require: true,
    },
    clientId: {
        type: String,
    },
    employeeCode: {
        type: String,
    },
    employeeName: {
        type: String,
    },
    speciality: {
        type: String,
    },
    category: {
        type: String,
    },
    clientName: {
        type: String,
    },
    visitCounter: {
        type: String,
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

export default mongoose.model("visitCounter", visitCounterSchema);
