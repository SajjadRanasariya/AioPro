import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clinicAddressSchema = Schema({
    doctorName: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    clinicAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    preferredDay: {
        type: String,
    },
    longitude: {
        type: String,
    },
    latitude: {
        type: String,
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: "doctors",
        required: true
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

export default mongoose.model("clinicAddress", clinicAddressSchema);
