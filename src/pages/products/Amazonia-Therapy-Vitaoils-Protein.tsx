import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-1L.png'
import Banner from '../../assets/Protein-Folder.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'


const AmazoniaTherapyVitaoilsProtein: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_Vitaoils.title}</title>
        <meta name="description" content="Amazonia Therapy Protein indicated as 100% Alignment, Vitaoils is enriched with coffee extract and hazelnut oil." />
      </Head>
      <Menu />
      <ProductPageBase
        imagemBanner={Banner}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Vitaoils}
      />
      <Footer />
    </div>
  )
}


export default AmazoniaTherapyVitaoilsProtein