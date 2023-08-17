import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
