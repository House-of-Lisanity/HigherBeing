import mongoose, { Schema, Document } from "mongoose";

export interface IUserProfile extends Document {
  firstName: string;
  lastName: string;
  fullName?: string; // virtual
  email: string;
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  age?: number;
  weight?: number;
  height?: number;
  medicalConditions?: string[];
  goals?: string[];
  allergies?: string[];
  emergencyContact?: {
    firstName?: string;
    lastName?: string;
    fullName?: string; // virtual
    phone?: string;
    relationship?: string;
  };
  gender?: string;
  preferredContactMethod?: string;
  notes?: string;
  role: "client" | "admin";
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

// EmergencyContact as subdocument schema
const EmergencyContactSchema: Schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    relationship: { type: String },
  },
  { _id: false } // no auto _id for embedded object
);

// Virtual: fullName for emergencyContact
EmergencyContactSchema.virtual("fullName").get(function (this: any) {
  return `${this.firstName ?? ""} ${this.lastName ?? ""}`.trim();
});

EmergencyContactSchema.set("toJSON", { virtuals: true });
EmergencyContactSchema.set("toObject", { virtuals: true });

const UserSchema: Schema = new Schema(
  {
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
  },
  { timestamps: true }
);

// Virtual: fullName for user
UserSchema.virtual("fullName").get(function (this: IUserProfile) {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

export const User = mongoose.model<IUserProfile>("User", UserSchema);
