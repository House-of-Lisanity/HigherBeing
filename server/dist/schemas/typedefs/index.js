import { gql } from "apollo-server-express";
import intakeFormTypeDefs from "./intakeFormTypeDefs.js";
import resourceTypeDefs from "./resourceTypeDefs.js";
import progressReportTypeDefs from "./progressReportTypeDefs.js";
import userTypeDefs from "./userTypeDefs.js";
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
];
//# sourceMappingURL=index.js.map