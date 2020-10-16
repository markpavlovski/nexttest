import Layout from "../components/layout/Layout";
import {allNavItems} from "../common/constants";
import {getPageContent} from "../content/utils";
import Banner from "../components/Banner";
import {getStaticContent} from "../data/staticContent";
import LogoBar from "../components/LogoBar";
import PageTitle from "../components/PageTitle";
import {StaticContent} from "../data/types";
import ContentLayout from "../content/page-components/ContentLayout";

export function PageLayout({navItem, bannerContent, footerContent}) {
  const PageContent = getPageContent(navItem.name);

  return (
    <Layout activePage={navItem.name} footerContent={footerContent}>
      <Banner bannerContent={bannerContent}/>
      <LogoBar/>
      <PageTitle title={navItem.title}/>
      <ContentLayout>
        <PageContent/>
      </ContentLayout>
    </Layout>
  )
}

export default function Page(props) {
  return <PageLayout {...props}/>
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
  const staticContent: StaticContent = await getStaticContent();

  return {
    props: {
      pageSlug: params.id,
      navItem,
      bannerContent: staticContent.banner,
      footerContent: staticContent.footer,
    }
  }
}