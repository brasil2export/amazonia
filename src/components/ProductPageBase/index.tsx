import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {AmazoniaBaseProps} from '../../Interface/amazoniaInterface'

import {Container, Banner, Content} from './style'

interface productPageBaseProps{
imagemBanner: string;
imagemProduct: string;
dataProducts: AmazoniaBaseProps;
}


const ProductPageBase: React.FC<productPageBaseProps> = ({imagemBanner, imagemProduct, dataProducts}) => {



  return (
    <Container>


      <Banner>
        <h1>{dataProducts.title}</h1>
        <img src={imagemBanner} alt="Amazonia Products" />
      </Banner>
      <Content>

        <div className="imagemWrapper">
          <img src={imagemProduct} alt={dataProducts.title} />
        </div>
        <div className="contentWrapper">
          <h1>{dataProducts.title}</h1>
          <p>{dataProducts.description}</p>

        </div>

      </Content>
      <div className="acordionContainer">
        <Accordion defaultActiveKey="0">
          {dataProducts.productsInformation.map(item => {
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