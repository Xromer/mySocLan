import React from 'react';
import styles from './users.module.css'

const Users = (props) => {

    return <div> {

        props.users.map(u => <div key={u.id} className={styles.cont}>
            <div className={styles.photo}>
                <img src={u.photoURL} />
            </div>
            <div className={styles.but}>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>follow</button>
                    : <button onClick={() => { props.follow(u.id) }}>unfollow</button>}
            </div>
            <div className={styles.data}>
                <div className={styles.name}>{u.fullName}</div>
                <div className={styles.status}>{u.status}</div>
                <div className={styles.country}>{u.location.country}</div>
                <div className={styles.city}>{u.location.city}</div>
            </div>

        </div>)
    }</div>

}

export default Users;