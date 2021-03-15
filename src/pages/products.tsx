import { useRouter } from 'next/router'
import styled from 'styled-components'


import Menu from '../components/Menu'
import Footer from '../components/Footer'
import ImageProd from '../assets/products/amazoniaTherapyShampooHomeCare.png'
import Amazonia_woman_bg_products from '../assets/amazonia_woman_bg_products.jpg'
import Trans from '../animations/Transition'


const Container = styled.div`

min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.trails-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.trails-text {
  position: relative;
  width: 100%;
  height: 110px;
  line-height: 110px;
  color: black;
  font-size: 8em;
  font-weight: 800;
  letter-spacing: -9px;
  will-change: transform, opacity;
  overflow: hidden;
}

.trails-text > div {
  overflow: hidden;
}
`


const Products: React.FC = () => {

  let url = useRouter().asPath

  console.log(url.replace('/products/', '').replace('/', ''))
  return (
    <div>
      <Menu />
      <Container>
      <Trans />
      </Container>
      
    
    </div>
  )
}


export default Products