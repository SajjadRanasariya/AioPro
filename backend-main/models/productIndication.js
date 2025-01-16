import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productIndicationSchema = Schema({
    productName: {
        type: String,
        require: true,
    },
    indication: {
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

export default mongoose.model("productIndication", productIndicationSchema);
