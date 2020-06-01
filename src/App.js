import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  Calculator, Screen
} from './components/Styled';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Eq from './components/Eq';
import ErrorBoundary from './components/ErrorBoundary';
import {Provider} from './store';
import reducer, {initialState} from './reducer';

const Global = createGlobalStyle`
:root {
  --screenBG: linear-gradient(to right, #ffb347 0%, #ffcc33 51%, #ffb347 100%);
  --screen: white;
  --buttonsBG: linear-gradient(to right, #41295a 0%, #2F0743 51%, #41295a 100%);
  --buttonClearBG: linear-gradient(to right, #f85032 0%, #e73827 51%, #f85032 100%);
  --buttonEqualBG: linear-gradient(to right, #141E30 0%, #243B55 51%, #141E30 100%);
  --buttonsText: white;
}
*, *::after, *::before {
  box-sizing: border-box;
}
body {
  font-family: 'Atomic Age', cursive;
  font-size: 30px;
}
`;

function App() {
  return (
    <Provider value={React.useReducer(reducer, initialState)}>
      <ErrorBoundary>
        <div className="App">
          <Global />
          <Calculator>
            <Screen>
              <Eq />
              <Display />
            </Screen>
            <Buttons />
          </Calculator>
        </div>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
