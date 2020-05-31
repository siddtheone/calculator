import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  Calculator, Screen
} from './components/Styled';
import Buttons from './components/Buttons';
import Display from './components/Display';
import Eq from './components/Eq';
import {Provider} from './store';
import reducer, {initialState} from './reducer';

const Global = createGlobalStyle`
:root {
  --screenBG: black;
  --screen: lightgreen;
  --buttonsBG: black;
  --buttonClearBG: darkred;
  --buttonEqualBG: darkblue;
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
    </Provider>
  );
}

export default App;
