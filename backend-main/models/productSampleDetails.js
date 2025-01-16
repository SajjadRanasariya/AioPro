import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSampleDetailsSchema = Schema({
    divisionName: {
        type: String,
        require: true,
    },
    employeeName: {
        type: String,
        require: true
    },
    productName: {
        type: Array,
    },
    quantity: {
        type: Number,
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

export default mongoose.model("productSampleDetails", productSampleDetailsSchema);
