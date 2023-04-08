import * as Yup from "yup";

export const ageSchema = Yup.object({
  day: Yup.number().min(1).max(31).required("Please enter date"),
  month: Yup.number().min(1).max(12).required("Please enter month"),
  year: Yup.number().min(4).max(2023).required("Please enter year"),
});
