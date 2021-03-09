import { useRouter } from 'next/router'
import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import ImageProd from '../../assets/products/amazoniaTherapyProtein1L.png'
import Amazonia_woman_bg_products from '../../assets/amazonia_woman_bg_products.jpg'
import AmazoniaContent from '../../../AmazoniaContentDB.json'
const Container = styled.div`
.acordionContainer{

  max-width: 1400px;
  margin: 0 auto;
  padding:  0px 60px 60px;

  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: black;
    outline: none;
    border: none;
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
}

`
const Banner = styled.div`
width: 100%;
height: calc(80vh - 100px);
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
  filter: brightness(0.3);
}

`

const Content = styled.main`
min-height: 80vh;
width: 100%;
background-color: #fefefe;
display: flex;
justify-content: center;
align-items: center;
padding: 4%;
max-width: 1400px;
margin: 0 auto;`




const AmazoniaTherapyVitaoilsProtein: React.FC = () => {

  
  const product = AmazoniaContent.Amazonia_Therapy_Vitaoils
  // let array = []
  // const json = AmazoniaContent.Amazonia_Therapy_Vitaoils
  // let element
  // for (const key in json) {
  //   let title =  key
  //   if (Object.prototype.hasOwnProperty.call(json, key)) {
  //     element = [json[key]];
  //     const titleReplace = title.replace("_", " ").replace("_", " ").replace("_", " ")
  //     array.push({titleReplace ,...element})
  //   }

  // }
  // console.log(array)

  return (
    <Container>
      <Menu />

      <Banner>
        <h1>Amazonia Therapy Vitaoils Protein</h1>
        <img src={Amazonia_woman_bg_products} alt="Amazonia Products" />
      </Banner>
      <Content>

        <div className="imagemWrapper">
          <img src={ImageProd} alt="Amazonia Therapy Vitaoils Protein" />
        </div>
        <div className="contentWrapper">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

        </div>

      </Content>
      <div className="acordionContainer">
        <Accordion defaultActiveKey="0">
          {product.productsInformation.map(item => {
            return (
              <Card key={`ID_${item.id}`}>
                <Card.Header>
                  <Accordion.Toggle as={Button} eventKey={`${item.id}`}>
                    <span>{item.title}</span>
                    <span> + </span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${item.id}`}>
                  <Card.Body>
                   <p> {item.content}</p>
                    <strong>{item.size}</strong>
                    {item.IngredientDetails && item.IngredientDetails.map(ingredient => {
                      return (
                        <div key={`${ingredient.title}_${item.id + item.id }`}>
                          <h5>{ingredient.title}</h5>
                          <p>{ingredient.description}</p>
                        </div>
                      )
                    })}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            )
          })}
        </Accordion>

      </div>

      <Footer />
    </Container>
  )
}


export default AmazoniaTherapyVitaoilsProtein