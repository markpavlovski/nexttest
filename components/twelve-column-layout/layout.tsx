import React from "react";
import {LayoutProps} from "./types";

const Layout: React.FC<LayoutProps> = props => {
    const {children} = props;
    return (<div>
        {children}
    </div>)
};

export default Layout;