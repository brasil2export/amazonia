import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {AmazoniaBase} from '../../Interface/amazoniaInterface'

import {Container, Banner, Content} from './style'

interface productPageBaseProps{
imagemBanner: string;
imagemProduct: string;
dataProducts: AmazoniaBase;
}


const ProductPageBase: React.FC<productPageBaseProps> = ({imagemBanner, imagemProduct, dataProducts}) => {

  
  const product = dataProducts


  return (
    <Container>


      <Banner>
        <h1>{product.title}</h1>
        <img src={imagemBanner} alt="Amazonia Products" />
      </Banner>
      <Content>

        <div className="imagemWrapper">
          <img src={imagemProduct} alt={product.title} />
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

    </Container>
  )
}


export default ProductPageBase