import hpp from "hpp";
import cors from "cors";
import helmet from "helmet";
import { router } from "../routes";
// import { swagger } from '../configs';
import compression from "compression";
import express, { Application, Response } from "express";
// import { dbInstance } from '../connections';
import messageConstant from "../constants/message-constant";

class App {
  constructor(private app: Application) {}

  init() {
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(helmet());
    // this.app.use(express.urlencoded({ extended: true }));
    // this.app.use(express.json());
    this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(express.json({ limit: "50mb" })); //, extended: true
    this.app.use(express.static(__dirname + "/"));
    this.app.use(hpp());
    this.app.use("/api", router);
    // swagger.setup(this.app);
    this.app.use("/*", (_, res: Response) => res.status(404).send(messageConstant.ROUTE_NOT_FOUND));
    // dbInstance.sync();
  }
}

export default App;
