import mongoose from "mongoose";
const Schema = mongoose.Schema;

const doctorSpecialitySchema = Schema({
    divisionName: {
        type: String,
        require: true,
    },
    group: {
        type: String,
        require: true,
    },
    specialityName: {
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

export default mongoose.model("doctorSpeciality", doctorSpecialitySchema);
