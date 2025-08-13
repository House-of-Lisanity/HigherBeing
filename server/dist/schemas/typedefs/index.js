import { gql } from "apollo-server-express";
import intakeFormTypeDefs from "./intakeFormTypeDefs.js";
import resourceTypeDefs from "./resourceTypeDefs.js";
import progressReportTypeDefs from "./progressReportTypeDefs.js";
import userTypeDefs from "./userTypeDefs.js";
import servicesTypeDefs from "./servicesTypeDefs.js";
const baseTypeDefs = gql `
  type Query
  type Mutation
`;
export default [
    baseTypeDefs,
    intakeFormTypeDefs,
    resourceTypeDefs,
    progressReportTypeDefs,
    userTypeDefs,
    servicesTypeDefs,
];
//# sourceMappingURL=index.js.map