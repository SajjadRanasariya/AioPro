import mongoose from "mongoose";
import HospitalClass from "../models/hospitalClass";

export const getAll = async (query) => {
    return await HospitalClass.find(query);
};

export const getOne = async (id) => {
    return await HospitalClass.findById(id);
};

export const addOne = async (hospitalClass) => {
    return await HospitalClass.create(hospitalClass);
};

export const updateOne = async (hospitalClass) => {
    return await HospitalClass.findByIdAndUpdate(hospitalClass._id, hospitalClass);
};

export const deleteOne = async (id) => {
    return await HospitalClass.findOneAndRemove({ _id: id });
};