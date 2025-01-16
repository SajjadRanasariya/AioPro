import mongoose from "mongoose";
const Schema = mongoose.Schema;

const leaveReasonSchema = Schema({
    leaveReason: {
        type: String,
        require: true,
    },
    leaveEntitlement: {
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

export default mongoose.model("leaveReason", leaveReasonSchema);
