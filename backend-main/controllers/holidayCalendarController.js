import mongoose from "mongoose";
import HolidayCalendar from "../models/holidayCalendar";
import path from 'path'


export const allHoliday = async (query) => {
  return await HolidayCalendar.find(query);
};

export const addHoliday = async (holidayCalendar) => {
  return await HolidayCalendar.create(holidayCalendar);
};

export const insertMany = async (data) => {
  return await HolidayCalendar.insertMany(data);
};

export const editHoliday = async (holiday) => {
  return await HolidayCalendar.findByIdAndUpdate(holiday._id, holiday);
};

export const deleteHoliday = async (id) => {
  return await HolidayCalendar.findOneAndRemove({ _id: id });
};

