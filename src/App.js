import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component';

import MainPage from './pages/main/main.page';


import { AppStyles} from './App.styles';


const App = () => {
  return (
    
    <AppStyles >
      <NavBar />
      <MainPage />
    </AppStyles>
    
  );
}

export default App;
