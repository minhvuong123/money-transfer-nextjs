import inputStyles from "@/src/styles/index.module.scss";
import { RegisterFormFields } from "@/src/types/form-fields";
import { FC } from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

type Props = {
  register: UseFormRegister<RegisterFormFields>;
  error?: FieldError;
};

export const RegisterUsernameField: FC<Props> = ({ register, error }) => {
  return (
    <div className={inputStyles.inputContainer}>
      <div className={inputStyles.inputContainerHeader}>
        <div className={inputStyles.inputLabel}>
          <label htmlFor="username">Username</label>
        </div>
        <div className={inputStyles.inputError}>{ error?.message }</div>
      </div>
      <input
        className={inputStyles.inputField}
        id="username"
        {...register("username", {
          required: "Required",
          maxLength: {
            value: 16,
            message: "16 Characters Max",
          },
          minLength: {
            value: 3,
            message: "3 Characters Min",
          },
        })}
      />
    </div>
  );
};
