import {Pages} from "./types";
import {topNavItems} from "./constants";
import {hasSecondaryNavItems} from "../components/nav/utils";

export const isDoubleLineTopNav = (page: Pages): boolean => {
  const navItem = topNavItems.find(navItem => navItem.name === page);
  if(!navItem) return false;

  return hasSecondaryNavItems(navItem)
};