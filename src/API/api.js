import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "b0bb4b4f-ec7e-42b9-84e1-d84fa454230a"
    }
})

const userAPI = {
    getUsers(pageCurrent, pageElements) {
        return instance.get(`users?page=${pageCurrent}&count=${pageElements}`)
                    .then(response => response.data)
    },
    getUser(userId) {
        return instance.get(`profile/${userId}`)
                    .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {})
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
    autoLogin() {
        return instance.get(`auth/me`)
            .then((response) => {
                if (response.status < 400 && response.data.resultCode == 0) {
                    return instance.get(`profile/${response.data.data.id}`) 
                } else {
                    return undefined
                }       
        })
    }
}

export const authAPI = {
    logIn(info) {
        return instance.post(`auth/login`, info)
    },
    logOut() {
        return instance.delete(`auth/login`)
    }
}

export const statusAPI = {
    getUserStatus(id) {
        return instance.get(`/profile/status/${id}`)
    },
    putUserStatus(status) {
        return instance.put(`/profile/status`, {status})
    }
}

export default userAPI