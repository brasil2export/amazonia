import styled, {css} from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import {AmazoniaBaseProps} from '../../Interface/amazoniaInterface'

import {Container, Banner, Content} from './style'

interface productPageBaseProps{
imagemBanner: string;
imagemProduct: string;
dataProducts: AmazoniaBaseProps;
color?: string;
}


const ProductPageBase: React.FC<productPageBaseProps> = ({imagemBanner, imagemProduct, dataProducts, color}) => {

    

  




  return (
    <Container>


      <Banner >
        <h1>{dataProducts.title}</h1>
        <img src={imagemBanner} alt="Amazonia Products" />
      </Banner>
      <Content>

        <div className="contentWrapper">
          <div className="dicription">
            <h2>{`${dataProducts.description.substring(0, 160)}...`}</h2>
          </div>
         

          <div className="acordionContainer">

            <h2  style={{color: color}}>Products Information</h2>
        <Accordion defaultActiveKey="0">
          {dataProducts.productsInformation.map(item => {
            return (
              <Card key={`ID_${item.id}`}>
                <Card.Header>
                  <Accordion.Toggle as={Button} eventKey={`${item.id}`}  style={{backgroundColor: color}}>
                    <span>{item.title}</span>
                    <span> + </span>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${item.id}`}>
                  <Card.Body>
                    <h5>{item.title}</h5>
                   <p> {item.content}</p>
    
                   {item.size && <strong>Size: {item.size} </strong>}
                
                   
                    {item.IngredientDetails && item.IngredientDetails.map(ingredient => {
                      return (
                        <div key={`${ingredient.title}_${item.id + item.id }`}>
                          <p>
                            <strong>
                              {ingredient.title}: {'  '} 
                            </strong>
                            <span className="ingredient-description">
                              {ingredient.description}
                            </span>
                          </p>
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

        </div>
      
        <div className="imagemWrapper" style={{backgroundColor: color}}>
          <img src={imagemProduct} alt={dataProducts.title} />
        </div>
       
      </Content>
      

    </Container>
  )
}


export default ProductPageBase