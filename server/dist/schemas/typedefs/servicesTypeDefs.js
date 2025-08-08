import { gql } from "apollo-server-express";
const servicesTypeDefs = gql `
  type Services {
    _id: ID!
    title: String!
    type: String!
    description: String
    price: String
    features: String
    createdAt: String
    updatedAt: String
  }

  input CreateServicesInput {
    title: String!
    type: String!
    description: String
    price: String
    features: String
  }

  type Query {
    servicesByType(type: String!): [Services]
    serviceById(id: ID!): Services
  }

  type Mutation {
    createServices(input: CreateServicesInput!): Services
    deleteServices(id: ID!): Boolean
  }
`;
export default servicesTypeDefs;
//# sourceMappingURL=servicesTypeDefs.js.map