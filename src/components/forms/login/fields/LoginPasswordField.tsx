import inputStyles from "@/src/styles/index.module.scss";


export const LoginPasswordField= () => {
  return (
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
      />
    </div>
  );
};
