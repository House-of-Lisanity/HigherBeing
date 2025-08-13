// // server/src/routes/upload.ts

// import express from "express";
// import multer from "multer";
// import fetch from "node-fetch";
// import {
//   CLOUDINARY_URL,
//   UPLOAD_PRESET,
//   UPLOAD_FOLDER,
// } from "../cloudinary.config";

// const router = express.Router();
// const upload = multer(); // uses memory storage

// router.post("/", upload.single("file"), async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ error: "No file provided" });
//     }

//     const formData = new FormData();
//     formData.append("file", new Blob([file.buffer]), file.originalname);
//     formData.append("upload_preset", UPLOAD_PRESET);
//     if (UPLOAD_FOLDER) {
//       formData.append("folder", UPLOAD_FOLDER);
//     }

//     const cloudRes = await fetch(CLOUDINARY_URL, {
//       method: "POST",
//       body: formData as any,
//     });

//     const data = await cloudRes.json();

//     if (!cloudRes.ok) {
//       return res
//         .status(500)
//         .json({ error: data.error?.message || "Upload failed" });
//     }

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: (err as Error).message });
//   }
// });

// export default router;
