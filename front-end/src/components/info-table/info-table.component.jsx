import React,{useEffect, useState} from 'react';

import { TableStyles } from './info-table.styles';

const InfoTable = () => {

  const [age,setAge] = useState(0);

  useEffect (()=>{
    const dateToday = getAge();
    setAge(dateToday);
  },[]);

  const getAge = () => {
  
    const birthday = new Date(1977, 4, 19);
    const diff_ms = Date.now() - birthday.getTime();
    const age_dt = new Date(diff_ms); 

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <TableStyles>
      <caption><img src='https://res.cloudinary.com/dg5pircnj/image/upload/v1597479069/PortfolioApp/profile-picture_wneqqc.jpg' alt='' />Pedro Calvo Herranz</caption>
      <tbody>
        <tr>
          <td>Address</td>
          <td>Planernaya Ulitsa. Moscow(Russia)</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>{age} years</td>
        </tr>
        <tr>
          <td>Birth</td>
          <td>19/05/1977 Valencia(Spain)</td>
        </tr>
        <tr>
          <td>Nationality</td>
          <td>Spanish</td>
        </tr>
        <tr>
          <td>Work permit</td>
          <td>Europe, Moscow</td>
        </tr>
        <tr>
          <td>Degree</td>
          <td>Physics(2000)</td>
        </tr>
        <tr>
          <td>MBA</td>
          <td>Logistics(2005)</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>Spanish, English, Russian</td>
        </tr>
        <tr>
          <td>IT courses</td>
          <td>HTML(2006) Access(2008) mySQL/Oracle(2013) React(2020) Node.js+MongoDB(2020) </td>
        </tr>
      </tbody>
    </TableStyles>
  );
};

export default InfoTable;
