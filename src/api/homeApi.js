import { post } from './axiosInstance';

export const getListBlock = (data) => {
    return post('', data)
}