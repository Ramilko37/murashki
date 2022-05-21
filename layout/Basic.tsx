import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  }

  body {
    padding: 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  h1,h2,h3,h4,h5,h6,body {
    font-family: 'Viaoda Libre', cursive;
  }
  
`

const BasicLayout = ({ children }: { children: any }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}

export default BasicLayout;
