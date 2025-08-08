import { IntakeForm } from "../../models/IntakeForm.js";
const intakeFormResolvers = {
    Query: {
        getIntakeForm: async (_, { id }) => {
            return await IntakeForm.findById(id);
        },
        getUserIntakeForms: async (_, { userId, formType }) => {
            const filter = { userId };
            if (formType)
                filter.formType = formType;
            return await IntakeForm.find(filter);
        },
    },
    Mutation: {
        submitIntakeForm: async (_, { userId, input, }) => {
            return await IntakeForm.create({ userId, ...input });
        },
        deleteIntakeForm: async (_, { id }) => {
            return await IntakeForm.findByIdAndDelete(id);
        },
        IntakeForm,
    },
};
export default intakeFormResolvers;
//# sourceMappingURL=intakeFormResolvers.js.map