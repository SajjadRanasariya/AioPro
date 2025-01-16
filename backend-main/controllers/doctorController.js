import mongoose from "mongoose";
import Doctor from "../models/doctor";
import clinicAddress from "../models/clinicAddress";
import path from 'path'

export const getAll = async (query) => {
    try {
        let doctorDetails = await Doctor.aggregate([
            {
                $lookup: {
                    from: "clinicaddresses",
                    localField: "_id",
                    foreignField: "doctorId",
                    as: "clinicAddress",
                },
            },

        ]);

        return doctorDetails;
    } catch (error) {
        throw error;
    }
};

export const addOne = async (doctor) => {
    return await Doctor.create(doctor);
};

export const getOne = async (id) => {
    try {
        let doctorDetails = await Doctor.aggregate([
            {
                $match: {
                    _id: mongoose.Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    from: "clinicaddresses",
                    localField: "_id",
                    foreignField: "doctorId",
                    as: "clinicAddress",
                },
            },

        ]);

        return doctorDetails;
    } catch (error) {
        throw error;
    }
}

export const insertMany = async (doctor) => {
    return await Doctor.insertMany(doctor);
};

export const updateOne = async (doctor) => {
    return await Doctor.findByIdAndUpdate(doctor._id, doctor);
};


export const deleteOne = async (id) => {
    await Doctor.findOneAndRemove({ _id: id });
    await clinicAddress.deleteMany({ doctorId: id });
    return;
};

