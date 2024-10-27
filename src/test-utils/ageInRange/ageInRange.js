import dayjs from "dayjs";

export const ageInRange = (childDateOfBirth, ageMonthsStart, ageMonthsEnd) => {
  const today = new Date();
  const formattedDate = dayjs(today);
  const formattedBirthday = dayjs(childDateOfBirth);

  const ageInMonths = formattedDate.diff(formattedBirthday, "month");

  if (ageMonthsStart === undefined || ageMonthsEnd === undefined) {
    return;
  }

  if (
    (ageInMonths > ageMonthsStart && ageInMonths < ageMonthsEnd) ||
    ageInMonths === ageMonthsStart ||
    ageInMonths === ageMonthsEnd
  ) {
    return true;
  }
  return false;
};
