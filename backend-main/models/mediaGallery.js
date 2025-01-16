import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mediaGallerySchema = Schema({
    srNo: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    divisionName: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: false,
    },
    url: {
        type: String,
        require: false,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("mediaGallery", mediaGallerySchema);
