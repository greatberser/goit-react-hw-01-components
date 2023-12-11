import 'normalize.css';
import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'

export const FriendList = ({friends}) =>{
    return(
        <ul className={css.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => (
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
}

export default FriendList;