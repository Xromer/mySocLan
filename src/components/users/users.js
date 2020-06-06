import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';


class Users extends React.Component {



    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>

            <div>

                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{p + ' '}</span>
                })}

            </div>

            {
                this.props.users.map(u => <div key={u.id} className={styles.cont}>
                    <div className={styles.photo}>
                        <img src={u.photos.small != null ? u.photos.small : "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png"} />
                    </div>
                    <div className={styles.but}>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>follow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>unfollow</button>}
                    </div>
                    <div className={styles.data}>
                        <div className={styles.name}>{u.name}</div>
                        <div className={styles.status}>{u.status}</div>
                        <div className={styles.country}>"u.location.country"</div>
                        <div className={styles.city}>"u.location.city"</div>
                    </div>

                </div>)
            }</div>
    }
}

export default Users;