import React, {FC} from 'react'

interface ButtonProps {
  border: string
  color: string
  children?: React.ReactNode
  onClick: () => void
  radius: string
  background: string
  paddingTopBottom: string
  paddingLeftRight: string
}

export const Button: FC<ButtonProps> = ({
  border,
  color,
  children,
  onClick,
  radius,
  background,
  paddingTopBottom,
  paddingLeftRight,
}) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
      <style jsx>{`
        .button {
          background: ${background};
          color: ${color};
          padding-block-start: ${paddingTopBottom};
          padding-block-end: ${paddingTopBottom};
          padding-inline-start: ${paddingLeftRight};
          padding-inline-end: ${paddingLeftRight};
          font: var(--Button);
          border: ${border};
          text-transform: uppercase;
          border-radius: ${radius};
          display: inline-flex;
          justify-content: center;
          cursor: pointer;
        }

        :global(.button) span {
          vertical-align: middle;
        }
      `}</style>
    </>
  )
}
