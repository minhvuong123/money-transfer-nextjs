
import { BalanceInfoCard } from '../balance/balanceIforCard';
import styles from './index.module.scss';

export const DashboardInformation = () => {
  return (
    <div className={styles.container}>
        <BalanceInfoCard />
        <BalanceInfoCard />
        <BalanceInfoCard />
    </div>
  )
}