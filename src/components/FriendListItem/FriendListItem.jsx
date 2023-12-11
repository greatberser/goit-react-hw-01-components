import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={css.friendItem}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
      </li>
    );
};

export default FriendListItem;