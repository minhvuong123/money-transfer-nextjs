import { NextPageWithLayout } from "@/src/types";
import { FC, PropsWithChildren } from "react";
import { NavigationSidebar } from "../sidebars/NavigationSidebar";


export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NavigationSidebar />
      <main>{children}</main>
    </>
  )
}