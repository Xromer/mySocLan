import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import Users from './users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
//import { usersAPI } from '../../api/api';



class UsersContainer extends React.Component {



    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);//thunk
    }

    onPageChanged = (pageNumber) => {
        //this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);//thunk
    }


    render() {

        return <Users
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
            isAuth={this.props.isAuth}
        />
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,

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




/*let AuthRedirectComponent = withAuthRedirect(UsersContainer);
//vmesto mapDispatchToProps bil peredan obekt s metodami
export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
})(AuthRedirectComponent);*/ //COMPOSE

export default compose(
    connect(mapStateToProps,
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
    //withAuthRedirect
)(UsersContainer)