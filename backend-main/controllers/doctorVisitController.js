import mongoose from "mongoose";
import DoctorVisit from "../models/doctorVisit";

export const allVisit = async (query) => {
    return await DoctorVisit.find(query);
};
export const getOne = async (id) => {
  return await DoctorVisit.findById(id);
};

export const addVisit = async (visit) => {
    return await DoctorVisit.create(visit);
  };

export const exportToCsv = async (visit) => {
    return await DoctorVisit.create(visit);
  };

