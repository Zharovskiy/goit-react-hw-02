import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendList)}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
