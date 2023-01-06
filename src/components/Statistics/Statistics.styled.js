import styled from 'styled-components';
import { getRandomHexColor } from 'utils';

export const ProfileStatistic = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `1px solid ${p.theme.colors.secondary}`};
`;

export const StatTitle = styled.h2`
  text-transform: uppercase;
  color: ${p => p.theme.colors.secondary};
`;

export const StatList = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  width: 100%;
  height: 75px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: 1fr;

  color: ${p => p.theme.colors.white};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${getRandomHexColor};
`;

export const StatLabel = styled.span``;
export const StatPercentage = styled.span`
  margin-top: ${p => p.theme.space[3]}px;
`;
