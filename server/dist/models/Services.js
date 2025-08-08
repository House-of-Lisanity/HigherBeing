import mongoose, { Schema } from "mongoose";
const ServicesSchema = new Schema({
    title: { type: String, required: true },
    type: {
        type: String,
        enum: ["Personal Training", "Group Training", "Whole Being"],
        required: true,
    },
    description: { type: String },
    price: { type: String },
    features: { type: String },
}, { timestamps: true });
export const Services = mongoose.model("Services", ServicesSchema);
//# sourceMappingURL=Services.js.map