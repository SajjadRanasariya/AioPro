import mongoose from "mongoose";
import visitCounter from "../models/visitCounter";

export const getAll = async (query) => {
    return await visitCounter.find(query);
};

export const getOne = async (id) => {
    return await visitCounter.findById(id);
};

export const addOne = async (visit) => {
    return await visitCounter.create(visit);
};

export const updateOne = async (visit) => {
    return await visitCounter.findByIdAndUpdate(visit._id, visit);
};

export const deleteOne = async (id) => {
    return await visitCounter.findOneAndRemove({ _id: id });
};