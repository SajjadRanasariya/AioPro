import mongoose from "mongoose";
const Schema = mongoose.Schema;

const stateMasterSchema = Schema({
    stateId: {
        type: String,
        require: true,
    },
    countryName: {
        type: String,
        require: true,
    },
    stateName: {
        type: String,
        require: true,
    },
});

export default mongoose.model("stateMaster", stateMasterSchema);
