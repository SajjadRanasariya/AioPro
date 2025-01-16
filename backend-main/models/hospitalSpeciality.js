import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hospitalSpecialitySchema = Schema({
    hospitalSpeciality: {
        type: String,
        require: true,
    },
    divisionName: {
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

export default mongoose.model("hospitalSpeciality", hospitalSpecialitySchema);
