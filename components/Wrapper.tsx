import React, {FC} from 'react'

interface ContainerWrapperProps {
  maxWidth: number
  padding?: number
  children?: React.ReactNode
}

export const ContainerWrapper: FC<ContainerWrapperProps> = ({
  maxWidth,
  padding = 0,
  children,
}) => {
  return (
    <>
      <div className="container-wrapper">{children}</div>
      <style jsx>{`
        .container-wrapper {
          max-inline-size: ${maxWidth}px;
          margin: auto;
          padding-inline-start: ${padding}px;
          padding-inline-end: ${padding}px;
        }
      `}</style>
    </>
  )
}
