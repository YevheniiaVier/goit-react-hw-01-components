import styled from 'styled-components';

export const ProfileCard = styled.div`
  grid-area: profile;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.accent};
  width: 250px;
  height: 380px;
  display: grid;
  grid-template-rows: 1fr 65px;
  border: ${p => `2px solid ${p.theme.colors.secondary}`};
  transition: background-color 300ms 100ms;
  :hover {
    background-color: ${p => p.theme.colors.background};
    img {
      transform: scale(1.03);
    }
  }
`;
export const CardInfo = styled.div`
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  border-bottom: ${p => `2px solid ${p.theme.colors.secondary}`};
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[5]}px;
`;
export const Tag = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
`;
export const Location = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.secondary};
`;

export const Avatar = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  border-radius: ${p => p.theme.radii.round};
  overflow: hidden;
  margin: 0 auto;
  width: 80%;
  height: auto;
  display: block;
  background-color: ${p => p.theme.colors.grey};
  transition: transform 300ms 100ms;
`;

export const PopularityBox = styled.ul`
  background-color: ${p => p.theme.colors.grey};
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.heading};
  columns: 3 50px;
  column-gap: ${p => p.theme.space[3]}px;
  column-rule: ${p => `2px solid ${p.theme.colors.secondary}`};
`;
export const PopularityItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const Label = styled.span`
  color: ${p => p.theme.colors.secondary};
  font-family: ${p => p.theme.fonts.heading};
`;
export const Quantity = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
