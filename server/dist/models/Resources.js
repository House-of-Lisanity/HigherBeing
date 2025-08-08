// /server/models/Resource.ts
import mongoose, { Schema } from "mongoose";
const ResourceSchema = new Schema({
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
}, { timestamps: true });
export const Resource = mongoose.model("Resource", ResourceSchema);
//# sourceMappingURL=Resources.js.map