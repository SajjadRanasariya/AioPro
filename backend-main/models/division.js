import mongoose from "mongoose";
const Schema = mongoose.Schema;

const divisionSchema = Schema({
    divisionName: {
        type: String,
        require: true,
    },
    appLogo: {
        type: String,
        require: false,
    },
    url: {
        type: String,
        require: false,
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

export default mongoose.model("division", divisionSchema);
