import { NextPage } from "next";
import { LoginForm } from "@/src/components/forms/login/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <div className="pageFlex">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
