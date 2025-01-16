import mongoose from "mongoose";
const Schema = mongoose.Schema;

const skippedReasonSchema = Schema({
    reason: {
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

export default mongoose.model("skippedReason", skippedReasonSchema);
