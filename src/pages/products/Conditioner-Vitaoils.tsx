import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-CONDITIONER-HOME-CARE.png'
import Banner from '../../assets/Conditioner-Folder.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'


const Conditioner_Vitaoils: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Conditioner_Vitaoils.title}</title>
        <meta name="description" content="Complex of oils and vitamins with exclusive technology composed of assets that interact strongly with the hair fiber." />

      </Head>
      <Menu />
      <ProductPageBase 
        imagemBanner={Banner}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Conditioner_Vitaoils}
      />
      <Footer />
    </div>
  )
}


export default Conditioner_Vitaoils