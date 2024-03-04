import logRouter from "./log-route";
import { Router, Response } from "express";
import { messageConstant } from "../constants";
import activityLogRouter from "./activity-log-route";

const router = Router();

router.get("/", (_, res: Response) => res.json({ API: messageConstant.API_WELCOME_MESSAGE }));
// router.use(authorizeToken, logRouter);
router.use(logRouter);
router.use(activityLogRouter);

export { router };
