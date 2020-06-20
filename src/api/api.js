import * as axios from 'axios';


const instance = axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6dccf08d-60e1-49b6-9666-8fa7a64269ee"
    }
})


export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}


export const followAx = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollowAx = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}