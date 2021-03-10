import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/products/amazoniaTherapyConditionerHomeCare.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
import ProductPageBase from '../../components/ProductPageBase'


const Conditioner_Vitaoils: React.FC = () => {

  return (
    <div>
      <Menu />
      <ProductPageBase 
        imagemBanner={Amazonia_woman_bg_products}
        imagemProduct={ImageProd}
        dataProducts={AmazoniaContent.Conditioner_Vitaoils}
      />
      <Footer />
    </div>
  )
}


export default Conditioner_Vitaoils