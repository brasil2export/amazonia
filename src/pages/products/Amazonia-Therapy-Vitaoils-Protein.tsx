import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/products/amazoniaTherapyProtein1L.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'


const AmazoniaTherapyVitaoilsProtein: React.FC = () => {

  return (
    <div>
      <Menu />
      <ProductPageBase 
        imagemBanner={Amazonia_woman_bg_products}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Vitaoils}
      />
      <Footer />
    </div>
  )
}


export default AmazoniaTherapyVitaoilsProtein