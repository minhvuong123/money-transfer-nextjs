import inputStyles from "@/src/styles/index.module.scss";

export const LoginUsernameField = () => {
  return (
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
      />
    </div>
  );
};
