import mongoose from "mongoose";
import countryMaster from "../models/countryMaster";

export const allCountry = async (query) => {
    return await countryMaster.find(query);
};

export const addCountry = async (country) => {
    return await countryMaster.create(country);
  };