import mongoose from "mongoose";
import Designations from "../models/designations";

export const getAllDesignations = async (query) => {
  return await Designations.find(query);
};

export const getDesignations = async (id) => {
  return await Designations.findById(id);
};

export const addDesignations = async (division) => {
  return await Designations.create(division);
};

export const updateDesignations = async (division) => {
  return await Designations.findByIdAndUpdate(division._id, division);
};

export const deleteDesignations = async (id) => {
  return await Designations.findOneAndRemove({ _id: id });
};
