import mongoose from "mongoose";
import sampleCollectionCenter from "../models/sampleCollectionCenter";

export const getAll = async (query) => {
    return await sampleCollectionCenter.find(query);
};

export const getOne = async (id) => {
    return await sampleCollectionCenter.findById(id);
};


export const addOne = async (collectionCenter) => {
    return await sampleCollectionCenter.create(collectionCenter);
};

export const updateOne = async (collectionCenter) => {
    return await sampleCollectionCenter.findByIdAndUpdate(collectionCenter._id, collectionCenter);
};

export const deleteOne = async (id) => {
    return await sampleCollectionCenter.findOneAndRemove({ _id: id });
};