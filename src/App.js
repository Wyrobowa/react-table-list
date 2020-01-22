import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import Companies from './containers/companies/Companies';

// Styles
import * as Styled from './appStyles';

function App() {
  return (
    <Router>
      <Styled.AppStyle>
        <Styled.GlobalStyles />
        <Styled.Header>
          <p>Test React App</p>
        </Styled.Header>
        <Route exact path="/" component={Companies} />
      </Styled.AppStyle>
    </Router>
  );
}

export default App;
