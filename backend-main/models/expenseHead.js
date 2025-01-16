import mongoose from "mongoose";
const Schema = mongoose.Schema;

const expenseHeadSchema = Schema({
    title: {
        type: String,
        require: true,
    },
    monthlyCap: {
        type: String,
        require: false,
    },
    isEditable: {
        type: String,
        require: false,
    },
    status: {
        type: String,
        require: false,
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

export default mongoose.model("expenseHead", expenseHeadSchema);
