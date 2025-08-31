import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    subject: String,
    name: String,
    unit: String,
    description: String,
    downloadUrl:String,
    viewUrl:String
});
const Note = mongoose.model("Note" , noteSchema);

export default Note;