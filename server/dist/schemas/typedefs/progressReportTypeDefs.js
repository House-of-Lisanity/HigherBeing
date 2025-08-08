import { gql } from "apollo-server-express";
const progressReportTypeDefs = gql `
  type ProgressResponse {
    question: String
    answer: String
  }

  type ProgressReport {
    id: ID!
    userId: ID!
    formType: String!
    dateSubmitted: String
    responses: [ProgressResponse]
  }

  input ProgressResponseInput {
    question: String
    answer: String
  }

  input ProgressReportInput {
    formType: String!
    responses: [ProgressResponseInput]
  }

  type Query {
    getProgressReport(id: ID!): ProgressReport
    getUserProgressReports(userId: ID!, formType: String): [ProgressReport]
  }

  type Mutation {
    submitProgressReport(
      userId: ID!
      input: ProgressReportInput!
    ): ProgressReport
    deleteProgressReport(id: ID!): Boolean
  }
`;
export default progressReportTypeDefs;
//# sourceMappingURL=progressReportTypeDefs.js.map