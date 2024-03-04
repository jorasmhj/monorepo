import { Router } from "express";
import { LogDto } from "../dtos";
import { LogService } from "../services";
import { httpResponse } from "../helpers";
import { Validation } from "../middlewares";
import { LogController } from "../controllers";
import { logPostValidation } from "../validations";
const validation = new Validation(httpResponse);

const logRouter = Router();
const logDto = new LogDto();
const logService = new LogService(logDto);
const logController = new LogController(logService);

logRouter.post("/log", validation.validate(logPostValidation), logController.create);
logRouter.get("/log", logController.getAll);
logRouter.get("/log/:id", logController.getOne);
logRouter.put("/log", logController.update);

export default logRouter;
