import mongoose from "mongoose";
const Schema = mongoose.Schema;

const backDateVisitSchema = Schema({
    employeeName: {
        type: String,
        require: true,
    },
    fromDate: {
        type: Date,
        require: true,
    },
    toDate: {
        type: Date,
        require: true,
    },
    deadline: {
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

export default mongoose.model("backDateVisit", backDateVisitSchema);
