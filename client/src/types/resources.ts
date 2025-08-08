export type ResourceType = "Nutrition" | "Exercise" | "Meal Prep";

export interface Resources {
  _id: string;
  title: string;
  type: ResourceType;
  description?: string;
  content?: string;
  externalUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateResourceInput {
  title: string;
  type: ResourceType;
  description?: string;
  content?: string;
  externalUrl?: string;
}
