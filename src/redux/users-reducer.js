const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (id) => ({ type: FOLLOW, usersId: id });

export const unfollowAC = (id) => ({ type: UNFOLLOW, usersId: id });

export const setUsersAC = (users) => ({ type: SET_USERS, usersId: users });

let initialState = {
    users: [
        {
            id: 1, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThi-ZLw9Hj4uJHuFK3OwOlVvv4upLa1t1Ir0gTC7YFt8tjYsnA&usqp=CAU',
            followed: true, fullName: 'Igor T', status: 'I am bast', location: { country: 'Belarus', city: 'Minsk' }
        },
        {
            id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThi-ZLw9Hj4uJHuFK3OwOlVvv4upLa1t1Ir0gTC7YFt8tjYsnA&usqp=CAU',
            followed: false, fullName: 'Misha G', status: 'I am bast', location: { country: 'Ukrain', city: 'Kiev' }
        },
        {
            id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThi-ZLw9Hj4uJHuFK3OwOlVvv4upLa1t1Ir0gTC7YFt8tjYsnA&usqp=CAU',
            followed: false, fullName: 'Ivan T', status: 'I am bast', location: { country: 'USA', city: 'NewYork' }
        },
        {
            id: 4, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThi-ZLw9Hj4uJHuFK3OwOlVvv4upLa1t1Ir0gTC7YFt8tjYsnA&usqp=CAU',
            followed: true, fullName: 'Kira O', status: 'I am bast', location: { country: 'Russia', city: 'Moskov' }
        }
    ]


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
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] }

        default: return state;

    }

}

export default usersReducer;

