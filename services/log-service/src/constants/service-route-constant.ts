import config from "../configs";
export default {
  USER:
    process.env.NODE_ENV == "PROD"
      ? "http://vh-prod-user-service:7002/api/users"
      : process.env.NODE_ENV == "QA"
        ? "http://vh-qa-user-service:5002/api/users"
        : process.env.NODE_ENV == "UAT"
          ? "http://vh-dev-user-service:3002/api/users"
          : process.env.NODE_ENV == "DEVELOPMENT"
            ? "http://vh-dev-user-service:3002/api/users"
            : "http://localhost:3002/api/users",
  TENANT:
    process.env.NODE_ENV == "PROD"
      ? "http://vh-prod-tenant-service:7001/api/tenants"
      : process.env.NODE_ENV == "QA"
        ? "http://vh-qa-tenant-service:5001/api/tenants"
        : process.env.NODE_ENV == "UAT"
          ? "http://vh-dev-tenant-service:3001/api/tenants"
          : process.env.NODE_ENV == "DEVELOPMENT"
            ? "http://vh-dev-tenant-service:3001/api/tenants"
            : "http://localhost:3001/api/tenants",
  CLIENT:
    config.NODE_ENV == "PROD"
      ? "http://vh-prod-enrollment-service:7003/api/clients"
      : process.env.NODE_ENV == "QA"
        ? "http://vh-qa-enrollment-service:5003/api/clients"
        : process.env.NODE_ENV == "UAT"
          ? "http://vh-dev-enrollment-service:3003/api/clients"
          : process.env.NODE_ENV == "DEVELOPMENT"
            ? "http://vh-dev-enrollment-service:3003/api/clients"
            : "http://localhost:3003/api/clients",
  COMMS:
    config.NODE_ENV == "PROD"
      ? "http://vh-prod-communication-service:7004/api/comms"
      : process.env.NODE_ENV == "QA"
        ? "http://vh-qa-communication-service:5004/api/comms"
        : process.env.NODE_ENV == "UAT"
          ? "http://vh-dev-communication-service:3004/api/comms"
          : process.env.NODE_ENV == "DEVELOPMENT"
            ? "http://vh-dev-communication-service:3004/api/comms"
            : "http://localhost:3004/api/comms",
  NOVELTY_ACTIVITY_LOG:
    config.NODE_ENV == "PROD"
      ? "https://services.noveltytechnology.com/api/activity-logs"
      : process.env.NODE_ENV == "QA"
        ? "https://dev-services.noveltytechnology.com/api/activity-logs"
        : process.env.NODE_ENV == "UAT"
          ? "https://dev-services.noveltytechnology.com/api/activity-logs"
          : process.env.NODE_ENV == "DEVELOPMENT"
            ? "https://dev-services.noveltytechnology.com/api/activity-logs"
            : "https://dev-services.noveltytechnology.com/api/activity-logs",
};
