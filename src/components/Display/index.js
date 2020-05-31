import React from 'react';
import globalState from '../../store';

export default function Screen() {
  const [{screen}] = React.useContext(globalState);
  return (
    <div id="display">
      {screen}
    </div>
  )
}
