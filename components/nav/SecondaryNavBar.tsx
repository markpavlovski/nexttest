import React from "react";
import styles from './Nav.module.scss'
import {NavBarProps} from "./types";
import SecondaryNavButton from "./SecondaryNavButton";
import {allNavItems} from "../../common/constants";
import {isDoubleLineTopNav} from "../../common/utils";
import cn from "classnames";

const SecondaryNavBar: React.FC<NavBarProps> = ({activePage}) => {
  const primaryNavItem = allNavItems.find(({name}) => name === activePage);
  const secondaryNavItems = primaryNavItem.secondaryNavItems;
  const shouldRenderSecondaryItems = isDoubleLineTopNav(activePage);

  return (
    <div className={cn(styles.secondaryNavContainer, {
      [styles.fullHeight]: shouldRenderSecondaryItems,
    })}>
      {shouldRenderSecondaryItems && secondaryNavItems.map(({name, anchor}) =>
        <SecondaryNavButton name={name} anchorLink={`${primaryNavItem.slug}#${anchor}`} key={name}/>
      )}
    </div>
  )
};

export default SecondaryNavBar;