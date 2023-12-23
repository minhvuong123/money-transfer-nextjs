import { DashboardLayout } from "@/src/components/layouts/DashboardLayout";
import { NextPageWithLayout } from "@/src/types";
import { ReactElement } from "react";
import styles from './index.module.scss';
import { DashboardInformation } from "@/src/components/dashboard/info/dashboardInformation";
import { PaymentMethodContainer } from "@/src/components/dashboard/payment-method/paymentMethodContainer";

const DashboardPage: NextPageWithLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome back</h1>
      </header>
      <div className={styles.main}>
        <DashboardInformation />
        <PaymentMethodContainer />
      </div>
    </>
  )
} 

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{ page }</DashboardLayout>
}

export default DashboardPage;