import axios from "axios";
import config from "../configs";
import { AnyObj } from "../types";
import { serviceRouteConstant } from "../constants";
import { ServerError } from "../helpers/error-helper";
import { getTimeIntervalToDate } from "../utils/date-util";

export default class ActivityLogService {
  constructor() {}

  async findAll(req: AnyObj) {
    try {
      const noveltyApiUrl = `${serviceRouteConstant.NOVELTY_ACTIVITY_LOG}?${this.setQueryParams(req.query)}`;
      const response = await axios.get(noveltyApiUrl, this.getOptions({}));

      return response?.data?.data?.activities ? { count: response.data.data.count, rows: response.data.data.activities } : {};
    } catch (error: any) {
      throw error.response ? new ServerError(error.response.data.error) : error;
    }
  }

  async create(req: AnyObj) {
    try {
      const noveltyApiUrl = `${serviceRouteConstant.NOVELTY_ACTIVITY_LOG}`;
      const requestHeader = this.getOptions(req.body);

      // CustomerId and CustomerName are invalid attributes for novelty activity log service
      delete req.body.customerId;
      delete req.body.customerName;
      const response = await axios.post(noveltyApiUrl, req.body, requestHeader);

      return response?.data ? response.data.data : {};
    } catch (error: any) {
      throw error.response ? new ServerError(error.response.data.error) : error;
    }
  }

  async update(req: AnyObj) {
    try {
      const noveltyApiUrl = `${serviceRouteConstant.NOVELTY_ACTIVITY_LOG}/${req.activityLogId}`;
      const response = await axios.put(noveltyApiUrl, req.body, this.getOptions({}));

      return response?.data ? response.data.data : {};
    } catch (error: any) {
      throw error.response ? new ServerError(error.response.data.error) : error;
    }
  }

  async delete(req: AnyObj) {
    try {
      const noveltyApiUrl = `${serviceRouteConstant.NOVELTY_ACTIVITY_LOG}/${req.params.id}`;
      const response = await axios.delete(noveltyApiUrl, this.getOptions({}));

      return response?.data ? response.data.data : {};
    } catch (error: any) {
      throw error.response ? new ServerError(error.response.data.error) : error;
    }
  }

  setQueryParams(query: AnyObj) {
    query["applicationId"] = config.NOVELTY_APPLICATION_ID;
    query["applicationName"] = config.NOVELTY_APPLICATION_NAME;

    if (query.interval) {
      const { endDate, startDate } = getTimeIntervalToDate(query)!;
      query["startDate"] = startDate;
      query["endDate"] = endDate;
      delete query["interval"];
    }

    return Object.keys(query)
      .map(key => key + "=" + query[key])
      .join("&");
  }

  getOptions(body: AnyObj) {
    const options = {
      headers: {
        customerId: "",
        customerName: "",
        applicationid: config.NOVELTY_APPLICATION_ID,
        clientcode: config.NOVELTY_CLIENT_CODE || "Vitafy",
        Authorization: "Basic " + config.NOVELTY_BASIC_TOKEN,
        applicationname: config.NOVELTY_APPLICATION_NAME || "",
        clientname: config.NOVELTY_CLIENT_NAME || "VitafyHealth",
      },
    };
    if (body.customerId) {
      options.headers.customerId = body.customerId;
    }
    if (body.customerName) {
      options.headers.customerName = body.customerName;
    }

    return options;
  }
}
