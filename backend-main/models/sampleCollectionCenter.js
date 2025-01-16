import mongoose from "mongoose";
const Schema = mongoose.Schema;

const samplecollectionCenterSchema = Schema({
    centerName: {
        type: String,
        require: true,
    },
    centerCode: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    zoneName: {
        type: String,
        require: true
    },
    cityName: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    assignTo: {
        type: String,
        require: true
    },
    centerAddress: {
        type: String,
        require: true
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

export default mongoose.model(" samplecollectionCenter", samplecollectionCenterSchema);
