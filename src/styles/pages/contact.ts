import styled from 'styled-components'



export const Container = styled.header`

.main{
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  padding: 60px;

  .adress{
    width: 50%;
  }
}
  .mapcontainer {
    width: 50%;
    height: 100%;


  }


  form {
    margin-top: 24px;
    padding: 32px;
    height: 100%;
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
