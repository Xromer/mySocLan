import React from 'react';
import styles from './users.module.css'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                    <img src={u.photos.small != null ? u.photos.small : "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"} />
                </div>
                <div className={styles.but}>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                        : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
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