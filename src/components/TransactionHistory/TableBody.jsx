import { TableBody, TableRow } from './TransactionHistory.styled';

export function TransactionTableBody({ transactions }) {
  return (
    <TableBody>
      {transactions.map(transaction => {
        const { id, type, amount, currency } = transaction;
        return (
          <TableRow key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
