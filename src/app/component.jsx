import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './header';
import Content from './content';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  )
}

export default App;
