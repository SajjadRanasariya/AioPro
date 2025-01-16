import mongoose from "mongoose";
import firmVisit from "../models/firmVisit";

export const getAll = async (query) => {
    return await firmVisit.find(query);
};

export const getOne = async (id) => {
    return await firmVisit.findById(id);
};

export const addOne = async (visit) => {
    return await firmVisit.create(visit);
};

export const updateOne = async (visit) => {
    return await firmVisit.findByIdAndUpdate(visit._id, visit);
};

export const deleteOne = async (id) => {
    return await firmVisit.findOneAndRemove({ _id: id });
};