import React from "react";
import styles from "./ContentLayout.module.scss";
import layoutStyles from "../../components/layout/Layout.module.scss";
import cn from "classnames"

const ContentLayout: React.FC = ({children}) => (
    <div className={cn(styles.container)}>
      {children}
    </div>
);

export default ContentLayout;