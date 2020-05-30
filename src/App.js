import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {
  Calculator, Screen
} from './components/Styled';
import Buttons from './components/Buttons';

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
    <div className="App">
      <Global />
      <Calculator>
        <Screen>
          <div></div>
          <div id="display">0</div>
        </Screen>
        <Buttons />
      </Calculator>
    </div>
  );
}

export default App;
