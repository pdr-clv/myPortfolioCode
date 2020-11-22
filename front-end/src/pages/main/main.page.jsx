import React, { useEffect} from 'react';

import HomePage from '../home/home.page';
import MyProjectsPage from '../myprojects/myprojects.page';

const MainPage = () =>{
  //This is for footer links, if we click on them, automatically will scrollTo top.
  useEffect(() => {
    window.scrollTo(0, 0)
  });
  return(
  <div>
  <HomePage/>
  <MyProjectsPage />
  </div>
)};

export default MainPage;


