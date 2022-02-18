import React, {FC} from 'react'
import Image from 'next/image'
import ArrowDownPic from '../public/arrow-down.svg'

export const Impressions: FC = () => {
  return (
    <>
      <section
        aria-label="section-impressions"
        className="impressions-container"
      >
        <h2 className="impressions-description-1">
          A lo largo de mi carrera como Frontend, he tenido el privilegio de
          trabajar en proyectos retadores e increibles
        </h2>
        <h2 className="impressions-description-2">
          Aqui hay algunos que me gustaria compartir.
        </h2>
        <Image src={ArrowDownPic} alt="arrow down" />
      </section>
      <style jsx>{`
        .impressions-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .impressions-description-1 {
          max-inline-size: 350px;
          text-align: center;
          margin-block-end: 24px;
          font: var(--Headline-5-light);
        }

        .impressions-description-2 {
          max-inline-size: 350px;
          text-align: center;
          margin-block-end: 24px;
          font: var(--Headline-5);
        }

        @media (min-width: 768px) {
          .impressions-container {
            margin-block-end: 200px;
            margin-block-start: 200px;
          }

          .impressions-description-1,
          .impressions-description-2 {
            max-inline-size: 735px;
          }
        }
      `}</style>
    </>
  )
}
