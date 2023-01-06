import PropTypes from 'prop-types';
import defaultUserImg from 'default.png';

import {
  ProfileCard,
  CardInfo,
  Name,
  Tag,
  Location,
  Avatar,
  PopularityBox,
  PopularityItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar = defaultUserImg,
  stats,
}) => {
  return (
    <ProfileCard>
      <CardInfo>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </CardInfo>

      <PopularityBox>
        <PopularityItem>
          <Label>Followers</Label>
          <Quantity>
            {new Intl.NumberFormat('en-IN').format(stats.followers)}
          </Quantity>
        </PopularityItem>
        <PopularityItem>
          <Label>Views</Label>
          <Quantity>
            {new Intl.NumberFormat('en-IN').format(stats.views)}
          </Quantity>
        </PopularityItem>
        <PopularityItem>
          <Label>Likes</Label>
          <Quantity>
            {new Intl.NumberFormat('en-IN').format(stats.likes)}
          </Quantity>
        </PopularityItem>
      </PopularityBox>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
