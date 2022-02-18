import React from 'react'
import {Button} from './Button'
import {Navbar} from './Navbar'
import Image from 'next/image'
import LogoPic from '../public/LOGO.svg'

export const Header = () => {
  return (
    <>
      <header className="header">
        <Image src={LogoPic} alt="logo" />
        <Navbar />
        <Button
          border={`2px solid var(--primary-color)`}
          color={`var(--white)`}
          radius={`4px`}
          onClick={() => console.log('hello primary Button')}
          background={`var(--primary-color)`}
          paddingTopBottom={'13px'}
          paddingLeftRight={'24px'}
        >
          Curriculum
        </Button>
      </header>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          margin-block-start: 16px;
          margin-block-end: 48px;
          position: sticky;
          top: 0;
          z-index: 2;
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  )
}
