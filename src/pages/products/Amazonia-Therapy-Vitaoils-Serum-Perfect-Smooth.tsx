import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-SERUM-HOME-CARE.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'


const Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth.title}</title>
      </Head>
      <Menu />
      <ProductPageBase
        imagemBanner={Amazonia_woman_bg_products}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth}
        color="#0276aa"
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth