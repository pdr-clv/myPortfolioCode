import styled from 'styled-components';

const darkOrange = 'rgb(255,103,0)';


export const TableStyles = styled.table`
  margin: auto;
  font-size: 0.9em;
  border: 1px solid ${darkOrange};
  margin-bottom: 10px;
  caption {
    font-size: 1.1em;
    color: ${darkOrange};
    font-weight: bold;
    margin-bottom: 10px;
  }

  td {
    padding: 2px 4px;
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
    border: 2px solid ${darkOrange};
    margin-bottom: 5px;
  }
`;