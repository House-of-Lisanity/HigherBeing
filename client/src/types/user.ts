export interface Address {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface EmergencyContact {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  relationship?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  phone?: string;
  address?: Address;
  age?: number;
  weight?: number;
  height?: number;
  medicalConditions?: string[];
  goals?: string[];
  allergies?: string[];
  emergencyContact?: EmergencyContact;
  gender?: string;
  preferredContactMethod?: string;
  notes?: string;
  role: "client" | "admin";
  createdAt: string;
  updatedAt: string;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  address?: Address;
  age?: number;
  weight?: number;
  height?: number;
  medicalConditions?: string[];
  goals?: string[];
  allergies?: string[];
  emergencyContact?: EmergencyContact;
  gender?: string;
  preferredContactMethod?: string;
  notes?: string;
  role?: "client" | "admin";
}
