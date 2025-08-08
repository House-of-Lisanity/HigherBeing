import { gql } from "@apollo/client";

export const GET_INTAKE_FORM = gql`
  query GetIntakeForm($id: ID!) {
    getIntakeForm(id: $id) {
      id
      userId
      formType
      dateSubmitted
      responses {
        question
        answer
      }
    }
  }
`;

export const GET_USER_INTAKE_FORMS = gql`
  query GetUserIntakeForms($userId: ID!, $formType: String) {
    getUserIntakeForms(userId: $userId, formType: $formType) {
      id
      userId
      formType
      dateSubmitted
      responses {
        question
        answer
      }
    }
  }
`;
