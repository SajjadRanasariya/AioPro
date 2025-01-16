import mongoose from "mongoose";
const Schema = mongoose.Schema;

const firmTypeSchema = Schema({
    firmTypeId: {
        type: String,
        require: true,
    },
    firmType: {
        type: String,
        require: true,
    },
    level: {
        type: Number,
        require: true,
    },
    business: {
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

export default mongoose.model("firmType", firmTypeSchema);
