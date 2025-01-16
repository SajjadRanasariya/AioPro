import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productGroupSchema = Schema({
    groupName: {
        type: String,
        require: true,
    },
    groupCategory: {
        type: String,
        require: true
    },
    orderBy : {
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

export default mongoose.model(" productGroup", productGroupSchema);
