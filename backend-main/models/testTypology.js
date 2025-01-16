import mongoose from "mongoose";
const Schema = mongoose.Schema;

const testTypologySchema = Schema({
    typology: {
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

export default mongoose.model("testTypology", testTypologySchema);
