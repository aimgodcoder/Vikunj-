import jwt from "jsonwebtoken";
import { User } from "../models/userschema.js";
import { errorHandler } from "./errorMiddleware.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new errorHandler("Please login to access this resource", 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new errorHandler("Invalid token", 401));
  }
};