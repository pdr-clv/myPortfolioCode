import styled from 'styled-components';

const subColor = 'grey';
const borderColor = 'rgb(255,103,0)';


export const TableStyles = styled.table`
  font-size: 14px;
  max-width: 300px;
  border: 1px solid ${borderColor};
  caption {
    color: ${subColor};
    font-weight: bold;
    margin-bottom: 10px;
  }

  td {
    padding: 5px;
    text-align: left;
  }

  td:nth-child(1) {
    color: orange;
    font-weight: bold;
    text-align: right;
  }

  img {
    display:block;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 2px solid ${borderColor};
    margin-bottom: 5px;
  }
`;