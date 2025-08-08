import { gql } from "apollo-server-express";
const userTypeDefs = gql `
  type Address {
    street: String
    city: String
    state: String
    zip: String
  }

  type EmergencyContact {
    firstName: String
    lastName: String
    fullName: String
    phone: String
    relationship: String
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String
    email: String!
    phone: String
    address: Address
    age: Int
    weight: Float
    height: Float
    medicalConditions: [String]
    goals: [String]
    allergies: [String]
    emergencyContact: EmergencyContact
    gender: String
    preferredContactMethod: String
    notes: String
    role: String
    createdAt: String
    updatedAt: String
  }

  input AddressInput {
    street: String
    city: String
    state: String
    zip: String
  }

  input EmergencyContactInput {
    firstName: String
    lastName: String
    phone: String
    relationship: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: String
    address: AddressInput
    age: Int
    weight: Float
    height: Float
    medicalConditions: [String]
    goals: [String]
    allergies: [String]
    emergencyContact: EmergencyContactInput
    gender: String
    preferredContactMethod: String
    notes: String
    role: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    me: User
  }

  type Mutation {
    registerUser(input: UserInput!): AuthPayload
    updateUser(id: ID!, input: UserInput!): User
    deleteUser(id: ID!): Boolean
    login(email: String!, password: String!): AuthPayload
  }
`;
export default userTypeDefs;
//# sourceMappingURL=userTypeDefs.js.map