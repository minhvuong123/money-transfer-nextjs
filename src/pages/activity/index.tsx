import { DashboardLayout } from "@/src/components/layouts/DashboardLayout";
import { NextPageWithLayout } from "@/src/types";
import { ReactElement } from "react";

const ActivityPage: NextPageWithLayout = () => {
  return (
    <div>
      Activity
    </div>
  )
} 

ActivityPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{ page }</DashboardLayout>
}

export default ActivityPage;