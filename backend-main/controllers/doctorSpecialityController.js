import mongoose from "mongoose";
import doctorSpeciality from "../models/doctorSpeciality";

export const getAll = async (query) => {
    return await doctorSpeciality.find(query);
};

export const getOne = async (id) => {
    return await doctorSpeciality.findById(id);
};

export const addOne = async (speciality) => {
    return await doctorSpeciality.create(speciality);
};

export const insertMany = async (data) => {
    return await doctorSpeciality.insertMany(data);
};

export const updateOne = async (speciality) => {
    return await doctorSpeciality.findByIdAndUpdate(speciality._id, speciality);
};

export const deleteOne = async (id) => {
    return await doctorSpeciality.findOneAndRemove({ _id: id });
};

