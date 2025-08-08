import intakeFormResolvers from "./intakeFormResolvers.js";
import resourceResolvers from "./resourceResolvers.js";
import userResolvers from "./userResolvers.js";
import progressReportResolvers from "./progressReportResolvers.js";
export const resolvers = {
    Query: {
        ...intakeFormResolvers.Query,
        ...resourceResolvers.Query,
        ...userResolvers.Query,
        ...progressReportResolvers.Query,
    },
    Mutation: {
        ...intakeFormResolvers.Mutation,
        ...resourceResolvers.Mutation,
        ...userResolvers.Mutation,
        ...progressReportResolvers.Mutation,
    },
};
//# sourceMappingURL=index.js.map