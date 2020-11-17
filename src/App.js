import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/main/main.page';
import AboutPage from './pages/about/about.page';
import SkillsPage from './pages/skills/skills.page';
import FooterComponent from './components/footer/footer.component';


import { AppStyles} from './App.styles';


const App = () => {

  return (
    
    <AppStyles >
      <NavBar />
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/about' component={ AboutPage } />
        <Route exact path='/skills' component={ SkillsPage } />
      </Switch>
      <FooterComponent />
    </AppStyles>
    
  );
}

export default App;
