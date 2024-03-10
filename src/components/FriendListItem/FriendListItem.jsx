import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.friendListItem)}>
      <img
        className={clsx(css.friendListImg)}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={clsx(css.friendListName)}>{name}</p>
      <p
        className={clsx(css.friendListOnline, {
          [css.online]: isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
