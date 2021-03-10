import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/products/amazoniaTherapyFillerBoxAndAmpoule.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'


const Amazonia_Therapy_Filler_Ampoules: React.FC = () => {

  return (
    <div>
      <Menu />
      <ProductPageBase 
        imagemBanner={Amazonia_woman_bg_products}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Amazonia_Therapy_Filler_Ampoules}
      />
      <Footer />
    </div>
  )
}


export default Amazonia_Therapy_Filler_Ampoules