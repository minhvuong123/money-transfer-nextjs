import { useForm } from "react-hook-form";
import { Button } from "../../buttons/Button";
import { RegisterFormFields } from "@/src/types/form-fields";
import { FirstNameField } from "./fields/FirstName";
import { LastNameField } from "./fields/LastName";
import { RegisterPasswordField } from "./fields/RegisterPasswordField";
import { RegisterUsernameField } from "./fields/RegisterUsernameField";
import buttonStyles from "@/src/styles/button.module.scss";
import formStyles from "@/src/styles/form.module.scss";

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
    <form className={formStyles.registerLoginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={formStyles.nameConatiner}>
        <FirstNameField register={register} error={errors.firstName} />
        <LastNameField register={register} error={errors.lastName} />
      </div>
      <div className={formStyles.nameConatiner}>
        <RegisterUsernameField register={register} error={errors.username} />
      </div>
      <div className={formStyles.nameConatiner}>
        <RegisterPasswordField register={register} error={errors.password} />
      </div>
      <Button className={buttonStyles.defaultButton}>Create Account</Button>
    </form>
  );
};
