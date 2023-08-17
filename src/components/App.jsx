import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json"
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
