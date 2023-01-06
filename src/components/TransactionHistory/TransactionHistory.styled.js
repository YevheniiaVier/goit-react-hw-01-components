import styled from 'styled-components';

export const Transactions = styled.table`
  grid-area: transactions;
  border-collapse: collapse;
  width: 100%;
  font-family: ${p => p.theme.fonts.heading};
`;
export const TableTitle = styled.thead`
  color: 'orange';
`;

export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${p => p.theme.colors.grey};
  }
  :hover {
    background-color: ${p => p.theme.colors.accentLight};
  }
`;

export const TableHeading = styled.th`
  border: ${p => `${p.theme.borders.normal}${p.theme.colors.secondary}`};
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.background};
`;

export const TableBody = styled.tbody`
  color: 'red';
`;

export const TableData = styled.td`
  border: ${p => `${p.theme.borders.normal}${p.theme.colors.secondary}`};
  text-transform: capitalize;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  color: ${p => p.theme.colors.secondary};
`;
