import React, {FC} from 'react'

export const ContainerWrapper: FC = ({children}) => {
  return (
    <>
      <div className="container-wrapper">{children}</div>
      <style jsx>{`
        .container-wrapper {
          max-inline-size: 1158px;
          margin: auto;
          padding-inline-start: 16px;
          padding-inline-end: 16px;
        }
      `}</style>
    </>
  )
}
