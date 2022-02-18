import React, {FC} from 'react'
import Image from 'next/image'
import {Button} from '../components/Button'
import {Title} from '../components/Title'

interface ProjectsInterface {
  title: string
  info: string
  image: string
  altText: string
  reverse?: boolean
}

export const Projects: FC<ProjectsInterface> = ({
  title,
  info,
  image,
  altText,
  reverse = true,
}) => {
  return (
    <>
      <section className="projects-container">
        <div className="project">
          <div className="project-image">
            <Image src={image} alt={altText} />
          </div>
          <div className="project-info-content">
            <Title title={title} />
            <p className="project-info">{info}</p>
            <div className="project-button-container">
              <Button
                border={`2px solid var(--primary-color)`}
                color={`var(--white)`}
                radius={`4px`}
                onClick={() => console.log('hello primary Button')}
                background={`var(--primary-color)`}
                paddingTopBottom={'10px'}
                paddingLeftRight={'10px'}
              >
                Ver Proyecto
              </Button>
              <Button
                border={`2px solid var(--primary-color)`}
                color={`var(--primary-color)`}
                radius={`4px`}
                onClick={() => console.log('hello secondary Button')}
                background={`var(--secondary-color)`}
                paddingTopBottom={'10px'}
                paddingLeftRight={'10px'}
              >
                Ver Codigo
              </Button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .project-container {
          margin-block-end: 40px;
        }

        .project {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .project-info-content {
          display: flex;
          flex-direction: column;
        }

        .project-info {
          margin-block-end: 16px;
          display: flex;
          flex-direction: column;
        }

        .project-button-container {
          display: flex;
          flex-direction: column;
          row-gap: 16px;
        }

        @media (min-width: 768px) {
          .project-container {
            margin-block: 80px;
          }

          .project {
            flex-direction: ${reverse ? 'row' : 'row-reverse'};
            align-items: center;
          }
          .project-info {
            margin-block-end: 20px;
            max-inline-size: 500px;
          }

          .project-image {
            display: flex;
            flex: 1;
            justify-content: center;
          }

          .project-button-container {
            flex-direction: row;
            column-gap: 16px;
          }
        }
      `}</style>
    </>
  )
}
