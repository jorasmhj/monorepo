import { Router } from "express";
import { httpResponse } from "../helpers";
import { Validation } from "../middlewares";
import { ActivityLogService } from "../services";
import { ActivityLogController } from "../controllers";
import { activityLogValidation } from "../validations";
const validation = new Validation(httpResponse);

const router = Router();
const activityLogService = new ActivityLogService();
const activityLogController = new ActivityLogController(activityLogService);

router.post("/activity-logs", validation.validate(activityLogValidation), activityLogController.create);
router.get("/activity-logs/health", activityLogController.checkHealth);
router.get("/activity-logs", activityLogController.getAll);
router.put("/activity-logs/:id", activityLogController.update);
router.delete("/activity-logs/:id", activityLogController.delete);

export default router;
