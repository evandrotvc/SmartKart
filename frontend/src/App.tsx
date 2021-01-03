import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyles";
import Routes from './routes'

const App : React.FC = () => {
  return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes/>
    </BrowserRouter>
  );
}

export default App;
