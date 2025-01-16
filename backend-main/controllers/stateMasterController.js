import mongoose from "mongoose";
import stateMaster from "../models/stateMaster";

export const allState = async (query) => {
    return await stateMaster.find(query);
};

export const addState = async (state) => {
    return await stateMaster.create(state);
  };