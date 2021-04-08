import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-BI-BTX-FECHADO.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'

const Amazonia_Therapy_BI_BTX: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_BI_BTX.title}</title>
        <meta name="description" content="BI-BTX is a hair treatment that promotes the creation of new structural bridges in the hair fiber that guarantee the strengthening of weakened areas." />
      </Head>

      <Menu />

      <ProductPageBase
        imagemBanner={Amazonia_woman_bg_products}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_BI_BTX}
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_BI_BTX