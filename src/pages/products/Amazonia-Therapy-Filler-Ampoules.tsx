import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-FILLER-BOX-AND-AMPOULE.png'
import Banner from '../../assets/Ampola-Filler-Folder.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'

const Amazonia_Therapy_Filler_Ampoules: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_Filler_Ampoules.title}</title>
        <meta name="description" content="Amazonia Therapy™ Filler Ampoules has an innovative formula that acts instantly on highly disrupted and dry hair." />
      </Head>
      <Menu />
      <ProductPageBase 
        imagemBanner={Banner}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Filler_Ampoules}
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_Filler_Ampoules