import styled from 'styled-components';

export const Friend = styled.li`
  background-color: ${p => p.theme.colors.white};

  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  border-radius: ${p => p.theme.radii.big};
  transition: background-color 300ms 100ms;
  :hover {
    background-color: ${p => p.theme.colors.grey};
    p {
      color: ${p => p.theme.colors.accent};
    }
  }
`;
export const FriendStatus = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => {
    return p.active ? p.theme.colors.online : p.theme.colors.offline;
  }};
`;
export const FriendImg = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  width: 80px;
  height: auto;
  border: ${p => `2px solid ${p.theme.colors.accent}`};
  border-radius: ${p => p.theme.radii.big};
  background-color: ${p => {
    return p.active ? p.theme.colors.online : p.theme.colors.darkGrey;
  }};
`;
export const FriendName = styled.p`
  color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  transition: color 300ms 100ms;
`;
