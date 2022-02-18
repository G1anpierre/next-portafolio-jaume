import React, {FC} from 'react'
import {Button} from '../components/Button'
import InstagramPic from '../public/icon-instagram.svg'
import TwitterPic from '../public/icon-twitter_squared.svg'
import MailPic from '../public/icon-important_mail.svg'
import PhonePic from '../public/icon-phone.svg'
import Image from 'next/image'

export const GroupIcons: FC = () => {
  return (
    <>
      <div className="group-icons">
        <Button
          border={`2px solid var(--primary-color)`}
          color={`var(--primary-color)`}
          radius={`4px`}
          onClick={() => console.log('hello link buttons')}
          background={`var(--white)`}
          paddingTopBottom={'10px'}
          paddingLeftRight={'10px'}
        >
          <Image src={PhonePic} alt="phone" className="image-icon" />
        </Button>
        <Button
          border={`2px solid var(--primary-color)`}
          color={`var(--primary-color)`}
          radius={`4px`}
          onClick={() => console.log('hello link buttons')}
          background={`var(--white)`}
          paddingTopBottom={'10px'}
          paddingLeftRight={'10px'}
        >
          <Image src={MailPic} alt="mail" className="image-icon" />
        </Button>
        <Button
          border={`2px solid var(--primary-color)`}
          color={`var(--primary-color)`}
          radius={`4px`}
          onClick={() => console.log('hello link buttons')}
          background={`var(--white)`}
          paddingTopBottom={'10px'}
          paddingLeftRight={'10px'}
        >
          <Image src={InstagramPic} alt="instagram" className="image-icon" />
        </Button>
        <Button
          border={`2px solid var(--primary-color)`}
          color={`var(--primary-color)`}
          radius={`4px`}
          onClick={() => console.log('hello link buttons')}
          background={`var(--white)`}
          paddingTopBottom={'10px'}
          paddingLeftRight={'10px'}
        >
          <Image src={TwitterPic} alt="twitter" className="image-icon" />
        </Button>
      </div>
      <style jsx>{`
        .group-icons {
          display: flex;
          justify-content: center;
          column-gap: 16px;
        }

        @media (min-width: 768px) {
          .group-icons {
            justify-content: unset;
          }
        }
      `}</style>
    </>
  )
}
