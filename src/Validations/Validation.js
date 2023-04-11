import * as Yup from "yup";

export const ageSchema = Yup.object({
  day: Yup.number()
    .min(1)
    .max(31, "must be a valid day")
    .required("This field is required"),
  month: Yup.number()
    .min(1)
    .max(12, "must be a valid month")
    .required("This field is required"),
  year: Yup.number()
    .min(4)
    .max(2023, "must be a valid year")
    .required("This field is required"),
});
