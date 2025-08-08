// /server/models/Resource.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IResource extends Document {
  title: string;
  type: "Nutrition" | "Exercise" | "Meal Prep";
  description?: string;
  content?: string; // Optional original content (Markdown/HTML/text)
  externalUrl?: string; // Optional link to outside source
  createdBy: mongoose.Types.ObjectId;
}

const ResourceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["Nutrition", "Exercise", "Meal Prep"],
      required: true,
    },
    description: { type: String },
    content: { type: String }, // Optional original content (Markdown/HTML/text)
    externalUrl: { type: String }, // Optional link to outside source
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Resource = mongoose.model<IResource>("Resource", ResourceSchema);
