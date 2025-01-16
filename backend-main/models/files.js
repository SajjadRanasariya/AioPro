import mongoose from "mongoose";
const Schema = mongoose.Schema;

const filesSchema = Schema({
  filePath: {
    type: String,
    require: true,
  },
  fileName: {
    type: String,
    require: true,
  },
  fileType: {
    type: String,
    require: true,
  },
  folderId:{
    type: mongoose.Schema.ObjectId,
    ref: "Folder"
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
 
});

export default mongoose.model("files", filesSchema);
