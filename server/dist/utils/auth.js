import jwt from "jsonwebtoken";
export const authMiddleware = ({ req }) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.split(" ").pop()?.trim();
    if (!token)
        return { user: null };
    try {
        const secretKey = process.env.JWT_SECRET_KEY || "";
        const user = jwt.verify(token, secretKey);
        return { user };
    }
    catch (err) {
        console.warn("Invalid token:", err);
        return { user: null };
    }
};
//# sourceMappingURL=auth.js.map