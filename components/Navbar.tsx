import React, {FC} from 'react'

export const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">Hola</li>
          <li className="navbar-list-item">Proyestos</li>
          <li className="navbar-list-item">Hablemos</li>
        </ul>
      </nav>
      <style jsx>{`
        .navbar {
          display: none;
        }

        .navbar-list {
          display: flex;
          column-gap: 40px;
          list-style-type: none;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .navbar {
            display: block;
          }
        }
      `}</style>
    </>
  )
}
