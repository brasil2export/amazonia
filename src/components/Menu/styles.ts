import styled from 'styled-components'


export const Container = styled.header`

    
    nav{
        background-color: black;
        max-height: 100px;

        @media(max-width: 991px){
            max-height: none;
        }

        .navegationMenu{
            margin-left: 20px;
        }

        img{
            margin-right: 20px;
        }
        
    }
    .btn-outline-primary{
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        margin-right: 20px;

        &:hover{
            color: #fff;
            background-color: ${props => props.theme.colors.primary};
        }
    }

    button{
        margin-left: 40px;
    }

    .dropdown-menu{
        background-color: black;
      

        .show{
            color: white;
            a{
                color: aliceblue;
                transition: .2s;
                &:hover{
                    color: ${props => props.theme.colors.primary};
                    background-color: black;
                }
            }
        }
    }


`

export const NavegationWrapper = styled.nav`
    display: flex;
    align-items: center;


`

export const MenuWrapper = styled.ul`

    list-style: none;
    display: flex;

    a{
    margin-right: 42px;
    font-size: 18px;
    transition: 400ms;

    &:hover{
        color: ${props => props.theme.colors.primary}
    }
    }
`


export const ButtonCatalog = styled.button`

    padding: 16px 32px;
    border-radius: 50px;
    border: none;
    background-color: transparent;
    border: 2px solid;
    border-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    color: #ffffff;
    font-size: 18px;
    outline: none;
    transition: 200ms;   


    &:hover{
        background-color: ${props => props.theme.colors.primary};
        color: #ffffff;
    }

`

