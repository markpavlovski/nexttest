import {PrimaryNavItem} from "./types";

export const hasSecondaryNavItems = (navItem: PrimaryNavItem): boolean =>
  Boolean(navItem.secondaryNavItems && navItem.secondaryNavItems.length);