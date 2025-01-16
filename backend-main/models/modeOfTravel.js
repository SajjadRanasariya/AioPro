import mongoose from "mongoose";
const Schema = mongoose.Schema;

const modeOfTravelSchema = Schema({
    mode: {
        type: String,
        require: true,
    },
    status: {
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

export default mongoose.model("modeOfTravel", modeOfTravelSchema);
