import { gql } from "@apollo/client";

export const SUBMIT_PROGRESS_REPORT = gql`
  mutation SubmitProgressReport($userId: ID!, $input: ProgressReportInput!) {
    submitProgressReport(userId: $userId, input: $input) {
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

export const UPDATE_PROGRESS_REPORT = gql`
  mutation UpdateProgressReport($id: ID!, $input: ProgressReportInput!) {
    updateProgressReport(id: $id, input: $input) {
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

export const DELETE_PROGRESS_REPORT = gql`
  mutation DeleteProgressReport($id: ID!) {
    deleteProgressReport(id: $id)
  }
`;
