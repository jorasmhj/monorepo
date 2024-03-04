import moment from "moment";
import dateConstant from "../constants/date-constant";

export const getTimeInterval = (params: any) => {
  switch (params.interval) {
    case dateConstant.INTERVAL.THIS_MONTH:
      const startOfMonth = moment().startOf("month").format("MM/DD/YYYY");
      const endOfMonth = moment().endOf("month").format("MM/DD/YYYY");

      return { endDate: endOfMonth, startDate: startOfMonth };

    case dateConstant.INTERVAL.LAST_MONTH:
      const startOfLastMonth = moment().subtract(1, "month").startOf("month").format("MM/DD/YYYY");
      const endOfLastMonth = moment().subtract(1, "month").endOf("month").format("MM/DD/YYYY");

      return { endDate: endOfLastMonth, startDate: startOfLastMonth };

    case dateConstant.INTERVAL.THIS_YEAR:
      const startOfYear = moment().startOf("year").format("MM/DD/YYYY");
      const endOfYear = moment().endOf("year").format("MM/DD/YYYY");

      return { endDate: endOfYear, startDate: startOfYear };

    case dateConstant.INTERVAL.LAST_YEAR:
      const startOfLastYear = moment().subtract(1, "year").startOf("year").format("MM/DD/YYYY");
      const endOfLastYear = moment().subtract(1, "year").endOf("year").format("MM/DD/YYYY");

      return { endDate: endOfLastYear, startDate: startOfLastYear };

    case dateConstant.INTERVAL.CUSTOM_DATE:
      const startDate = params.startDate ? moment(params.startDate).format("MM/DD/YYYY") : "";
      const endDate = params.endDate ? moment(params.endDate).format("MM/DD/YYYY") : "";

      return { endDate: endDate, startDate: startDate };

    case dateConstant.INTERVAL.THIS_QUARTER:
      const quarterCount = moment().quarter();
      let start, end;
      switch (quarterCount) {
        case 1:
          start = moment().month(0).startOf("month").format("MM/DD/YYYY");
          end = moment().month(2).endOf("month").format("MM/DD/YYYY");

          return { endDate: end, startDate: start };
        case 2:
          start = moment().month(3).startOf("month").format("MM/DD/YYYY");
          end = moment().month(5).endOf("month").format("MM/DD/YYYY");

          return { endDate: end, startDate: start };

        case 3:
          start = moment().month(6).startOf("month").format("MM/DD/YYYY");
          end = moment().month(8).endOf("month").format("MM/DD/YYYY");

          return { endDate: end, startDate: start };

        case 4:
          start = moment().month(9).startOf("month").format("MM/DD/YYYY");
          end = moment().month(11).endOf("month").format("MM/DD/YYYY");

          return { endDate: end, startDate: start };
      }
    case dateConstant.INTERVAL.SINCE_INCEPTION:
      return { endDate: "", startDate: "" };

    default:
      const startOfWeek = moment().startOf("week").format("MM/DD/YYYY");
      const endOfWeek = moment().endOf("week").format("MM/DD/YYYY");

      return { endDate: endOfWeek, startDate: startOfWeek };
  }
};
export const getTimeIntervalToDate = (params: any) => {
  switch (params.interval) {
    case dateConstant.INTERVAL.THIS_MONTH:
      const startOfMonth = moment().startOf("month").toDate();
      const endOfMonth = moment().endOf("month").toDate();

      return { endDate: endOfMonth, startDate: startOfMonth };

    case dateConstant.INTERVAL.LAST_MONTH:
      const startOfLastMonth = moment().subtract(1, "month").startOf("month").toDate();
      const endOfLastMonth = moment().subtract(1, "month").endOf("month").toDate();

      return { endDate: endOfLastMonth, startDate: startOfLastMonth };

    case dateConstant.INTERVAL.THIS_YEAR:
      const startOfYear = moment().startOf("year").toDate();
      const endOfYear = moment().endOf("year").toDate();

      return { endDate: endOfYear, startDate: startOfYear };

    case dateConstant.INTERVAL.LAST_YEAR:
      const startOfLastYear = moment().subtract(1, "year").startOf("year").toDate();
      const endOfLastYear = moment().subtract(1, "year").endOf("year").toDate();

      return { endDate: endOfLastYear, startDate: startOfLastYear };

    case dateConstant.INTERVAL.CUSTOM_DATE:
      const startDate = params.startDate ? moment(params.startDate).toDate() : "";
      const endDate = params.endDate ? moment(params.endDate).endOf("day").toDate() : "";

      return { endDate: endDate, startDate: startDate };

    case dateConstant.INTERVAL.CURRENT_PERIOD:
      let startDatePeriod: Date;
      let endDatePeriod: Date;
      const today = moment().format("D");
      const totalDays = moment().daysInMonth();
      const firstPeriod = Math.ceil(totalDays / 2);
      if (Number(today) <= firstPeriod) {
        startDatePeriod = moment().startOf("month").toDate();
        endDatePeriod = moment().endOf("month").subtract(firstPeriod, "days").toDate();
      } else {
        startDatePeriod = moment().startOf("month").add(firstPeriod, "days").toDate();
        endDatePeriod = moment().endOf("month").toDate();
      }

      return { endDate: endDatePeriod, startDate: startDatePeriod };

    case dateConstant.INTERVAL.LAST_PERIOD:
      let startDateLastPeriod: Date;
      let endDateLastPeriod: Date;
      const todayNumber = moment().format("D");
      const totalDaysCount = moment().daysInMonth();
      const firstPeriodCount = Math.ceil(totalDaysCount / 2);
      if (Number(todayNumber) <= firstPeriodCount) {
        const totalDaysCountOfPreviousMonth = moment().subtract(1, "month").daysInMonth();
        const firstPeriodCount = Math.ceil(totalDaysCountOfPreviousMonth / 2);
        startDateLastPeriod = moment().subtract(1, "month").endOf("month").subtract(firstPeriodCount, "days").toDate();
        endDateLastPeriod = moment().subtract(1, "month").endOf("month").toDate();
      } else {
        startDateLastPeriod = moment().startOf("month").toDate();
        endDateLastPeriod = moment().endOf("month").subtract(firstPeriodCount, "days").toDate();
      }

      return { endDate: endDateLastPeriod, startDate: startDateLastPeriod };

    case dateConstant.INTERVAL.THIS_QUARTER:
      const quarterCount = moment().quarter();
      let start, end;
      switch (quarterCount) {
        case 1:
          start = moment().month(0).startOf("month").toDate();
          end = moment().month(2).endOf("month").toDate();

          return { endDate: end, startDate: start };
        case 2:
          start = moment().month(3).startOf("month").toDate();
          end = moment().month(5).endOf("month").toDate();

          return { endDate: end, startDate: start };

        case 3:
          start = moment().month(6).startOf("month").toDate();
          end = moment().month(8).endOf("month").toDate();

          return { endDate: end, startDate: start };

        case 4:
          start = moment().month(9).startOf("month").toDate();
          end = moment().month(11).endOf("month").toDate();

          return { endDate: end, startDate: start };
      }
    case dateConstant.INTERVAL.SINCE_INCEPTION:
      return { endDate: "", startDate: "" };

    default:
      const startOfWeek = moment().startOf("week").toDate();
      const endOfWeek = moment().endOf("week").toDate();

      return { endDate: endOfWeek, startDate: startOfWeek };
  }
};
