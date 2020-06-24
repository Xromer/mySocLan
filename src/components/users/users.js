import React from 'react';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };




    return <div>

        <div>

            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p + ' '}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id} className={styles.cont}>
                <div className={styles.photo}>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"} />
                    </NavLink>
                </div>
                <div className={styles.but}>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            // props.toggleFollowingProgress(true, u.id);
                            props.unfollow(u.id);
                            /*usersAPI.unfollowAx(u.id).then(data => {//axios zapros vinisen v api
                                if (data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);;
                            });*/

                        }}>Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            // props.toggleFollowingProgress(true, u.id);
                            props.follow(u.id);
                            /*usersAPI.followAx(u.id).then(data => {//axios zapros vinisen v api
                                if (data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });*/

                        }}>Follow</button>}
                </div>
                <div className={styles.data}>

                    <div className={styles.name}>{u.name}</div>
                    <div className={styles.status}>{u.status}</div>
                    <div className={styles.country}>"u.location.country"</div>
                    <div className={styles.city}>"u.location.city"</div>
                </div>

            </div>)
        }
    </div>
}


export default Users;