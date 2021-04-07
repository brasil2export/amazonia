import styled from 'styled-components'

import bg from '../../assets/streetBG.jpg'

export const Container = styled.div`

.main{
  min-height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-wrap:wrap;  
  position: relative;

  @media(max-width: 900px){
    height: fit-content;
  }
 
 img#bg{
      position: absolute;
      height:  100%;
      width: 100%;
      object-fit: cover;
      z-index: 0;
      filter: brightness(.2);

      @media(max-width: 700px){
        height:  80%;
      }
 }
 .contactUSTitle{
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   z-index: 2;
   color: white;
   padding-top: 32px;

   @media(max-width: 900px){
    padding: 5%;
  }
 }

 .containerContent{
  z-index: 2;
   width: 100%;
   display: flex;
   color: white;
   padding: 5%;

   @media(max-width: 900px){
   flex-direction: column;
  }

  @media(max-width: 700px){

   padding: 0%;
  }
    .containerAdreess{
      flex:0.5;
      color: white;
     display: flex;
     flex-direction: column;
     




    .adreess{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px; 
      .icon{
        margin-right: 16px;
      }

      .text{
        h5{
        margin-bottom: 16px;
        text-align: center;
        font-size: 24px;
        color: ${props => props.theme.colors.primary};
      }
      p{
        max-width: 300px;
        text-align: justify;
      }

      }
      
    }
    .contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 40px;

      .title{
              width: 100%;
      }

      h5{
        text-align: center;
        margin-bottom: 32px;
        color: ${props => props.theme.colors.primary};
      }

      .containterPhoneAndEmail{
        display: flex; 
        flex-direction: column;

        .phone, .email{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        a{
          transition: 400ms;
          span{
            margin-left: 24px; 
          }
          
          &:hover{
           opacity: 0.7;
          }
        }
      }
      }

      
    }

    .socialMedia{
      display: flex;
      align-items: center;
      justify-content: center;


      a{
      margin-right: 24px;
      transition: 400ms;


      path{
          transition: 400ms;
      }
      &:hover path{
      
          fill:  ${props => props.theme.colors.primary} !important;
      }
      
      }
  }


  }
  }


  .form{
    z-index: 2;
  flex: .5;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 0;

  
  @media(max-width: 900px){
   margin-top: 40px;
  }

  }
  form {
  max-height: 500px;
  max-width: 500px;
  margin-top: 24px;
  padding: 32px;
  background-color: white;
  color: black;
  border-radius: 8px;
  width: 100%;

  @media(max-width: 700px){
    max-height: 100%;
    max-width: 100%;
    border-radius: 0px;
  }
  legend{
    text-align: center;
    font-size: 32px;
  }

  fieldset{
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 24px;
    position: relative;


    .labelForm{
      position: absolute;
      bottom: 0;
      transform: translate3d(0,0,0)scale(1);
      transition: .2s;    
    }   

    input:valid ~ .labelForm,
    input:focus ~ .labelForm  {       
        color: ${props => props.theme.colors.primary};
        transform: translate3d(-4px,-28px,7px)scale(.75);
    
    }
    input{
      padding: 12px 8px;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      width:100%;
  
      &:focus{
        border: none;
        box-shadow: inset 0 -2px 0  ${props => props.theme.colors.primary};
       }
    }
  }
  textarea{
    padding: 12px 8px;
    outline: none;
    border: 1px solid black;
  }

  button{
    padding: 12px 16px;
    border: none;
    color: white;
    transition: .4s;

      &:hover{
        background-color: ${props=> props.theme.colors.secondaryDark};
      }

      @media(max-width: 900px){
        width: 50%;
     }

      @media(max-width: 700px){
        width: 100%;
     }
    }

    span{
      margin-left: 24px;
    }
  }
 }

  
`
