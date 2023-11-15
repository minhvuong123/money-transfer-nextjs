import inputStyles from "@/src/styles/index.module.scss";
import { RegisterFormFields } from "@/src/types/form-fields";
import { FC } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};

export const RegisterPasswordField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="password">Password</label>
        </div>
        <div className={inputStyles.inputError}>{ error?.message }</div>
      </div>
      <input
        className={inputStyles.inputField}
        id="password"
        type="password"
        {...register("password", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 Characters Max",
          },
          minLength: {
            value: 8,
            message: "8 Characters Min",
          },
        })}
      />
    </div>
  );
};
