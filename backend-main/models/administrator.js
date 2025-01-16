import mongoose from "mongoose";
const Schema = mongoose.Schema;

const administratorSchema = Schema({
    adminType: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    contactNumber: {
        type: Number,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    division: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    zone: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    dcrEmail: {
        type: String
    },
    alias: {
        type: String
    },
    status: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.model("administrator", administratorSchema);
 