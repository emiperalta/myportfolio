export const calculateAge = (birthDay, birthMonth, birthYear) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let calculatedAge = currentYear - birthYear;

  currentMonth < birthMonth && calculatedAge--;
  birthMonth - 1 === currentMonth && currentDay < birthDay && calculatedAge--;

  return calculatedAge;
};
