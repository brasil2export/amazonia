import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/productsFundoTrasparent/AMAZONIA-THERAPY-SERUM-HOME-CARE.png'
import Banner from '../../assets/Serum-Folder.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'
import Head from 'next/head'


const Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth: React.FC = () => {

  return (
    <div>
      <Head>
        <title>{AmazoniaContent.Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth.title}</title>
        <meta name="description" content="Amazonia Therapy™ Vitaoils Serum Perfect Smooth protects the hair from the heat of the dryer while promoting" />

      </Head>
      <Menu />
      <ProductPageBase
        imagemBanner={Banner}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth}
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_Vitaoils_Serum_Perfect_Smooth