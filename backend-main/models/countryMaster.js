import mongoose from "mongoose";
const Schema = mongoose.Schema;

const countryMasterSchema = Schema({
    countryId: {
        type: String,
        require: true,
    },
    countryCode: {
        type: String,
        require: true,
    },
    countryName: {
        type: String,
        require: true,
    },
});

export default mongoose.model("countryMaster", countryMasterSchema);
