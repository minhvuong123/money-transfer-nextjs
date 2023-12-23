import { IoAddCircleOutline } from "react-icons/io5";
import styles from "./index.module.scss";
import { MockPayementMethods } from "@/src/types";

const mockPayementMethods: MockPayementMethods[] = [
  {
    type: 'visa',
    last4: '0036',
    name: 'Gas Cash Back'
  }
];

export const PaymentMethodContainer = () => {
  return (
    <div className={styles.container}>
      {mockPayementMethods.length < 3 ? (
        <>
          {mockPayementMethods.map((method) => (
            <div key={method.last4} style={{ width: '100%' }}>{method.name}</div>
          ))}
          <div className={styles.addPaymentContainer}>
            <IoAddCircleOutline size={40} />
            <span>Add Payment Method</span>
          </div>
        </>
      ) : (
        []
      )}
    </div>
  );
};
