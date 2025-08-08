import { gql } from "@apollo/client";

export const GET_PROGRESS_REPORT = gql`
  query GetProgressReport($id: ID!) {
    getProgressReport(id: $id) {
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

export const GET_USER_PROGRESS_REPORTS = gql`
  query GetUserProgressReports($userId: ID!, $formType: String) {
    getUserProgressReports(userId: $userId, formType: $formType) {
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
