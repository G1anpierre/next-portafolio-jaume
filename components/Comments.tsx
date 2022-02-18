import React, {FC} from 'react'
import Image from 'next/image'

interface CommentsProps {
  image: string
  altText: string
  comment: string
  commentAuthor: string
}

export const Comments: FC<CommentsProps> = ({
  image,
  altText,
  comment,
  commentAuthor,
}) => {
  return (
    <>
      <section className="comments-container">
        <div className="comment-card">
          <div className="user-image-container">
            <Image src={image} alt={altText} className="user-image" />
          </div>
          <p className="comment">{comment}</p>
          <p className="comment-author">{commentAuthor}</p>
        </div>
      </section>
      <style jsx>{`
        .comments-container {
          margin-block-start: 40px;
          margin-block-end: 80px;
        }

        .comment-card {
          border-radius: 24px;
          background-color: skyblue;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .user-image-container {
          text-align: center;
          margin-block-end: 24px;
        }

        .comment {
          font: var(--Body-1);
          text-align: center;
          margin-block-end: 24px;
        }

        .comment-author {
          font: var(--caption);
          opacity: 50%;
          text-align: center;
        }

        @media (min-width: 768px) {
          .comments-container {
            margin-block-start: 80px;
            margin-block-end: 80px;
          }

          .comment-card {
            padding: 80px;
          }

          .comment {
            font: var(--Headline-4);
            max-inline-size: 900px;
          }

          .comment-author {
            font: var(--Headline-5);
          }
        }
      `}</style>
    </>
  )
}
