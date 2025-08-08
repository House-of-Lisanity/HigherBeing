import mongoose, { Schema } from "mongoose";
// EmergencyContact as subdocument schema
const EmergencyContactSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    relationship: { type: String },
}, { _id: false } // no auto _id for embedded object
);
// Virtual: fullName for emergencyContact
EmergencyContactSchema.virtual("fullName").get(function () {
    return `${this.firstName ?? ""} ${this.lastName ?? ""}`.trim();
});
EmergencyContactSchema.set("toJSON", { virtuals: true });
EmergencyContactSchema.set("toObject", { virtuals: true });
const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type: String },
    },
    age: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    medicalConditions: [String],
    goals: [String],
    allergies: [String],
    emergencyContact: {
        type: EmergencyContactSchema,
        required: false,
    },
    gender: { type: String },
    preferredContactMethod: { type: String },
    notes: { type: String },
    role: {
        type: String,
        enum: ["client", "admin"],
        default: "client",
    },
    passwordHash: { type: String, required: true },
}, { timestamps: true });
// Virtual: fullName for user
UserSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});
UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });
export const User = mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map