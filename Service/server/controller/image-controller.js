import File from "../models/file.js";
import os from "os";

const networkInterfaces = os.networkInterfaces();

const IP = networkInterfaces.en0[1].address;
console.log(IP);

export const uploadImage = async (req, res) => {
  req.app.adress;
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    res.status(200).json({ path: `http://${IP}:8000/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
