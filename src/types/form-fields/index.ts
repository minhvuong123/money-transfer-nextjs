import { FieldErrorsImpl } from "react-hook-form";

export type RegisterFormFields = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export type RegisterFormErrorFields = Partial<FieldErrorsImpl<RegisterFormFields>>