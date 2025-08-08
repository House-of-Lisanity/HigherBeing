import mongoose, { Schema } from "mongoose";
const ProgressReportSchema = new Schema({
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
export const ProgressReport = mongoose.model("ProgressReport", ProgressReportSchema);
//# sourceMappingURL=ProgressReport.js.map