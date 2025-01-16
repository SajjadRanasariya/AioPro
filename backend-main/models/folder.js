import mongoose from "mongoose";
const Schema = mongoose.Schema;

const folderSchema = Schema({
  folderName: {
    type: String,
    require: true,
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("folder", folderSchema);
