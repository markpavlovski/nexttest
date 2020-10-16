import {FooterContent, Pages} from "../../common/types";

export interface LayoutProps {
  debug?: boolean;
  activePage: Pages;
  footerContent?: FooterContent;
}