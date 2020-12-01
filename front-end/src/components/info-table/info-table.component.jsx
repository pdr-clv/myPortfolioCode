import React from 'react';

import { TableStyles} from './info-table.styles';

const InfoTable = () => {
  return (
    <TableStyles>
      <caption><img src='https://res.cloudinary.com/dg5pircnj/image/upload/v1597479069/PortfolioApp/profile-picture_wneqqc.jpg' alt=''/>Pedro Calvo Herranz</caption>
      <tbody>
        <tr>
          <td>Address</td>
          <td>Planernaya Ulitsa. Moscow(Russia)</td>
        </tr>
        <tr>
          <td>Age</td>
          <td>43</td>
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
          <td>Europe Moscow</td>
        </tr>
        <tr>
          <td>Degree</td>
          <td>Physics(2000)</td>
        </tr>
        <tr>
          <td>MbA</td>
          <td>Logistics(2005)</td>
        </tr>
        <tr>
          <td>Languages</td>
          <td>Spanish, English, Russian</td>
        </tr>
        <tr>
          <td>IT courses</td>
          <td>HTML(2006) Access mySQL/Oracle React Node.js+MongoDB </td>
        </tr>
      </tbody>
    </TableStyles>
  );
};

export default InfoTable;
