import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taxMasterSchema = Schema({
    id: {
        type: String,
        require: true,
    },
    taxType: {
        type: String,
        require: true,
    },
    percent: {
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

export default mongoose.model("taxMaster", taxMasterSchema);
