import Notification from "../models/notification";
import User from "./../models/user";
import mongoose from "mongoose";

export const getNotification = async (query) => {
  return await Notification.find(query).populate('createdBy', ['firstName', "role"]);
};

export const addNotification = async (notification) => {
  return await Notification.create(notification);
};

export const updateNotification = async (notification) => {
  const user = await User.findById(notification.approvalBy)
  let data = {
    data: {
      message: `meeting approval by ${user.firstName} (${user.role}) `
    },
    type: "meeting_approvel",
    createdBy: notification.approvalBy,
    approvalBy: notification.createdBy,
  };
  await Notification.create(data);

  return await Notification.findByIdAndUpdate(notification._id, notification);
};

export const updateUserNotification = async (notification) => {
  const user = await User.findById(notification.approvalBy)
  let data = {
    data: {
      message: `user approval by ${user.firstName} (${user.role}) `
    },
    type: "user_change_approvel",
    createdBy: notification.approvalBy,
    approvalBy: notification.createdBy,
  };
  await Notification.create(data);

  return await Notification.findByIdAndUpdate(notification._id, notification);
};

export const updateNotificationApproval = async (notification) => {
  return await Notification.findByIdAndUpdate(notification._id, notification);
};

// export const updateNotificationUserApproval = async (notification) => {
//   return await Notification.findByIdAndUpdate(notification._id, notification);
// };

export const deleteManyNotification = async (notificationIds) => {
  // Check if notificationIds is an array
  if (!Array.isArray(notificationIds) || notificationIds.length === 0) {
    console.error("notificationIds is not a valid array of ObjectIds");
    return; // Exit the function gracefully
  }
  const deletionCriteria = {
    _id: { $in: notificationIds.map((id) => mongoose.Types.ObjectId(id)) },
  };

  try {
    const result = await Notification.deleteMany(deletionCriteria);
    return result;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error to be handled by the caller if needed
  }
};

