import mongoose from "mongoose";
import TaxMaster from "../models/taxMaster";

export const getTax = async (query) => {
    return await TaxMaster.find(query);
};

export const getOne = async (id) => {
    return await TaxMaster.findById(id);
};


export const addOne = async (tax) => {
    return await TaxMaster.create(tax);
};

export const updateOne = async (tax) => {
    return await TaxMaster.findByIdAndUpdate(tax._id, tax);
};

export const deleteOne = async (id) => {
    return await TaxMaster.findOneAndRemove({ _id: id });
};