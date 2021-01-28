import React from 'react'

import Image from 'next/image'
import Carousel, { CarouselProps } from 'react-bootstrap/Carousel'
import { Container } from './style'
import 'bootstrap/dist/css/bootstrap.min.css';


interface carouselProps extends CarouselProps  {
  // [index: number]: string;
  title?: string[];
  text?: string[];
  image?: string[];
  height?: number;
  width?: number;
}


const CarouselItem: React.FC<carouselProps> = ({text,title, image, width, height, ...props }) => {

 


  return (
    <Container>
      <div className="containerCarrosel">
        <Carousel   {...props}>
        <Carousel.Item>
             <Image width={width || 800 } height= {height || 800} src={image[0]} alt="Amazonia Therapy vitaoils" quality={100}  /> 
            {/* <img src={image[0]} alt=""/> */}
           {text && (
              <Carousel.Caption className="containerCaption">
                <h3>{title[0]}</h3>
                <p>{text[0]}</p>
              </Carousel.Caption>
           )}
          </Carousel.Item>
          <Carousel.Item>
             <Image width={width || 800} height= {height || 800} src={image[1]} alt="Amazonia Therapy vitaoils" quality={100} /> 
             {/* <img src={image[1]} alt=""/> */}

             {text && (
              <Carousel.Caption className="containerCaption">
                <h3>{title[1]}</h3>
                <p>{text[1]}</p>
              </Carousel.Caption>
           )}
          </Carousel.Item>
          <Carousel.Item>
             <Image width={width || 800} height= {height || 800} src={image[2]} alt="Amazonia Therapy vitaoils"quality={100}  /> 
             {/* <img src={image[2]} alt=""/> */}

             {text && (
              <Carousel.Caption className="containerCaption">
                <h3>{title[2]}</h3>
                <p>{text[2]}</p>
              </Carousel.Caption>
           )}
          </Carousel.Item>
      </Carousel>  
</div>
     
    
    </Container>
  )
}

export default CarouselItem