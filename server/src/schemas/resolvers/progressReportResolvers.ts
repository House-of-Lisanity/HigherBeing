import { ProgressReport } from "../../models/ProgressReport.js";

const progressReportResolvers = {
  Query: {
    getProgressReport: async (_: any, { id }: { id: string }) => {
      return await ProgressReport.findById(id);
    },
    getUserProgressReports: async (
      _: any,
      { userId, formType }: { userId: string; formType?: string }
    ) => {
      const filter: any = { userId };
      if (formType) filter.formType = formType;
      return await ProgressReport.find(filter);
    },
  },
  Mutation: {
    submitProgressReport: async (
      _: any,
      {
        userId,
        input,
      }: { userId: string; input: { formType: string; responses: any[] } }
    ) => {
      return await ProgressReport.create({ userId, ...input });
    },
    deleteProgressReport: async (_: any, { id }: { id: string }) => {
      return await ProgressReport.findByIdAndDelete(id);
    },
  },
};

export default progressReportResolvers;
