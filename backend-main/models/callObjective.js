import mongoose from "mongoose";
const Schema = mongoose.Schema;

const callObjectiveSchema = Schema({
    objectiveName: {
        type: String,
        require: true,
    },
    abbrevation: {
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

export default mongoose.model("callObjective", callObjectiveSchema);
