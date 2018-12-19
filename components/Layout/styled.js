import styled, { css, createGlobalStyle } from 'styled-components'

const Layout = styled.div`
  border: 1px solid black;
  padding: 0.5rem;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default Layout