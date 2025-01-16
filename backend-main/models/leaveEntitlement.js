import mongoose from "mongoose";
const Schema = mongoose.Schema;

const leaveEntitlementSchema = Schema({
    entitlementName: {
        type: String,
    },
    daysPerYear: {
        type: Number,
    },
    maximumPerMonth: {
        type: Number,
    },
    maximumDaysAdvance: {
        type: Number,
    },
    maximumDaysBackDate: {
        type: Number,
    },
    minimumDaysRestriction: {
        type: Number,
    },
    abbreviation: {
        type: String,
    },
    canCarryForward: {
        type: Boolean,
        
    },
    sandwiched: {
        type: Boolean,
        
    },
    paid: {
        type: Boolean,
        
    },
    minimumLeavePeriod: {
        type: Boolean,
        
    },
    balanceVisible: {
        type: Boolean,
        
    },
    encachable: {
        type: Boolean,
        
    },
    isEarned: {
        type: Boolean,
        
    },
    noOfDays: {
        type: String,
    },
    period: {
        type: String,
    },
    calculationBase: {
        type: String,
    },
    designation: {
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

export default mongoose.model("leaveEntitlement", leaveEntitlementSchema);
