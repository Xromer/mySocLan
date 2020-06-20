import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './users';
import { getUsers } from '../../api/api';



class UsersContainer extends React.Component {



    componentDidMount() {

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);

        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
        });
    }


    render() {

        return <Users
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
    }
}

//export default UsersContainer;

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            debugger;
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}*/

//vmesto mapDispatchToProps bil peredan obekt s metodami
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount })(UsersContainer);