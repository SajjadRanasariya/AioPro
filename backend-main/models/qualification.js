import mongoose from "mongoose";
const Schema = mongoose.Schema;

const qualificationSchema = Schema({
    qualification: {
        type: String,
        require: true,
    },
    fullName: {
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

export default mongoose.model("qualification", qualificationSchema);
