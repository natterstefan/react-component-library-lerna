/**
 * Additional links
 * - https://github.com/zacanger/styled-reset
 * - https://www.npmjs.com/package/styled-normalize
 *  - https://github.com/necolas/normalize.css
 */
import { get } from 'lodash'
import { createGlobalStyle } from 'styled-components'

const defaultFonts = 'Helvetica, Arial, sans-serif'

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${props => get(props, 'theme.fonts.primary') || defaultFonts};
    box-sizing: border-box;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background: ${props => get(props, 'theme.body.background') || '#fff'};
  }

  body {
    background-color: ${props => get(props, 'theme.body.background') || '#fff'};
    color: ${props => get(props, 'theme.body.color') || '#000'};
    font-family: ${props => get(props, 'theme.fonts.primary') || defaultFonts};
    font-size: ${props => get(props, 'theme.body.fontSize') || '16px'};
    font-weight: normal;
    margin: ${props => get(props, 'theme.body.margin') || '0'};
    height: 100%;
    line-height: ${props => get(props, 'theme.body.lineHeight') || '22px'};
    padding: ${props => get(props, 'theme.body.padding') || '0'};
    position: relative;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
    padding: 0;
  }

  a,
  p,
  blockquote,
  button,
  figure,
  ol,
  ul {
    font-size: ${props => get(props, 'theme.body.fontSize') || '16px'};
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }

  img {
    width: 100%;
    height: auto;
    border: 0;
  }

  iframe {
    border: 0;
  }

  select,
  input {
    border-radius: 0;
  }

  input[type='text'],
  input[type='email'] {
    appearance: none;
  }

  textarea {
    vertical-align: top;
  }
`
