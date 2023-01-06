import styled from 'styled-components';

export const Friends = styled.ul`
  grid-area: friends;
  display: grid;
  width: 300px;
  gap: ${p => p.theme.space[3]}px;
`;
