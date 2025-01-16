// import mongoose from "mongoose";
import Firm from "../models/firm";
const csv = require("fast-csv");
import fs from "fs";
import path from "path";

export const AllFirms = async (query) => {
  return await Firm.find(query);
};

export const getOneFirm = async (id) => {
  return await Firm.findById(id);
};
export const insertMany = async (data) => {
  return await Firm.insertMany(data);
};
export const addFirm = async (data) => {
  return await Firm.create(data);
};

export const updateFirm = async (data) => {
  return await Firm.findByIdAndUpdate(data._id, data);
};

export const deleteFirm = async (id) => {
  return await Firm.findOneAndRemove({ _id: id });
};
