import { Resource } from "../../models/Resources.js";
const resourceResolvers = {
    Query: {
        resourcesByType: async (_, { type }) => {
            return await Resource.find({ type });
        },
        resourceById: async (_, { id }) => {
            return await Resource.findById(id);
        },
    },
    Mutation: {
        createResource: async (_, { input, }, context) => {
            const userId = context.req?.user?._id;
            if (!userId)
                throw new Error("Unauthorized");
            return await Resource.create({
                ...input,
                createdBy: userId,
            });
        },
        deleteResource: async (_, { id }, context) => {
            const userId = context.req?.user?._id;
            if (!userId)
                throw new Error("Unauthorized");
            const resource = await Resource.findOne({
                _id: id,
                createdBy: userId,
            });
            if (!resource)
                throw new Error("Resource not found or access denied");
            return await Resource.findByIdAndDelete(id);
        },
    },
};
export default resourceResolvers;
//# sourceMappingURL=resourceResolvers.js.map