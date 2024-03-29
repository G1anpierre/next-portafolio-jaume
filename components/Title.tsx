import React, {FC} from 'react'

interface TitleProps {
  title: string
  custom?: string
}

export const Title: FC<TitleProps> = ({title, custom}) => {
  return (
    <>
      <a
        target="_blank"
        href="/"
        className={['project-title', custom].join(' ')}
      >
        {title}
      </a>
      <style jsx>{`
        .project-title {
          margin-block-end: 20px;
          margin-inline-start: 4px;
          color: var(--white);
          font: var(--Headline-5);
          background-color: var(--primary-color);
          padding-block-start: 4px;
          padding-block-end: 4px;
          padding-inline-end: 8px;
          padding-inline-start: 8px;
          box-shadow: -4px 4px 0px var(--white);
          align-self: flex-start;
          text-align: center;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .project-title {
            margin-block-end: 20px;
            font: var(--Headline-4);
          }

          .strech-desktop {
            align-self: stretch;
          }
        }
      `}</style>
    </>
  )
}
