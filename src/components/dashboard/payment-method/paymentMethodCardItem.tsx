import { MockPayementMethods } from "@/src/types"
import { FC } from "react";
import styles from './index.module.scss';

type Props = {
  method: MockPayementMethods
}

export const PaymentMethodCardItem: FC<Props> = ({ method }) => {
  return (
    <div className={styles.paymentCard}>
      <div className={styles.content}>
        <div className={styles.cardTitle}>Gas Cashback</div>
        <div className={styles.last4}>**** **** **** *003</div>
      </div>
      <div className={styles.footer}>
        <div>Exp 09/24</div>
        <div>VISA</div>
      </div>
    </div>
  )
}