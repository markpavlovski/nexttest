import {Pages} from "../../common/types";

export interface PrimaryNavItem {
  name: Pages,
  slug: string,
  secondaryNavItems?: SecondaryNavItem[]
}

export interface SecondaryNavItem {
  name: string,
  anchor: string,
}

export interface NavBarProps {
  activePage: Pages;
}

export interface PrimaryNavButtonProps {
  navItem: PrimaryNavItem;
  selected: boolean;
}

export interface SecondaryNavButtonProps {
  name: string;
  anchorLink: string;
}

export interface FooterNavButtonProps {
  navItem: PrimaryNavItem;
}

export interface SelectedItemCaratProps {
  primaryNavRef: HTMLElement;
  activePage: Pages;
}
