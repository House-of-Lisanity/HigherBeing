export interface IntakeResponse {
  question: string;
  answer: string;
}

export interface IntakeForm {
  id: string;
  userId: string;
  formType: string;
  dateSubmitted: string;
  responses: IntakeResponse[];
}

export interface IntakeFormInput {
  formType: string;
  responses: IntakeResponse[];
}
