import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '1e60f3eb-a2f7-4f18-b8e9-f6ea4b15f04b'
    }
})

export const UsersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    followRequest(userID){
        return instance.post(`follow/${userID}`)
    },
    unfollowRequest(userID){
        return instance.delete(`follow/${userID}`)
    }
}


export const ProfileAPI ={
    getProfile(userID){
        return instance.get(`profile/${userID}`)
    }
}


export const AuthAPI = {
    authMe(){
        return instance.get(`auth/me`);
    }
}


