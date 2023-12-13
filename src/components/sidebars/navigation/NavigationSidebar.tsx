import { navigationItems } from "@/src/utils/constants";
import styles from "./index.module.scss";
import { NavigationSidebarItem } from "./items/NavigationSidebarItems";

export const NavigationSidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemContainer}>
        {navigationItems.map((item) => {
          return <NavigationSidebarItem key={item.type} item={item} />;
        })}
      </div>
    </nav>
  );
};
