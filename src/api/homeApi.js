import { post } from './axiosInstance';

export const getListBlock = (data) => {
    return post('', data)
}

export const getListTransactions = (data) => {
    return post('', data)
}