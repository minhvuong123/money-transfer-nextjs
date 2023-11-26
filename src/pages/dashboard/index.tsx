import { DashboardLayout } from "@/src/components/layouts/DashboardLayout";
import { NextPageWithLayout } from "@/src/types";
import { ReactElement } from "react";

const DashboardPage: NextPageWithLayout = () => {
  return (
    <div>
      dashboard
    </div>
  )
} 

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{ page }</DashboardLayout>
}

export default DashboardPage;