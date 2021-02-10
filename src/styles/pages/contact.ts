import styled from 'styled-components'

import bg from '../../assets/bgpredio.jpg'

export const Container = styled.div`

.main{
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-wrap:wrap;
 

  .containerAdreess{

    width: 60%;
    height: 100%;
    display: flex;
      flex-direction: column;

    
    .contentAdress{
      padding: 60px;
      padding-bottom: 0;
      display: flex;
      justify-content: space-between;


      .adreess{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h5{
          margin-bottom: 24px;
        }

      }
      .contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      }

      .socialMedia{
        display: flex;
        align-items: center;
        justify-content: center;


        a{
        margin-right: 24px;
        transition: 400ms;

        svg{
          width: 36px;
        }

        path{
            transition: 400ms;
            fill:  ${props => props.theme.colors.black} !important;
        }
        &:hover path{
        
            fill:  ${props => props.theme.colors.primary} !important;
        }
        
        }
    }
    }


  }
}
  .mapcontainer {
    width: 40%;
    height: 100%;


  }

  .form{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;

  }
  form {
    max-width: 500px;
    margin-top: 24px;
    padding: 32px;

    width: 100%;
    legend{
      text-align: center;

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

  

      label{
      
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
      background-color: ${props=> props.theme.colors.secondary};
      color: white;
      transition: .4s;

      &:hover{
        background-color: ${props=> props.theme.colors.secondaryDark};
      }
    }
  }
`
