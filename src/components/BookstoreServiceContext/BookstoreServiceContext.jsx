import React from 'react';
const { Provider: BooktoreServiceProvider, 
    Consumer: BookStoreServiceConsumer} = React.createContext();

export { BookStoreServiceConsumer, BooktoreServiceProvider };