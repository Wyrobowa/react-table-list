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
    font-size: 14px;
    color: #282c34;
  }
`;

const AppStyle = styled.div`
  text-align: center;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #282c34;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #fff;
`;

export {
  AppStyle,
  GlobalStyles,
  Header,
};
