/**
 * @author Sunil Rajbahak <sunil@noveltytechnology.com>
 */
import moment from "moment";
import { dateConstant } from "../constants";
// import config from '../config';

// export const momentSaveFormat = (date: Date, dateFormat = config.DATE_FORMAT_SAVE, isNull = true) => {
//   return date ? moment(date).format(dateFormat) : isNull ? null : moment().format(dateFormat);
// }

// export const momentViewFormat = (date: Date, dateFormat = config.DATE_FORMAT_VIEW, isNull = false) => {
//   if (date && !moment(date).isValid())
//     return date;
//   const formattedDate = date ? moment(date).format(dateFormat) : isNull ? null : moment().format(dateFormat);
//   return formattedDate;
// }

// export const UTCToLocalDateViewFormat = (utcDateTime: Date, dateFormat = config.DATE_FORMAT_VIEW, isNull = false, local = false) => {
//   if (!utcDateTime) return utcDateTime;
//   let formattedDate = moment.utc(utcDateTime);
//   // if (local)
//   formattedDate = moment(formattedDate).local();
//   formattedDate = momentViewFormat(formattedDate, dateFormat, isNull);
//   return formattedDate;
// }

// export const momentIsValid = (date: Date) => {
//   return moment(date).isValid() && momentIsSameorAfterMinDate(date);
// }

// export const momentIsSameorBefore = (date1 = new Date(), date2 = new Date()) => {
//   return moment(date1).isSameOrBefore(moment(date2));
// }

// export const momentIsSameorAfterMinDate = (date: Date) => {
//   return moment(date).isSameOrAfter('1753-01-01');
// }

// export const momentIsBefore = (date1 = new Date(), date2 = new Date()) => {
//   return moment(date1).isBefore(moment(date2));
// }

// export const momentDateOnlyIsSameOrAfter = (date1 = new Date(), date2 = new Date()) => {
//   return moment(date1).isSameOrAfter(momentViewIgnoreTimezone(moment(date2)));
// }

export const momentDateOnlyIsBefore = (date1 = new Date(), date2 = new Date()) => {
  return moment(date1).isBefore(momentViewIgnoreTimezone(date2));
};

export const momentDateOnlyIsAfter = (date1 = new Date(), date2 = new Date()) => {
  return moment(date1).isAfter(momentViewIgnoreTimezone(date2));
};

// export const momentUnix = (date: number) => {
//   return moment.unix(date);
// }

export const momentViewIgnoreTimezone = (date: Date, dateFormat = dateConstant.DEFAULT_DATE_FORMAT, isNull = true) => {
  return date ? moment.parseZone(date).format(dateFormat) : isNull ? null : moment.parseZone().format(dateFormat);
};

// // sends date in format 1994-01-22
// export const getCurrentUTCDate = () => {
//   const utcTime = moment().utc();
//   return utcTime.format('YYYY-MM-DD');
// }

// // sends date in format 5:00 AM
// export const getCurrentUTCTime = () => {
//   const utcTime = moment().utc();
//   return utcTime.format('LT');
// }

// export const getCurrentUTCDateTime = () => {
//   const utcTime = moment().utc();
//   return utcTime.format('YYYY-MM-DD HH:mm:ss');
// }

// export const dobIsValid = (date: Date) => {
//   if (moment(date).isValid()) {
//     const today = new Date();
//     const birthDate = new Date(date);
//     const age = today.getFullYear() - birthDate.getFullYear();
//     if (age < 150 && age > 0) return true;
//   }
//   return false;
// }

// export const localToUtc = (date: Date) => {
//   if (!date)
//     return date
//   return moment.utc(date).format();
// }

// export const utcTime = (date: Date) => {
//   if (!date)
//     return date
//   return moment.utc(date).format('LT');
// }

// export const momentIsToday = (date: Date) => {
//   return moment(date).isSame(moment(), 'day');
// }

// export const momentIsThisYear = (date: Date) => {
//   return moment(date).isSame(moment(), 'year');
// }

export const todayDate = () => moment().format(dateConstant.DEFAULT_DATE_FORMAT);
export const startOfYear = () => moment().startOf("year").format(dateConstant.DEFAULT_DATE_FORMAT);

export const formatDate = (date: string, format = dateConstant.DEFAULT_DATE_FORMAT) => moment(date).format(format);
