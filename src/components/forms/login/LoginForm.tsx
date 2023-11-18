import { Button } from "../../buttons/Button";
import formStyles from "@/src/styles/form.module.scss";
import { LoginPasswordField } from "./fields/LoginPasswordField";
import { LoginUsernameField } from "./fields/LoginUsernameField";
import buttonStyles from "@/src/styles/button.module.scss";

export const LoginForm = () => {

  return (
    <form className={formStyles.registerLoginForm}>
      <div className={formStyles.formNameConatiner}>
        <LoginUsernameField />
      </div>
      <div className={formStyles.formNameConatiner}>
        <LoginPasswordField />
      </div>
      <Button className={buttonStyles.defaultButton}>Create Account</Button>
    </form>
  );
};
