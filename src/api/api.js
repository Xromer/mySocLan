import * as axios from 'axios';


const instance = axios.create({

    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6dccf08d-60e1-49b6-9666-8fa7a64269ee"
    }
})

export const usersAPI = {
    getUsersAx(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followAx(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowAx(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }

}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    }

}

