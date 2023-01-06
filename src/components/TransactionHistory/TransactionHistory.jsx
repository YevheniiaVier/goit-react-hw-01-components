import PropTypes from 'prop-types';
import {
  Transactions,
  TableBody,
  TableData,
  TableHeading,
  TableRow,
  TableTitle,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TableTitle>
        <TableRow>
          <TableHeading>Type</TableHeading>
          <TableHeading>Amount</TableHeading>
          <TableHeading>Currency</TableHeading>
        </TableRow>
      </TableTitle>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Transactions>
  );
};

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
