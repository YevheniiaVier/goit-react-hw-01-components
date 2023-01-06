import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${p => p.theme.colors.muted};
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[6]}px; ;
`;
