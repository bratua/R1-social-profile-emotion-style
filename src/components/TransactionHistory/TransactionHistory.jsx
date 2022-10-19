import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TransactionTableHeader } from './TableHeader';
import { TransactionTableBody } from './TableBody';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TransactionTableHeader />
      <TransactionTableBody transactions={transactions} />
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
