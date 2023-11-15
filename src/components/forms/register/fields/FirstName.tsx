import inputStyles from "@/src/styles/index.module.scss";
import { RegisterFormFields } from "@/src/types/form-fields";
import { FC } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

type Props = {
  register: UseFormRegister<RegisterFormFields>,
  error?: FieldError
}

export const FirstNameField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className={inputStyles.inputError}>{ error?.message }</div>
      </div>
      <input
        className={inputStyles.inputField}
        id="lastName"
        {...register("firstName", {
          required: "Required",
          maxLength: {
            value: 24,
            message: "24 Characters Max",
          },
          minLength: {
            value: 2,
            message: "2 Characters Min",
          },
        })}
      />
    </div>
  );
};
