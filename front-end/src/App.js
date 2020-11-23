import React from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import { Route, Switch } from 'react-router-dom';

import MainPage from './pages/main/main.page';
import AboutPage from './pages/about/about.page';
import SkillsPage from './pages/skills/skills.page';
import FooterComponent from './components/footer/footer.component';
import ContactPage from './pages/contactme/contact-me';
import { ToastProvider } from 'react-toast-notifications';


import { AppStyles} from './App.styles';


const App = () => {

  return (
    
    <AppStyles >
      <NavBar />
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route exact path='/about' component={ AboutPage } />
        <Route exact path='/skills' component={ SkillsPage } />
        <ToastProvider 
          placement="top-center"
          autoDismissTimeout={10000}
        ><Route exact path='/contactme' component={ ContactPage } /></ToastProvider>
      </Switch>
      <FooterComponent />
    </AppStyles>
    
  );
}

export default App;
