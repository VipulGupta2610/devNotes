import Note from "../model/book.model.js";

export const getNote = async (req, res) => {
  try {
    const note = await Note.find();
    res.status(200).json(note);
  } catch (error) {
    console.log("error is " + error);
    res.status(500).json(error);
  }
};

export const saveNote = async (req, res) => {
  try {
    const { subject, name, unit, description, downloadUrl, viewUrl } = req.body;
    // const availabenote = await Note.findOne({ downloadUrl });
    // if (availabenote) {
    //   return res.status(400).json({ message: "Already have this" });}
      // else 
        
      const newnote = new Note({
        subject: subject,
        name: name,
        unit: unit,
        description: description,
        downloadUrl: downloadUrl,
        viewUrl: viewUrl,
      });
      await newnote.save();
      res.status(201).json({message:"Notes Uploaded Successfuly"})
    
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Internal server error" + error})
  }
};
