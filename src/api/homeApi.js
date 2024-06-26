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
//区块数据详情
export const getBlockDetails = (data) => {
    return post('', data)
}
//交易哈希详情
export const getHashDetails = (data) => {
    return post('', data)
}
//首页交易数据统计图表
export const homeStatisticsData = (data) => {
    return post('', data)
} 
//查看交易数量
export const getbrc20syncinfo = (data) => {
    return post('', data)
}
//铭文详情
export const insTionDetails = (data) => {
    return post('', data)
}
//btc区块的brc20交易
export const btcBlockBrc20Trans = (data) => {
    return post('', data)
}
//btc交易ID查brc20交易
export const btcInfo = (data) => {
    return post('', data)
}