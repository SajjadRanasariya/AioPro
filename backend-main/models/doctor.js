import mongoose from "mongoose";
const Schema = mongoose.Schema;

const addressSchema = {
    state: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    division: {
        type: String,
        required: true,
    },
    zone: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
};

const clinicAddressSchema = {
    doctorName: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    clinicAddress: {
        type: String,
    },
    city: {
        type: String,
    },
    preferredDay: {
        type: String,
    },
    longitude: {
        type: String,
    },
    latitude: {
        type: String,
    },
};

const workSchema = {
    speciality: {
        type: Array,
    },
    type: {
        type: String,

    },
    category: {
        type: String,

    },
    approximatedBusiness: {
        type: String,

    },
    assignedTo: {
        type: String
    },
    firmName: {
        type: String
    },
};

const doctorSchema = Schema({
    doctorId: {
        type: String,
    },
    doctorCode: {
        type: String,
    },
    doctorName: {
        type: String,
    },

    hospitalName: {
        type: String,
    },
    gender: {
        type: String,
    },
    contactNumber: {
        type: Number,
    },
    email: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    maritalStatus: {
        type: String,
    },
    anniversaryDate: {
        type: Date,
    },
    qualification: {
        type: String,
    },
    registrationNumber: {
        type: String,
    },
    addressInformation: {
        type: Object
    },
    workInformation: {
        type: Object
    },
    clinicAddress: {
        type: Object
    },
    countryName: {
        type: String
    },
    status: {
        type: String
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

export default mongoose.model("Doctor", doctorSchema);
