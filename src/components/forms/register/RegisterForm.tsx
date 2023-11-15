import { useForm } from "react-hook-form";
import { Button } from "../../buttons/Button";
import styles from "./index.module.scss";
import inputStyles from "@/src/styles/index.module.scss";
import { RegisterFormFields } from "@/src/types/form-fields";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(errors)
  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameConatiner}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className={inputStyles.inputError}></div>
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
              }
            })}
          />
        </div>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className={inputStyles.inputError}></div>
          </div>
          <input
            className={inputStyles.inputField}
            id="lastName"
            {...register("lastName", {
              required: "Required",
              maxLength: {
                value: 32,
                message: "32 Characters Max",
              },
              minLength: {
                value: 2,
                message: "2 Characters Min",
              }
            })}
          />
        </div>
      </div>
      <div className={styles.nameConatiner}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="username">Username</label>
            </div>
            <div className={inputStyles.inputError}></div>
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
              }
            })}
          />
        </div>
      </div>
      <div className={styles.nameConatiner}>
        <div className={inputStyles.inputContainer}>
          <div className={inputStyles.inputContainerHeader}>
            <div className={inputStyles.inputLabel}>
              <label htmlFor="password">Password</label>
            </div>
            <div className={inputStyles.inputError}></div>
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
              }
            })}
          />
        </div>
      </div>
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
