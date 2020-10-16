import {datoCmsRequest} from "./networkUtils";
import {StaticContent} from "./types";



export const getStaticContent = async (): Promise<StaticContent> => {
  const query = `
  query BannerContentQuery {
      footer {
        content(markdown: true)
      }
      banner {
        hiddenContent(markdown: true)
        visibleContent(markdown: true)
      }
  }
`;

  const response = await datoCmsRequest({query});
  return response as StaticContent;
};