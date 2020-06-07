const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export const followAC = (id) => ({ type: FOLLOW, usersId: id });

export const unfollowAC = (id) => ({ type: UNFOLLOW, usersId: id });

export const setUsersAC = (users) => ({ type: SET_USERS, usersId: users });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setUsersTotalCountAC = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount });


let initialState = {
    users: [],
    pageSize: 100, //количество пользователей на странице
    totalUsersCount: 0, //общее количество пользователей на сервере
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return { ...state, users: [...action.usersId] }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        default: return state;

    }

}

export default usersReducer;

