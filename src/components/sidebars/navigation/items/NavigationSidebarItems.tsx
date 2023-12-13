import { NavigationItem } from "@/src/types";
import { getNavigationIcon } from "@/src/utils/helpers";
import { FC } from "react";

import styles from "./index.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  item: NavigationItem;
};

export const NavigationSidebarItem: FC<Props> = ({ item }) => {
  const Icon = getNavigationIcon(item);
  const router = useRouter();
  const isRouterActive = router.pathname === item.pathname;
  return (
    <Link href={item.pathname}>
      <Icon
        size={36}
        cursor="pointer"
        className={`${styles.icon} ${isRouterActive && styles.active}`}
        onClick={() => router.push(item.pathname)}
      />
    </Link>
  );
};
