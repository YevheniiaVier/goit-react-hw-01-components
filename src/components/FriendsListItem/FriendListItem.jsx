import PropTypes from 'prop-types';
import defaultUserImg from 'default.png';

import {
  Friend,
  FriendStatus,
  FriendName,
  FriendImg,
} from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar = defaultUserImg, isOnline }) => {
  return (
    <Friend>
      <FriendStatus active={isOnline}></FriendStatus>
      <FriendImg active={isOnline} src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </Friend>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
