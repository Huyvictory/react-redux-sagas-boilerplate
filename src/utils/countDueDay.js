import moment from "moment";

export const countDueDay = (inputDate) => {
  const today = moment();
  const dayDue = moment(inputDate).diff(
    moment(today._d).format("YYYY-MM-DD").toString(),
    "days",
    false
  );

  return dayDue;
};
