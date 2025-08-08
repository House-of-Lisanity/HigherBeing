import mongoose, { Schema, Document } from "mongoose";

export interface IProgressReport extends Document {
  userId: mongoose.Types.ObjectId;
  formType: string;
  dateSubmitted: Date;
  responses: {
    question: string;
    answer: string;
  }[];
}

const ProgressReportSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  formType: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
  responses: [
    {
      question: String,
      answer: String,
    },
  ],
});

export const ProgressReport = mongoose.model<IProgressReport>(
  "ProgressReport",
  ProgressReportSchema
);
