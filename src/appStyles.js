import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const AppStyle = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export {
  AppStyle,
  GlobalStyles,
  Header,
};
