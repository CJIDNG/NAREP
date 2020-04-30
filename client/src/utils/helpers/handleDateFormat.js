export const handleDateFormat = (date) => {
  const currentDatetime = new Date(date);
  const formattedDate = currentDatetime.toDateString();
  return formattedDate;
};
