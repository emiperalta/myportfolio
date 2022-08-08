export const calculateAge = (birthDate: Date): number => {
  var diff_ms = Date.now() - birthDate.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};
