import { ProgressReport } from "../../models/ProgressReport.js";
const progressReportResolvers = {
    Query: {
        getProgressReport: async (_, { id }) => {
            return await ProgressReport.findById(id);
        },
        getUserProgressReports: async (_, { userId, formType }) => {
            const filter = { userId };
            if (formType)
                filter.formType = formType;
            return await ProgressReport.find(filter);
        },
    },
    Mutation: {
        submitProgressReport: async (_, { userId, input, }) => {
            return await ProgressReport.create({ userId, ...input });
        },
        deleteProgressReport: async (_, { id }) => {
            return await ProgressReport.findByIdAndDelete(id);
        },
    },
};
export default progressReportResolvers;
//# sourceMappingURL=progressReportResolvers.js.map