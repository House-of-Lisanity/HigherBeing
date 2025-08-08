export interface ProgressResponse {
  question: string;
  answer: string;
}

export interface ProgressReport {
  id: string;
  userId: string;
  formType: string;
  dateSubmitted: string;
  responses: ProgressResponse[];
}

export interface ProgressReportInput {
  formType: string;
  responses: ProgressResponse[];
}
