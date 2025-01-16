import mongoose from "mongoose";
import hospitalSpeciality from "../models/hospitalSpeciality";

export const getAll = async (query) => {
    return await hospitalSpeciality.find(query);
};

export const getOne = async (id) => {
    return await hospitalSpeciality.findById(id);
};

export const addOne = async (speciality) => {
    return await hospitalSpeciality.create(speciality);
};

export const updateOne = async (speciality) => {
    return await hospitalSpeciality.findByIdAndUpdate(speciality._id, speciality);
};

export const deleteOne = async (id) => {
    return await hospitalSpeciality.findOneAndRemove({ _id: id });
};