import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cityMasterSchema = Schema({
    cityId: {
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
    zoneName: {
        type: String,
    },
    cityName: {
        type: String,
        require: true,
    },
});

export default mongoose.model("cityMaster", cityMasterSchema);
