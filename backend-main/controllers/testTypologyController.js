import mongoose from "mongoose";
import TestTypology from "../models/testTypology";

export const gettestTypology = async (query) => {
    return await TestTypology.find(query);
};

export const getOne = async (id) => {
    return await TestTypology.findById(id);
};

export const addOne = async (typology) => {
    return await TestTypology.create(typology);
};

export const updateOne = async (typology) => {
    return await TestTypology.findByIdAndUpdate(typology._id, typology);
};

export const deleteOne = async (id) => {
    return await TestTypology.findOneAndRemove({ _id: id });
};