import { Services } from "../../models/Services.js";
const servicesResolvers = {
    Query: {
        servicesByType: async (_, { type }) => {
            return await Services.find({ type });
        },
        serviceById: async (_, { id }) => {
            return await Services.findById(id);
        },
        allServices: async () => {
            return await Services.find();
        },
    },
    Mutation: {
        createServices: async (_, { input, }, context) => {
            const userId = context.req?.user?._id;
            if (!userId)
                throw new Error("Unauthorized");
            return await Services.create({
                ...input,
            });
        },
        deleteService: async (_, { id }, context) => {
            const userId = context.req?.user?._id;
            if (!userId)
                throw new Error("Unauthorized");
            const service = await Services.findOne({
                _id: id,
            });
            if (!service)
                throw new Error("Service not found or access denied");
            return await Services.findByIdAndDelete(id);
        },
    },
};
export default servicesResolvers;
//# sourceMappingURL=servicesResolvers.js.map