import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = Schema({
    status: {
        type: String,
        require: true,
    },
    productName: {
        type: String,
    },
    productCode: {
        type: String,
    },
    division: {
        type: String,
    },
    compositionName: {
        type: String,
    },
    mrp: {
        type: Number,
    },
    baseUnit: {
        type: String,
    },
    baseUnitConversion: {
        type: String,
    },
    outPrice: {
        type: String,
    },
    packaging: {
        type: String,
    },
    taxType: {
        type: String,
    },
    taxPercent: {
        type: String,
    },
    hsn: {
        type: String,
    },
    productGroup: {
        type: String,
    },
    grade: {
        type: String,
    },
    size: {
        type: String,
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

export default mongoose.model("product", productSchema);
