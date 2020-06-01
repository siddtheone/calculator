import React from 'react';
import globalState from '../../store';

export default function Eq() {
  const [{toCalc}] = React.useContext(globalState);
  return (
    <div id="eq">
      {toCalc.join(' ') || 0}
    </div>
  )
}
