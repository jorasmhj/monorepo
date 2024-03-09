import { Application } from "express";
import { logger } from "@repo/core/utils";
import { IAppConfig } from "../config/interface";
import { requestInterceptor } from "@repo/core/middlewares";

class App {
  constructor(
    private app: Application,
    private appConfig: IAppConfig
  ) {}

  init() {
    this.app.use("/api", requestInterceptor, (req, res) => res.send({ data: "ok" }));

    const server = this.app.listen(this.appConfig.port, () => {
      const { port, address } = <{ address: string; port: number }>server.address();
      logger.info(`🚀🚀 Listening at http://${address}:${port} 🚀🚀`);

      logger.info("Cool from service1");
    });
  }
}

export default App;
