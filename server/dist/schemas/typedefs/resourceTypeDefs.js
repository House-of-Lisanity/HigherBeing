// /server/graphql/typeDefs/resource.ts
import { gql } from "apollo-server-express";
const resourceTypeDefs = gql `
  type Resource {
    _id: ID!
    title: String!
    type: String!
    description: String
    content: String
    externalUrl: String
    createdBy: User!
    createdAt: String
    updatedAt: String
  }

  input CreateResourceInput {
    title: String!
    type: String!
    description: String
    content: String
    externalUrl: String
  }

  type Query {
    resourcesByType(type: String!): [Resource]
    resourceById(id: ID!): Resource
  }

  type Mutation {
    createResource(input: CreateResourceInput!): Resource
    deleteResource(id: ID!): Boolean
  }
`;
export default resourceTypeDefs;
//# sourceMappingURL=resourceTypeDefs.js.map