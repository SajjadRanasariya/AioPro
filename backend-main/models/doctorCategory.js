import mongoose from "mongoose";
const Schema = mongoose.Schema;

const doctorCategorySchema = Schema({
    categoryName: {
        type: String,
        require: true,
    },
    minimumPreference: {
        type: Number,
        require: true,
    },
    maximumPreference: {
        type: Number,
        require: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("doctorCategory", doctorCategorySchema);
