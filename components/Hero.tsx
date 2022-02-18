import React, {FC} from 'react'
import {GroupIcons} from './GroupIcons'
import UserPic from '../public/user.svg'
import Image from 'next/image'

export const Hero: FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-info">
          <h5 className="hero-greeting"> !Hola a todos !</h5>
          <h1 className="hero-presentation">Soy Jaume</h1>
          <p className="hero-description">
            Frontend Developer que le encanta implementar disenos que inspiran y
            atraen a las personas.
          </p>
          <GroupIcons />
        </div>
        <div className="hero-image">
          <Image src={UserPic} alt="user" />
        </div>
      </section>
      <style jsx>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          grid-template-areas: 'image' 'info';
          margin-block-end: 40px;
          place-items: center;
        }

        .hero-info {
          grid-area: info;
          max-inline-size: 350px;
          text-align: center;
        }

        .hero-image {
          grid-area: image;
          display: flex;
          justify-content: center;
          margin-block-end: 16px;
        }

        .hero-greeting {
          font: var(--Headline-5);
        }

        .hero-presentation {
          font: var(--Headline-3);
        }

        .hero-description {
          font: var(--Body-1);
          margin-block-end: 40px;
        }

        @media (min-width: 768px) {
          .hero {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            column-gap: 20px;
            grid-template-areas: 'info image';
            place-items: unset;
          }

          .hero-presentation {
            font: var(--Headline-2);
          }

          .hero-info {
            text-align: left;
            max-inline-size: 400px;
          }

          .hero-image {
            justify-content: end;
          }
        }
      `}</style>
    </>
  )
}
