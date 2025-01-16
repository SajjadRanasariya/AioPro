import mongoose from "mongoose";
import Meetings from "../models/Meetings";

export const allMeetings = async (query) => {
  return await Meetings.find(query);
};

export const oneMeetings = async (id) => {
  return await Meetings.findById(id);
};

export const addMeetings = async (meetings) => {
  return await Meetings.create(meetings);
};

export const editMeetings = async (meetings) => {
  return await Meetings.findByIdAndUpdate(meetings._id, meetings);
};

export const deleteMeetings = async (id) => {
  return await Meetings.findOneAndRemove({ _id: id });
};

export const deleteMany = async (req, res) => {
  try {
    const meetingIdsToDelete = req.body; // Assuming the request body contains an array of meeting IDs

    // Delete the meetings
    const deleteManyMeetings = await Meetings.updateMany(
      { _id: { $in: meetingIdsToDelete } },
      { deleted: true }
    );

    // Check if any meetings were found and deleted
    if (deleteManyMeetings.deletedCount === 0) {
      return res.status(404).json({ message: "Meetings(s) not found." });
    }

    // If you have related data for meetings, delete them here

    res
      .status(200)
      .json({ message: "Meetings deleted successfully.", deleteManyMeetings });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting Meetings(s).", error: err.message });
  }
};

export const deleteManyMeeting = async (meetingIds) => {
  const deletionCriteria = {
    _id: { $in: meetingIds.map((id) => mongoose.Types.ObjectId(id)) },
  };

  return await Meetings.deleteMany(deletionCriteria, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Meetings deleted successfully.");
    }
  });
};
