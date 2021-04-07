
import { ContainerGrid } from './styles'
// import Image from 'next/image'
import MaisIcon from '../../assets/mais.svg'
import Link from 'next/link'
interface productItemProps {

  title: string;
  contentText: string;
  image: string;
  alt: string;
  link: string;
}

const ProductItem: React.FC<productItemProps> = ({ contentText, image, title, alt, link }) => {


  let text
  if (contentText.length <= 40) {
    text = contentText;
  } else {
    text = contentText.substring(0, 40) + "...";
  }
  return (
    <Link href={link}>
      <ContainerGrid onClick={() => { return console.log("click") }}>
        <div className="itemImage">
          {/* <Image src={image} width={500} height={500} quality={100}/> */}
          <img src={image} alt={alt} />
        </div>


        <div className="itemContent">


          <div className="text">
            <h4>{title}</h4>
            <p> {text}</p>
          </div>


          <div className="itemButton">
            <button>
              <MaisIcon />
            </button>
          </div>
        </div>


      </ContainerGrid>
    </Link>
  )
}

export default ProductItem

