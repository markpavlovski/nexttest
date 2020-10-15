import pageStyles from './pages.module.scss'
import layoutStyles from '../components/layout/Layout.module.scss'
import Layout from "../components/layout/Layout";
import cn from "classnames"
import {Pages} from "../common/types";


export default function Index() {
  return (
    <Layout debug activePage={Pages.Rentals}>
      <section className={cn(layoutStyles.block, layoutStyles.width12, pageStyles.firstSection)}>
        {Pages.Rentals}
      </section>
    </Layout>
  )
}
