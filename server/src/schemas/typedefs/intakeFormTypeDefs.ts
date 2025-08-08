import { gql } from "apollo-server-express";

const intakeFormTypeDefs = gql`
  type IntakeResponse {
    question: String
    answer: String
  }

  type IntakeForm {
    id: ID!
    userId: ID!
    formType: String!
    dateSubmitted: String
    responses: [IntakeResponse]
  }

  input IntakeResponseInput {
    question: String
    answer: String
  }

  input IntakeFormInput {
    formType: String!
    responses: [IntakeResponseInput]
  }

  type Query {
    getIntakeForm(id: ID!): IntakeForm
    getUserIntakeForms(userId: ID!, formType: String): [IntakeForm]
  }

  type Mutation {
    submitIntakeForm(userId: ID!, input: IntakeFormInput!): IntakeForm
    deleteIntakeForm(id: ID!): Boolean
  }
`;

export default intakeFormTypeDefs;
