import { Services } from "../../models/Services.js";
import { Request as ExpressRequest } from "express";

interface AuthenticatedRequest extends ExpressRequest {
  user?: { _id: string }; // Extend this if you store more user fields in context
}

const servicesResolvers = {
  Query: {
    servicesByType: async (_: any, { type }: { type: string }) => {
      return await Services.find({ type });
    },

    serviceById: async (_: any, { id }: { id: string }) => {
      return await Services.findById(id);
    },

    allServices: async () => {
      return await Services.find();
    },
  },

  Mutation: {
    createServices: async (
      _: any,
      {
        input,
      }: {
        input: {
          title: string;
          type: "Personal Training" | "Group Training" | "Whole Being";
          description?: string;
          content?: string;
          externalUrl?: string;
        };
      },
      context: { req: AuthenticatedRequest }
    ) => {
      const userId = context.req?.user?._id;
      if (!userId) throw new Error("Unauthorized");

      return await Services.create({
        ...input,
      });
    },

    deleteService: async (
      _: any,
      { id }: { id: string },
      context: { req: AuthenticatedRequest }
    ) => {
      const userId = context.req?.user?._id;
      if (!userId) throw new Error("Unauthorized");

      const service = await Services.findOne({
        _id: id,
      });

      if (!service) throw new Error("Service not found or access denied");

      return await Services.findByIdAndDelete(id);
    },
  },
};

export default servicesResolvers;
