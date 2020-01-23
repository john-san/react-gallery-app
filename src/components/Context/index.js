import React from 'react';

const AppContext = React.createContext();

const Provider = AppContext.Provider;
const Consumer = AppContext.Consumer;


export { AppContext, Provider, Consumer };