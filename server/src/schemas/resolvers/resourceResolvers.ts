import { Resource } from "../../models/Resources.js";
import { Request as ExpressRequest } from "express";

interface AuthenticatedRequest extends ExpressRequest {
  user?: { _id: string }; // Extend this if you store more user fields in context
}

const resourceResolvers = {
  Query: {
    resourcesByType: async (_: any, { type }: { type: string }) => {
      return await Resource.find({ type });
    },

    resourceById: async (_: any, { id }: { id: string }) => {
      return await Resource.findById(id);
    },
  },

  Mutation: {
    createResource: async (
      _: any,
      {
        input,
      }: {
        input: {
          title: string;
          type: "Nutrition" | "Exercise" | "Meal Prep";
          description?: string;
          content?: string;
          externalUrl?: string;
        };
      },
      context: { req: AuthenticatedRequest }
    ) => {
      const userId = context.req?.user?._id;
      if (!userId) throw new Error("Unauthorized");

      return await Resource.create({
        ...input,
        createdBy: userId,
      });
    },

    deleteResource: async (
      _: any,
      { id }: { id: string },
      context: { req: AuthenticatedRequest }
    ) => {
      const userId = context.req?.user?._id;
      if (!userId) throw new Error("Unauthorized");

      const resource = await Resource.findOne({
        _id: id,
        createdBy: userId,
      });

      if (!resource) throw new Error("Resource not found or access denied");

      return await Resource.findByIdAndDelete(id);
    },
  },
};

export default resourceResolvers;
