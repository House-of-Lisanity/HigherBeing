import mongoose, { Schema } from "mongoose";
const IntakeFormSchema = new Schema({
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
export const IntakeForm = mongoose.model("IntakeForm", IntakeFormSchema);
//# sourceMappingURL=IntakeForm.js.map