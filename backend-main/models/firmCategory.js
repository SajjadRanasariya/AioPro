import mongoose from "mongoose";
const Schema = mongoose.Schema;

const firmCategorySchema = Schema({
    firmCategory: {
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

export default mongoose.model("firmCategory", firmCategorySchema);
