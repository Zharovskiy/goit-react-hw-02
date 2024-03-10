import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(css.profileBox)}>
      <div className={clsx(css.profileBoxInfo)}>
        <img className={clsx(css.profileImg)} src={image} alt="User avatar" />
        <p className={clsx(css.profileName)}>{name}</p>
        <p className={clsx(css.profileTag)}>@{tag}</p>
        <p className={clsx(css.profileLocation)}>{location}</p>
      </div>
      <ul className={clsx(css.profileBottomBox)}>
        <li className={clsx(css.profileBottomItem)}>
          <span className={clsx(css.profileBottomText)}>Followers</span>
          <span className={clsx(css.profileBottomQuantity)}>{followers}</span>
        </li>
        <li className={clsx(css.profileBottomItem)}>
          <span className={clsx(css.profileBottomText)}>Views</span>
          <span className={clsx(css.profileBottomQuantity)}>{views}</span>
        </li>
        <li className={clsx(css.profileBottomItem)}>
          <span className={clsx(css.profileBottomText)}>Likes</span>
          <span className={clsx(css.profileBottomQuantity)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
