import mongoose from "mongoose";
import modeOfTravel from "../models/modeOfTravel";

export const getAll = async (query) => {
    return await modeOfTravel.find(query);
};

export const getOne = async (id) => {
    return await modeOfTravel.findById(id);
};

export const addOne = async (travel) => {
    return await modeOfTravel.create(travel);
};

export const updateOne = async (travel) => {
    return await modeOfTravel.findByIdAndUpdate(travel._id, travel);
};
export const changeStatus = async (travel) => {
    return await modeOfTravel.findByIdAndUpdate(travel._id, travel);
};

export const deleteOne = async (id) => {
    return await modeOfTravel.findOneAndRemove({ _id: id });
};