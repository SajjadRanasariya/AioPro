import mongoose from "mongoose";
const Schema = mongoose.Schema;

const typeSchema = Schema({
    typeName: {
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

export default mongoose.model("type", typeSchema);
