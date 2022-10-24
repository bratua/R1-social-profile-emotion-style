import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TransactionTableHeader } from './TableHeader';
import { TransactionTableBody } from './TableBody';
import Box from 'components/Box/Box';

export function TransactionHistory({ transactions }) {
  return (
    <Box
      as="table"
      tableLayout="fixed"
      m={7}
      color="thirdTextColor"
      border="normal"
      // border-collapse="collapse"
      textAlign="center"
      fontSize={2}
      boxShadow="mainShadow"
    >
      {/* <Table> */}
      <TransactionTableHeader />
      <TransactionTableBody transactions={transactions} />
      {/* </Table> */}
    </Box>
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
