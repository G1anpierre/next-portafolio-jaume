import React, {FC} from 'react'
import {useFormik} from 'formik'
import {Title} from '../components/Title'
import {Button} from '../components/Button'
import {useForm, ValidationError} from '@formspree/react'

// https://formspree.io/f/mpzbdejo

export const Form: FC = () => {
  const FORM_KEY = process.env.NEXT_PUBLIC_FORMSPREE_KEY
  const [state, handleSubmit] = useForm(FORM_KEY as string)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      handleSubmit(values)
    },
  })

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <>
      <div className="form-container">
        <Title title="Hablemos" custom="strech-desktop" />
        <p className="form-description">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto conmigo.
        </p>
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="name">
            Nombre completo
            <input
              id="name"
              name="name"
              type="name"
              placeholder="Juan"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="style-input"
            />
          </label>
          <label>
            Correo electronico
            <input
              id="email"
              name="email"
              type="email"
              placeholder="juan@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="style-input"
            />
          </label>
          <label>
            Mensaje
            <textarea
              rows={6}
              name="message"
              placeholder="Escribe tu mensaje"
              onChange={formik.handleChange}
              value={formik.values.message}
              className="style-input"
            />
          </label>

          <Button
            border={`2px solid var(--primary-color)`}
            color={`var(--white)`}
            radius={`4px`}
            onClick={() => console.log('hello primary Button')}
            background={`var(--primary-color)`}
            paddingTopBottom={'10px'}
            paddingLeftRight={'10px'}
          >
            Enviar Mensaje
          </Button>
        </form>
      </div>
      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          margin-block-end: 80px;
        }

        .form-description {
          color: var(--white);
          text-align: center;
          font: var(--Body-1);
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        label input,
        label textarea {
          display: block;
          inline-size: 100%;
          padding-block-start: 16px;
          padding-block-end: 16px;
          padding-inline-start: 12px;
          padding-inline-end: 12px;
          border-radius: 8px;
          border: none;
          font: var(--Body-1);
        }

        label textarea {
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}
