import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const normalizedDir = __dirname.replace(/\\/g, "/");
const isDist = normalizedDir.includes("/dist/");
const envPath = isDist
    ? path.resolve(__dirname, "../../.env")
    : path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });
console.log("🧪 Loaded .env from:", envPath);
console.log("🔍 MONGODB_URI =", process.env.MONGODB_URI);
console.log("🚀 Connected to MongoDB");
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI)
    throw new Error("❌ MONGODB_URI is not defined in .env");
mongoose
    .connect(mongoURI)
    .then(() => console.log("🌱 MongoDB connection successful"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
export default mongoose.connection;
//# sourceMappingURL=connection.js.map