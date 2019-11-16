import { NextFunction, Request, Response } from "express-serve-static-core";
import config from "config";

const authWakaTimeValue =
  process.env.AUTH_WAKATIME_HEADER || config.get("WakaTime.headers");
export const middlewareForAllRoutes = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers["auth-wakatime-data"] !== authWakaTimeValue) {
    return res.sendStatus(401);
  }
  return next();
};
