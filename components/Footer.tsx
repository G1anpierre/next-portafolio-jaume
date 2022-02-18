import React, {FC} from 'react'
import {GroupIcons} from './GroupIcons'
import Image from 'next/image'
import LogoPic from '../public/LOGO.svg'

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */}
        <div className="logo-container">
          <Image src={LogoPic} alt="logo" />
        </div>
        <div className="group-icons-container">
          <GroupIcons />
        </div>
        <span className="made-by">Hecho con de Jaume</span>
        <span className="copy-right">
          Copyright 2021 - Todos los derechos reservados.
        </span>
      </footer>
      <style jsx>{`
        .footer {
          margin-block-end: 30px;
          display: grid;
          row-gap: 24px;

          color: var(--white);
          text-align: center;
          grid-template-areas: 'icons' 'made' 'copyright';
        }

        .logo-container {
          grid-area: logo;
          display: none;
        }

        .group-icons-container {
          grid-area: icons;
        }

        .made-by {
          grid-area: made;
        }

        .copy-right {
          grid-area: copyright;
        }

        @media (min-width: 768px) {
          .footer {
            grid-template-areas: 'logo made copyright icons';
            align-items: center;
          }

          .logo-container {
            display: block;
            place-self: center start;
          }

          .group-icons-container {
            place-self: end;
          }
        }
      `}</style>
    </>
  )
}
