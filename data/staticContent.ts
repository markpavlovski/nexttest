import {BannerContent} from "../common/types";
import {datoCmsRequest} from "./networkUtils";

export const getBannerContent = async (): Promise<BannerContent> => {
  const query = `
  query BannerContentQuery {
    banner {
      hiddenContent(markdown: true)
      visibleContent(markdown: true)
    }
  }
`;
  const response = await datoCmsRequest({query});
  return response?.banner as BannerContent;
};