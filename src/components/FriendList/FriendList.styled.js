import styled from 'styled-components';

export const Friends = styled.ul`
  grid-area: friends;
  display: grid;
  width: 300px;
  // grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: ${p => p.theme.space[3]}px;
`;
