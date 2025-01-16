import mongoose from "mongoose";
const Schema = mongoose.Schema;

const opdSchema = Schema({
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    doctors: {
        type: Array,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date, default: Date.now },
});

export default mongoose.model("opd", opdSchema);
