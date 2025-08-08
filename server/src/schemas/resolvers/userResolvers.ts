import { User, IUserProfile } from "../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (user: IUserProfile) => {
  const secret = process.env.JWT_SECRET_KEY || "";
  return jwt.sign({ _id: user._id, email: user.email }, secret, {
    expiresIn: "7d",
  });
};

const userResolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getAllUsers: async () => {
      return await User.find({});
    },
    me: async (_: any, __: any, context: any) => {
      const userId = context.req?.user?._id;
      if (!userId) throw new Error("Not authenticated");
      return await User.findById(userId);
    },
  },

  Mutation: {
    registerUser: async (_: any, { input }: { input: any }) => {
      const existing = await User.findOne({ email: input.email });
      if (existing) throw new Error("Email already in use");

      const hashedPassword = await bcrypt.hash(input.password, 10);
      const newUser = await User.create({
        ...input,
        passwordHash: hashedPassword,
      });

      const token = createToken(newUser);
      return { token, user: newUser };
    },

    updateUser: async (_: any, { id, input }: { id: string; input: any }) => {
      return await User.findByIdAndUpdate(id, input, { new: true });
    },

    deleteUser: async (_: any, { id }: { id: string }) => {
      return await User.findByIdAndDelete(id);
    },

    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.passwordHash);
      if (!valid) throw new Error("Incorrect password");

      const token = createToken(user);
      return { token, user };
    },
  },
};

export default userResolvers;
