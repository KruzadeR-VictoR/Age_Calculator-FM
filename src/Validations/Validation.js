import * as Yup from "yup";

const year = new Date().getFullYear();
// console.log(year);

export const ageSchema = Yup.object({
  day: Yup.number()
    .min(1, "must be a valid month")
    .max(31, "must be a valid day")
    .required("This field is required"),
  month: Yup.number()
    .min(1, "must be a valid month")
    .max(12, "must be a valid month")
    .required("This field is required"),
  year: Yup.number()
    .min(1000, "must be a valid month")
    .max(year, "must be a valid year")
    .required("This field is required"),
});
