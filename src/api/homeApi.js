import { get, post } from './axiosInstance';

export const getBRC20List = (data) => {
    return post('', data)
}