import { usersAPI } from '../../src/api/api';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_ISFOLLOWING_PROGRESS = 'TOGGLE_ISFOLLOWING_PROGRESS';

export const followSucces = (id) => ({ type: FOLLOW, usersId: id });

export const unfollowSucces = (id) => ({ type: UNFOLLOW, usersId: id });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount });

export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_ISFOLLOWING_PROGRESS, isFetching, userId });


let initialState = {
    users: [],
    pageSize: 100, //количество пользователей на странице
    totalUsersCount: 0, //общее количество пользователей на сервере
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }




        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }

        case TOGGLE_ISFOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default: return state;

    }

}


export const getUsers = (currentPage, pageSize,) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsersAx(currentPage, pageSize).then(data => {//axios zapros vinisen v api
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));


        });

    }
}


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followAx(userId).then(data => {//axios zapros vinisen v api
            if (data.resultCode === 0) {
                dispatch(followSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowAx(userId).then(data => {//axios zapros vinisen v api
            if (data.resultCode === 0) {
                dispatch(unfollowSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId));
        });

    }
}
export default usersReducer;

