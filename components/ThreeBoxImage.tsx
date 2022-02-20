import React, {FC} from 'react'
import Image from 'next/image'
import ApplePic from '../public/apple-jaquelin.jpeg'
import LaptopIphonePic from '../public/laptop-phone.svg'
import IpadPic from '../public/📱 iPad.svg'
import IphonePic from '../public/📱 IphoneX.svg'
import {Button} from '../components/Button'
import {Title} from './Title'

const products = [
  {src: LaptopIphonePic, url: '/', id: '1', altText: 'Laptop', text: 'teclab'},
  {src: IphonePic, url: '/', id: '3', altText: 'Iphone', text: 'netnet'},
  {src: IpadPic, url: '/', id: '2', altText: 'Ipad', text: 'marvol'},
]

interface Product {
  src: StaticImageData
  id: string
  altText: string
  url: string
  text: string
}

interface BoxImage {
  product: Product
}

export const ThreeBoxImage: FC = () => {
  return (
    <>
      <div className="three-box-image-container">
        {products.map(product => (
          <BoxImage product={product} key={product.id} />
        ))}
      </div>
      <style jsx>{`
        .three-box-image-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          row-gap: 16px;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .three-box-image-container {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            column-gap: 16px;
            margin-bottom: 80px;
          }
        }
      `}</style>
    </>
  )
}

const BoxImage: FC<BoxImage> = ({
  product: {src: productSrc, altText, url, text},
}) => {
  return (
    <>
      <div className="box-image-container">
        <a href={url}>
          <Image src={productSrc} alt={altText} width={500} />
          <div className="button-container">
            <Title title={text} />
          </div>
        </a>
      </div>
      <style jsx>{`
        .box-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .button-container {
          position: absolute;
          bottom: 0.2em;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          text-align: center;
        }
      `}</style>
    </>
  )
}
