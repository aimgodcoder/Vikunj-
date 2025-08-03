import {catchAsyncErrors} from '../middlewares/catchAsyncerros.js';
import {User} from '../models/userschema.js'
import{errorHandler} from '../middlewares/errorMiddleware.js';

import {generateToken} from '../utils/jwtTokens.js';

export const registerUser = catchAsyncErrors(async (req, res, next) => {
    const { firstName, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return next(new errorHandler("User already exists", 400));
    }
    const user = await User.create({
        firstName,
        email,
        password
    });
      generateToken(user, 'User registered successfully', 200, res);
});

export const loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return next(new errorHandler("Invalid email or password", 401));
    }   
const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return next(new errorHandler("Invalid email or password", 401));
    }

       generateToken(user,'user login succesfully',200,res);
});


export const logoutUser = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
    });

    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    });
});


export const getUserProfile = catchAsyncErrors(async (req, res, next) => {
    if (!req.user || !req.user._id) {
        return next(new errorHandler("User not authenticated", 401));
    }

    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
        return next(new errorHandler("User not found", 404));
    }

    res.status(200).json({
        success: true,
        user
    });
});




