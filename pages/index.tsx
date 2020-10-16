import {PageLayout} from "./[id]";
import {topNavItems} from "../common/constants";
import {Pages} from "../common/types";
import {getStaticContent} from "../data/staticContent";
import {StaticContent} from "../data/types";

export default function Index({bannerContent, footerContent}) {
  const navItem = topNavItems.find(navItem => navItem.name === Pages.Rentals);
  return <PageLayout navItem={navItem} bannerContent={bannerContent} footerContent={footerContent}/>
}

export async function getStaticProps() {
  const staticContent: StaticContent = await getStaticContent();

  console.log("!", staticContent.footer)

  return {
    props: {
      bannerContent: staticContent.banner,
      footerContent: staticContent.footer,
    }
  }
}