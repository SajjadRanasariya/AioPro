import mongoose from "mongoose";
const Schema = mongoose.Schema;

const firmVisitSchema = Schema({
    firmId: {
        type: String,
        require: true,
    },
    firmType: {
        type: String,
        require: true,
    },
    firmName: {
        type: String,
        require: true,
    },
    employeeName: {
        type: String,
        require: true,
    },
    city: {
        type: String,
    },
    zone: {
        type: String,
    },
    firmAddress: {
        type: String,
    },
    visitAddress: {
        type: String,
    },
    visitDate: {
        type: Date,
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

export default mongoose.model("firmVisit", firmVisitSchema);
