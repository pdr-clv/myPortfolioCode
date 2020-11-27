const skillsList = [{ 
  name: 'FrontEnd',
  skills: [{iconFontawesome: 'fab fa-html5', name: 'Html'},
    {iconFontawesome: 'fab fa-css3-alt', name: 'Css', subSkills:['Bootstrap','Responsive', 'Sass']},
    {iconFontawesome: 'fab fa-js-square', name: 'Js', subSkills:['ES6','Promises','API fetch']},
    {name: 'React', iconFontawesome: 'fab fa-react', subSkills:['Redux','Hooks','Jest','Styled-components']},
    {name: 'jQuery', subSkills:['Ajax Request']}]
  },
  {
    name: 'BackEnd',
    skills: [{iconFontawesome:'fab fa-node', name: 'node', subSkills:['Express', 'Mongoose', 'npm Packages','NodeMailer','Pug']},
      {name: 'MongoDB', subSkills:['API','CRUD','Aggregation']},
      {name:'PHP', iconFontawesome:'fab fa-php', subSkills:['Form Validation', 'Ajax', 'FPDF', 'Reports']},
      {name:'Firebase', subSkills:['CRUD','userAuth']},
      {name: 'mySQL', subSkills:['CRUD','Aggregation']}]
  },
  {
    name: 'Other Software',
    skills: [{name: 'linux', iconFontawesome:'fab fa-linux', subSkills:['Ubuntu Server','Raspberry Pi']},
      {name:'GitHub', iconFontawesome:'fab fa-github', subSkills:['Storage', 'Deployment', 'Projects Contribution']},
      {name:'Visual Studio', subSkills:['Text editor']},
      {name: 'Heroku', subSkills:['Web Deployment']}]
  },
  {
    name: 'Microsoft',
    skills: [{iconFontawesome:'fab fa-windows', name: 'windows'},
      {name:'Visual Basic', subSkills:['Windows App', 'Reports']},
      {name:'Access', subSkills:['Access App','VBA', 'SQL Queries']},
      {iconFontawesome:'far fa-file-excel', name: 'Excel', subSkills:['VBA', 'Reports']}]
  }];

  export default skillsList;