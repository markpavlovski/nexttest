import Layout from "../components/layout/Layout";
import {allNavItems} from "../common/constants";
import {getPageContent} from "../content/utils";
import {BannerContent} from "../common/types";
import Banner from "../components/Banner";
import {getBannerContent} from "../data/staticContent";
import LogoBar from "../components/LogoBar";

export function PageLayout({navItem, bannerContent}) {
  const PageContent = getPageContent(navItem.name);

  return (
    <Layout activePage={navItem.name}>
      <Banner bannerContent={bannerContent}/>
      <LogoBar/>
      <PageContent/>
    </Layout>
  )
}

export default function Page({navItem, bannerContent}) {
  return <PageLayout navItem={navItem} bannerContent={bannerContent}/>
}


export async function getStaticPaths() {
  const paths = allNavItems.map(navItem => ({
    params: {
      id: navItem.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const navItem = allNavItems.find(navItem => navItem.slug === params.id);
  const bannerContent: BannerContent = await getBannerContent();

  return {
    props: {
      pageSlug: params.id,
      navItem,
      bannerContent
    }
  }
}