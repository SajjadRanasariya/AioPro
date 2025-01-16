import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schemeMasterSchema = Schema({
    srNo: {
        type: String,
        require: true,
    },
    schemeName: {
        type: String,
        require: true,
    },
    startDate: {
        type: Date,
        require: true,
    },
    endDate: {
        type: Date,
        require: true,
    },
    schemeQuatity: {
        type: Number,
        require: true,
    },
    numberOfFreeItems: {
        type: Number,
        require: true,
    },
    productName: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
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

export default mongoose.model("schemeMaster", schemeMasterSchema);
