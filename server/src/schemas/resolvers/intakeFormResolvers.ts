import { IntakeForm } from "../../models/IntakeForm.js";

const intakeFormResolvers = {
  Query: {
    getIntakeForm: async (_: any, { id }: { id: string }) => {
      return await IntakeForm.findById(id);
    },
    getUserIntakeForms: async (
      _: any,
      { userId, formType }: { userId: string; formType?: string }
    ) => {
      const filter: any = { userId };
      if (formType) filter.formType = formType;
      return await IntakeForm.find(filter);
    },
  },
  Mutation: {
    submitIntakeForm: async (
      _: any,
      {
        userId,
        input,
      }: { userId: string; input: { formType: string; responses: any[] } }
    ) => {
      return await IntakeForm.create({ userId, ...input });
    },
    deleteIntakeForm: async (_: any, { id }: { id: string }) => {
      return await IntakeForm.findByIdAndDelete(id);
    },
  },
};

export default intakeFormResolvers;
