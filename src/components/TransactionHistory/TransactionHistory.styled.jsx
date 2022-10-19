import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 300px;
  margin: 20px;
  border-collapse: collapse;
  border: 2px solid grey;

  text-align: center;
  font-size: 14px;
  color: #5f6366;

  box-shadow: 3px 3px 20px #d6d6d6;

  th,
  td {
    border: 1px solid #e4e4e4;
    padding: 15px;
  }
`;

export const TableHeader = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: white;

  th {
    width: 33.3333%;
  }
`;

export const TableBody = styled.tbody`
  td {
    border: 1px solid white;
  }
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;
