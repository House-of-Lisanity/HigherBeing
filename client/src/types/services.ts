export interface Service {
  _id: string;
  title: string;
  type: "Personal Training" | "Group Training" | "Whole Being";
  description?: string;
  price?: string;
  features?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateServiceInput {
  title: string;
  type: "Personal Training" | "Group Training" | "Whole Being";
  description?: string;
  price?: string;
  features?: string;
}
