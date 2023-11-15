import { useForm } from "react-hook-form";
import { Button } from "../../buttons/Button";
import styles from "./index.module.scss";
import inputStyles from "@/src/styles/index.module.scss";
import { RegisterFormFields } from "@/src/types/form-fields";
import { FirstNameField } from "./fields/FirstName";
import { LastNameField } from "./fields/LastName";
import { RegisterPasswordField } from "./fields/RegisterPasswordField";
import { RegisterUsernameField } from "./fields/RegisterUsernameField";

export const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormFields>();

  const onSubmit = (data: RegisterFormFields) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.nameConatiner}>
        <FirstNameField register={register} error={errors.firstName} />
        <LastNameField register={register} error={errors.lastName} />
      </div>
      <div className={styles.nameConatiner}>
        <RegisterUsernameField register={register} error={errors.username} />
      </div>
      <div className={styles.nameConatiner}>
        <RegisterPasswordField register={register} error={errors.password} />
      </div>
      <Button className={styles.button}>Create Account</Button>
    </form>
  );
};
