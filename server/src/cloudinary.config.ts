// server/src/cloudinary.config.ts

import dotenv from "dotenv";
dotenv.config();

export const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`;
export const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET || "";
export const UPLOAD_FOLDER = process.env.CLOUDINARY_FOLDER || "";
//for deploy only
