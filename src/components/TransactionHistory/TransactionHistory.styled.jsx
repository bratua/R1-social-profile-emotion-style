import styled from 'styled-components';

export const Table = styled.table`
  /* table-layout: fixed;
  width: 300px;
  margin: 20px;
  border-collapse: collapse;
  border: 2px solid grey;

  text-align: center;
  font-size: 14px;
  color: #1f3349;

  box-shadow: 3px 3px 20px #d6d6d6; */
  /* 
  th,
  td {
    border: ${p => p.theme.borders.thin};
    border-style: ${p => p.theme.borderStyles.line};
    border-color: ${p => p.theme.colors.green};
    padding: ${p => p.theme.space[7]}px;
  } */
`;

export const TableHeader = styled.thead`
  background-color: ${p => p.theme.colors.tableHeaderBackgroundColor};
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  th {
    width: 33.3333%;
    border: ${p => p.theme.borders.thin};
    border-style: ${p => p.theme.borderStyles.line};
    border-color: ${p => p.theme.colors.mainBorderColor};
    padding: ${p => p.theme.space[7]}px;
  }
`;

export const TableBody = styled.tbody`
  td {
    border: ${p => p.theme.borders.thin};
    border-style: ${p => p.theme.borderStyles.line};
    border-color: ${p => p.theme.colors.mainBorderColor};
    padding: ${p => p.theme.space[7]}px;
  }
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.tableCellMarkedBackgroundColor};
  }
`;
