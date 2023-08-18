import PropTypes from "prop-types";
import { FriendItemer } from "./FriendListItem.styled";


export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendItemer isOnline = {isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
    </FriendItemer>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
