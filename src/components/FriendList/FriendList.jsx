import 'normalize.css';
import css from './FriendList.module.css'

export const FriendList = ({friends}) =>{
    return(
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <li key={id} className={css.friendItem}>
                    <span className={css.status}>{isOnline ? '🟢' : `🔴`}</span>
                    <img src={avatar} alt={name} className={css.avatar}  width="110"/>
                    <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
}

export default FriendList;