import { gql } from "@apollo/client";

export const SUBMIT_INTAKE_FORM = gql`
  mutation SubmitIntakeForm($userId: ID!, $input: IntakeFormInput!) {
    submitIntakeForm(userId: $userId, input: $input) {
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

export const DELETE_INTAKE_FORM = gql`
  mutation DeleteIntakeForm($id: ID!) {
    deleteIntakeForm(id: $id)
  }
`;
