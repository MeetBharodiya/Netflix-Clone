import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { ListContextProvider } from './context/listContext/ListContext';
// import { ListContextProvider } from './context/listContext/movieContext/ListContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
// import { ListContextProvider } from './context/ListContext/ListContext';
// import {AuthContextProvider }from './context/authContext/AuthContext'



ReactDOM.render(
  <React.StrictMode>
   <AuthContextProvider>
   <MovieContextProvider>
  
<ListContextProvider>

    <App />
</ListContextProvider>

  
  

   </MovieContextProvider>
    </AuthContextProvider> 
  
  </React.StrictMode>,
  document.getElementById('root')
);
