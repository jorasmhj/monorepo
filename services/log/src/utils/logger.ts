import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      colorizeObjects: true,
      translateTime: "yyyy-dd-mm, h:MM:ss TT",
    },
  },
});

export default logger;
