import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sampleGiftWithChallanSchema = Schema({
    sampleGiftCode: {
        type: String,
        require: true,
    },
    packSize: {
        type: String,
        require: true,
    },
    quantity: {
        type: String,
        require: true,
    },
    batchNo: {
        type: String,
        require: true,
    },
    expiryDate: {
        type: Date,
        require: true,
    },
    challanNo: {
        type: String,
        require: true,
    },
    fieldPerson: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
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

export default mongoose.model("sampleGiftWithChallan", sampleGiftWithChallanSchema);
