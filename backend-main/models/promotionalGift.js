import mongoose from "mongoose";
const Schema = mongoose.Schema;

const promotionalGiftsSchema = Schema({
    divisionName: {
        type: String,
        require: true,
    },
    employeeName: {
        type: String,
        require: true,
    },
    giftName: {
        type: String,
        require: true,
    },
    quantity: {
        type: String,
        require: true,
    },
    remaining: {
        type: String,
        require: true,
    },
    status: {
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

export default mongoose.model("promotionalGifts", promotionalGiftsSchema);
