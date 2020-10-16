import {BannerContent, FooterContent} from "../common/types";

export interface DatoCmsRequest {
  query: string;
  variables?: string;
  preview?: boolean
}

export interface StaticContent {
 banner: BannerContent;
 footer: FooterContent;
}