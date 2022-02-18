import css from 'styled-jsx/css'

export default css.global`
  :root {
    --primary-font: 'Poppins';
    --Headline-1: 700 95px/153px var(--primary-font);
    --Headline-2: 700 59px/95px var(--primary-font);
    --Headline-3: 700 48px/77px var(--primary-font);
    --Headline-4: 700 34px/55px var(--primary-font);
    --Headline-5: 700 24px/38px var(--primary-font);
    --Body-1: 400 16px/25px var(--primary-font);
    --Body-2: 400 14px/22px var(--primary-font);
    --Button: 700 14px/22px var(--primary-font);
    --Caption: 400 12px/19px var(--primary-font);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
