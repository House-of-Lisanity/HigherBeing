import intakeFormResolvers from "./intakeFormResolvers.js";
import resourceResolvers from "./resourceResolvers.js";
import userResolvers from "./userResolvers.js";
import progressReportResolvers from "./progressReportResolvers.js";
import servicesResolvers from "./servicesResolvers.js";
export const resolvers = {
    Query: {
        ...intakeFormResolvers.Query,
        ...resourceResolvers.Query,
        ...userResolvers.Query,
        ...progressReportResolvers.Query,
        ...servicesResolvers.Query,
    },
    Mutation: {
        ...intakeFormResolvers.Mutation,
        ...resourceResolvers.Mutation,
        ...userResolvers.Mutation,
        ...progressReportResolvers.Mutation,
        ...servicesResolvers.Mutation,
    },
};
//# sourceMappingURL=index.js.map