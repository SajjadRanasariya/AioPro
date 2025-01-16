import mongoose from "mongoose";
const Schema = mongoose.Schema;

const presentationSchema = Schema({
    presentationName: {
        type: String,
        require: true,
    },
    assigedType: {
        type: String,
    },
    assigedTo: {
        type: String,
    },
    division: {
        type: String,
    },
    description: {
        type: String,
    },
    slideImgs: {
        type: Array,
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

export default mongoose.model("presentation", presentationSchema);
