import { TableHeader } from './TransactionHistory.styled';

export function TransactionTableHeader() {
  return (
    <TableHeader>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHeader>
  );
}
