export const calculateAge = (birthDay: number, birthMonth: number, birthYear: number): number => {
  const currentDate: Date = new Date();
  const currentDay: number = currentDate.getDay();
  const currentMonth: number = currentDate.getMonth();
  const currentYear: number = currentDate.getFullYear();

  let calculatedAge: number = currentYear - birthYear;

  currentMonth < birthMonth && calculatedAge--;
  birthMonth - 1 === currentMonth && currentDay < birthDay && calculatedAge--;

  return calculatedAge;
};
