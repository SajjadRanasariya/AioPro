import mongoose from "mongoose";
import clinicAddress from "../models/clinicAddress";

export const getAll = async (query) => {
    return await clinicAddress.find(query);
};

export const addOne = async (address) => {
    return await clinicAddress.create(address);
  };

  export const getOne = async (id) => {
    return await clinicAddress.findById(id);
};

export const updateOne = async (address) => {
    return await clinicAddress.findByIdAndUpdate(address._id, address);
};

export const deleteOne = async (id) => {
    return await clinicAddress.findOneAndRemove({ _id: id });
};

