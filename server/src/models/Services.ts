import mongoose, { Schema, Document } from "mongoose";

export interface IServices extends Document {
  title: string;
  type: "Personal Training" | "Group Training" | "Whole Being";
  description: string;
  price: string;
  features: string;
}

const ServicesSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["Personal Training", "Group Training", "Whole Being"],
      required: true,
    },
    description: { type: String },
    price: { type: String },
    features: { type: String },
  },
  { timestamps: true }
);

export const Services = mongoose.model<IServices>("Services", ServicesSchema);
