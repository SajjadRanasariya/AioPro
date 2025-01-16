import mongoose from "mongoose";
const Schema = mongoose.Schema;

const firmMonthMaintenanceSchema = Schema({
    month: {
        type: String,
        require: true,
    },
    year: {
        type: String,
        require: true,
    },
    weekData: {
        type: Object,
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

export default mongoose.model("firmMonthMaintenance", firmMonthMaintenanceSchema);
