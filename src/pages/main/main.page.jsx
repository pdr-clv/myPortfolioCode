import React from 'react';

import HomePage from '../home/home.page';
import AboutPage from '../about/about.page';
import SkillsPage from '../skills/skills.page';
import MyProjectsPage from '../myprojects/myprojects.page';

const MainPage = () =>(
  <div>
  <div id='main'><HomePage/></div>  
  <div id='about'><AboutPage/></div>
  <div id='skills'><SkillsPage/></div>
  <div id='myprojects'><MyProjectsPage /></div>
  </div>
);

export default MainPage;


