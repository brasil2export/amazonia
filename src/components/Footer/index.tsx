import { 
    Container,
    ContentFooter,
    CopyRightFooter,
 } 
  from "./styles"

import IconFace from '../../assets/face.svg'
import IconTwitter from '../../assets/twitter.svg'
import IconYoutube from '../../assets/youtube.svg'
import IconInsta from '../../assets/instagram.svg'
import LogoFooter from '../../assets/logoFooter.png'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube} from 'react-icons/fa';

import Link  from 'next/link'
// import Image from 'next/image'



const Footer: React.FC  = ( ) =>{

  const currentYear = new Date().getFullYear()

return (
  <Container>
    
    <ContentFooter>

      <div className="logoFooter">
        {/* <Image src={LogoFooter} width={257} height={150} quality={100}  alt="Amazonia Therapy Logo"/> */}
         <img src={LogoFooter} alt="Amazonia Therapy Logo"/>
      </div>

      <div className="menuFooter">

        <div className="conteinerMenu">
          <Link href="/">
            Home
          </Link>     

          <Link href="/about-us">
            Amazonia Therapy
          </Link> 

          <Link href="/products">
            Products
          </Link>            
      
          <Link href="/contact">
            Contact
          </Link>             

        </div>

        <div className="email">
          <p>+55 11 3637 7711</p>
          <a href="mailto:info@amazoniatherapy.com.br" target="_blank" rel="noopener noreferrer">
          info@amazoniatherapy.com.br
          </a>
        </div>

      </div>

      <div className="adressFooter">
        <div className="adress">
          <h5>Address</h5>
            <p>Rua João Paulo Ablas, 1400</p>
            <p> Galpão Número 4</p>
            <p> Bairro Jardim da Glória</p>
            <p> Cotia - SP - Brasil</p>
            <p> CEP: 06711-250</p>
        </div>

        <div className="socialMedia">

          <a href="">
          <FaFacebook size={32}/>
          </a>
          <a href="">
          <FaYoutube size={32}/>
          </a>
          <a href="">
            <FaInstagram size={32}/>
          </a>
        </div>
      </div>

  </ContentFooter>

  <CopyRightFooter>
    <p>&copy;  {currentYear} Amazonia Therapy Cosméticos.</p>
  </CopyRightFooter>
   


  </Container>
)
}

export default Footer

