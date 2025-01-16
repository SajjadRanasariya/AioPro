import mongoose from "mongoose";
import Zone from '../models/zone'

export const getAllZone = async (query) => {
    return await Zone.find(query);
};

export const getOne = async (id) => {
    return await Zone.findById(id);
};

export const addOne = async (zone) => {
    return await Zone.create(zone);
};

export const updateOne = async (zone) => {
    return await Zone.findByIdAndUpdate(zone._id, zone);
};

export const deleteOne = async (id) => {
    return await Zone.findOneAndRemove({ _id: id });
};