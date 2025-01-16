import mongoose from "mongoose";
import Leave from "../models/leave";

export const getLeave = async (query) => {
  return await Leave.find(query);
};

export const getOne = async (id) => {
  return await Leave.findById(id);
};

export const leaveReport = async (query) => {
  const { startDate, endDate } = query;
  const pipeline = [
    {
      $match: {
        leaveStartDate: {
          $gte: new Date(startDate),
          $lte: new Date(endDate),
        },
        // otherField: query.otherField,
      },
    },
    {
      $lookup: {
        from: "employees",
        localField: "employeesId",
        foreignField: "_id",
        as: "employees",
      },
    },
    {
      $lookup: {
        from: "leavereasons",
        localField: "leaveReasonId",
        foreignField: "_id",
        as: "reson",
      },
      
    },
  ];

  return await Leave.aggregate(pipeline);
};

export const addLeave = async (data) => {
  const start = new Date(data.leaveStartDate);
  const end = new Date(data.leaveEndDate);

  const leaveData = {
    employeesId: data.employeesId,
    leaveReasonId: data.leaveReasonId,
    dayOfLeave: data.dayOfLeave,
    leaveType:data.leaveType,
    leaveStartDate: new Date(data.leaveStartDate),
    leaveEndDate: new Date(data.leaveEndDate),
    satatus: "pending",
  };

  return await Leave.create(leaveData);
};

export const updateLeave = async (data) => {
  return await Leave.findByIdAndUpdate(data._id, data);
};

export const deleteOne = async (id) => {
  return await Leave.findOneAndRemove({ _id: id });
};



  