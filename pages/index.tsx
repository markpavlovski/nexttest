import {PageLayout} from "./[id]";
import {topNavItems} from "../common/constants";
import {BannerContent, Pages} from "../common/types";
import {getBannerContent} from "../data/staticContent";

export default function Index({bannerContent}) {
  const navItem = topNavItems.find(navItem => navItem.name === Pages.Rentals);
  return <PageLayout navItem={navItem} bannerContent={bannerContent}/>
}

export async function getStaticProps() {
  const bannerContent: BannerContent = await getBannerContent();

  return {
    props: {
      bannerContent
    }
  }
}