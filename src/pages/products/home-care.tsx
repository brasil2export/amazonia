import styled from 'styled-components'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/products/amazoniaTherapyShampooHomeCare.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'

const Container = styled.div`


`
const Banner = styled.div`
width: 100%;
height: calc(100vh - 100px);
position: relative;
display: flex;
align-items: center;
justify-content: center;

h1{
  z-index: 2;
  color: white;
  font-size: 64px;
}

img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
}

`

const Content = styled.main`
min-height: 80vh;
width: 100%;
background-color: #fefefe;
display: grid;
grid-template-columns: 1fr 1fr;
padding: 4%;
max-width: 1400px;
margin: 0 auto;`

const ProductCart = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;

`

const WhapperImageProduct = styled.div`
max-width:300px;
max-height: 300px;
width: 100%;
height: 100%;
align-self: center;

img{
    width: 100%;
    height:100%;
}

`

const WhapperContentText = styled.div`
flex: .6;
align-self: center;

h1{
    margin-bottom: 40px;
    text-align: center;
}

p{
    text-align: justify;
}
`


const HomeCare: React.FC = () => {
    return (
        <Container>
            <Menu/>

            <Banner>
              <h1>Home Care</h1>
              <img src={Amazonia_woman_bg_products} alt="Amazonia Products"/>
            </Banner>
            <Content>

            <ProductCart>
              <WhapperImageProduct>
                   <img src={ImageProd} alt=""/>
                </WhapperImageProduct>

                <WhapperContentText>
                   <h1>SHAMPOO VITAOILS</h1>
                   <p>With its texture and creamy formula, promotes the cleaning of the strands with a moisturizing, reconstructive and protective action on the ber of multi-processed hair, the Vitaoils Shampoo from Amazônia Therapy is the perfect choice for those who have chemically damaged hair.</p>
                </WhapperContentText>
            </ProductCart>

            <ProductCart>
              <WhapperImageProduct>
                   <img src={ImageProd} alt=""/>
                </WhapperImageProduct>

                <WhapperContentText>
                   <h1>SHAMPOO VITAOILS</h1>
                   <p>With its texture and creamy formula, promotes the cleaning of the strands with a moisturizing, reconstructive and protective action on the ber of multi-processed hair, the Vitaoils Shampoo from Amazônia Therapy is the perfect choice for those who have chemically damaged hair.</p>
                </WhapperContentText>
            </ProductCart>

                

            </Content>

            <Footer/>
        </Container>
    )
 }


 export default HomeCare