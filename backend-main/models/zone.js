import mongoose from "mongoose";
const Schema = mongoose.Schema;

const zoneSchema = Schema({
    zoneCode: {
        type: String,
        require: true,
    },
    zoneName: {
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

export default mongoose.model("zone", zoneSchema);
