import React from 'react';

const globalState = React.createContext({});

export const Provider = globalState.Provider;
export const Consumer = globalState.Consumer;

export default globalState;