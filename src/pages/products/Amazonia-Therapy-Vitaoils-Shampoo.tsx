import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-SHAMPOO-HOME-CARE.png'
import Banner from '../../assets/Shampoo-Folder.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'


const Amazonia_Therapy_Vitaoils_Shampoo: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_Vitaoils_Shampoo.title}</title>
        <meta name="description" content="With its texture and creamy formula, promotes the cleaning of the strands with a moisturizing, reconstructive and protective" />

      </Head>
      <Menu />
      <ProductPageBase
        imagemBanner={Banner}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Vitaoils_Shampoo}
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_Vitaoils_Shampoo