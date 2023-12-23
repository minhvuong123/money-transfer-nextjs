import { FC, PropsWithChildren } from "react";
import { NavigationSidebar } from "../sidebars/navigation/NavigationSidebar";
import styles from './index.module.scss';

export const NestedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      { children }
      <aside>SideBar</aside>
    </div>
  )
}

export const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavigationSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  )
}