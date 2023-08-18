import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import { Friender } from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
    <Friender>
      {friends.map(({id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </Friender>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
