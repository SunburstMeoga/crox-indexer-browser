import { post } from './axiosInstance';

//区块列表
export const getListBlock = (data) => {
    return post('', data)
}

//brc20交易列表
export const getListTransactions = (data) => {
    return post('', data)
}

//brc20列表
export const getBrc20List = (data) => {
    return post('', data)
}

//brc20详情
export const getBrc20Details = (data) => {
    return post('', data)
}
//brc20交易列表
export const getBrc20TransList = (data) => {
    return post('', data)
}

//brc20持有量列表
export const getBrc20HolderList = (data) => {
    return post('', data)
}

//查询brc20交易数据详情
export const getBrc20TransferDetails = (data) => {
    return post('', data)
}