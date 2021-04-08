import styled from 'styled-components'

export const Container = styled.div`

 
  section{
    
    padding: 0 60px;
    width:100%;
    min-height:calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    @media(max-width: 1000px){
      padding: 16px;
      flex-direction: column;
      min-height:calc(100vh - 100px);
      
    }
  }
`

export const WrapperContent = styled.main`



.section2{
  min-height: 100vh;
  justify-content: center;
  max-width: 1400px;
  


  @media(max-width: 1000px){
      flex-direction: column-reverse;
      padding-top: 60px;
  }
    .wrapperTitle{
      flex:0.5;
      display: flex;
      justify-content: center;
      height: 50%;

        .tex{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;

            @media(max-width: 1000px){
              margin: 0px 0 24px;
              flex-direction: row;
              flex-wrap: wrap;
            }
            
            h3{
              font-size: 48px;

              @media(max-width: 700px){
                width: 100%;
                margin-top: 20px;
                text-align: center;

              }
            }

            h2{
              font-weight:800;
              color: ${({theme}) => theme.colors.primary};
              text-decoration:overline;
              line-height: 140px;
              font-size: 70px;
              @media(max-width: 1300px){
                text-align: center;
                line-height: 110px;
              }

              @media(max-width: 1000px){
                order: -1;
                
                width: 100%;
                line-height: 75px;
                font-size: 50px;
                margin: 0;
            }
          }
        }
      }

      .wrapperImage{
      flex:0.5;
      display: flex;
      justify-content: center;

        @media(max-width: 800px){
          justify-content: flex-start;
          max-width: 600px;
          max-height: 600px;
          margin-bottom: 20px;
          .containerCarrosel{
            margin-top: 0px;
          }
        }
      }
}


.section3 {
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  min-height: 800px;
  padding: 60px;
  background-color: ${props => props.theme.colors.productsSectionColor};

  @media(max-width: 1000px){
    padding: 0;
    padding-top: 32px;
    padding-bottom: 16px; 
  }

  h2{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 64px;
    line-height: 72px;
    font-weight: bold;
      @media(max-width: 800px){
        margin-bottom: 20px;
    }
  }

  .grid{
  width: fit-content;
  display: grid;
  grid-template-columns:   repeat(3, minmax(100px, 400px));  

  justify-items: center;
  margin: 0 auto;
  gap: 32px;

    @media(max-width: 1100px){
      grid-template-columns: repeat(3, minmax(100px, 550px));    
      gap: 32px;
    }
    @media(max-width: 1000px){
      grid-template-columns: repeat(2, minmax(100px, 400px));    
    }

    @media(max-width: 800px){
      padding: 10px;
    }
    @media(max-width: 650px){
      grid-template-columns:minmax(200px,400px);  
    }
  }
}



`

export const Banner = styled.div`
  height: calc(100vh - 100px);
  width: 100%;

  .carousel-item{
    width: 100vw;
    height: calc(100vh - 100px);
    position: relative;

    img{
      object-fit: cover;
      filter: brightness(0.8);
      width: 100%;
      height: 100%;

      @media(max-width: 800px){
      object-position: 75% 100%;
    }
     
    }

    .carousel-caption{
      top: 50%;
      left: 200px;
    position: absolute;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${props => props.theme.colors.textInBlack};
    text-align: center;
    right: auto;
    bottom: auto;
    transform: translateY(-50%);
     /* padding: 30px 40px;
      background-color: #009688;
      border-radius:8px; */

    @media(max-width: 1000px){
      left:50%;
      transform: translateX(-50%); 
      top: 20%;
      padding: 20px;
    }

    @media(max-width: 700px){
      padding: 30px 60px;
      width: 100%;
      z-index: 1;
    }

    h1,h2{
        font-size: 88px;
       max-width: 750px;
      line-height: 110px;
      text-shadow: 5px 0 5px black;
      text-align: initial;
      color: #FFFFFF;

      text-transform: uppercase;

      @media(max-width: 1000px){
        font-size: 90px;
      line-height: 100px;
      }

      @media(max-width: 700px){
        font-size: 70px;
       max-width: none;
       line-height: 85px;
      }

      @media(max-width: 450px){
        font-size: 40px;
        line-height: 48px;
      }

      
    }
    p{
      margin-top: 24px;
      font-size: 24px;
      max-width: 600px;
      line-height: 32px;
      text-align: left;
      color: #FFFFFFAA;


    }
    }

    .carousel-control-next, .carousel-control-prev {
      width: 10%;
      z-index: 10;
    }
 
  }


`

