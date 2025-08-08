import { Team } from "../models/teamschema.js";
import { errorHandler } from "../middlewares/errorMiddleware.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncerros.js"

export const createTeam = catchAsyncErrors(async (req, res, next) => {
  const { name, description } = req.body;

  // Case-insensitive check for existing team
  const existingTeam = await Team.findOne({ name: { $regex: `^${name}$`, $options: "i" } });
  if (existingTeam) {
    return next(new errorHandler("Team already present", 400));
  }

  const team = await Team.create({ name, description });
  res.status(201).json({
    success: true,
    message: "Team created successfully",
    team,
  });
});
export const getTeams = catchAsyncErrors(async (req, res, next) => {
  const teams = await Team.find();
  res.status(200).json({
    success: true,
    teams,
  });
});

