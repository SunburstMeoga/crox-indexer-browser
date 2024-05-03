import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBrc20TransferDetails, getHashDetails } from '@/api/homeApi'
import DataCard from './dataCard';
const TransferDataDetails = () => {
    const { btctxId } = useParams()

    let [cardList, setCardList] = useState([{ title: 'Transaction hours', quantities: 'null' },
    { title: 'Number Of Transaction', quantities: 'null' },
    { title: 'Execution status', quantities: 'null', cardStatus: 'null' }])
    let [inforList, getInforList] = useState([{
        title: 'Block number:', content: 'null'
    }, {
        title: 'Block height:', content: 'null'
    }, {
        title: 'Block timeslot:', content: 'null'
    }, {
        title: 'Force:', content: 'null'
    }, {
        title: 'Gas price:', content: 'null'
    }, {
        title: 'Gas limit:', content: 'null'
    }, {
        title: 'Nonce:', content: 'null'
    }, {
        title: 'Transation type:', content: 'null'
    }])
    let [detailsCard, getDetailsCard] = useState([{
        title: 'TxID:', content: 'null'
    }, {
        title: 'From:', content: 'null'
    }, {
        title: 'To:', content: 'null'
    }, {
        title: 'Date:', content: 'null'
    }])
    let [hashInfo, getHashInfo] = useState({})

    useEffect(() => {
        getTransferDetails()
        getTransHashDetails()
    }, [])
    const getTransferDetails = async () => {
        // let detailsInfo = await getBrc20TransferDetails({ "jsonrpc": "2.0", "method": "gettransaction", "params": { "txid": id, "fork": "202" }, "id": 83 })
        // console.log(detailsInfo)
    }
    const getTransHashDetails = async () => {
        let res = await getHashDetails({ "jsonrpc": "2.0", "method": "getbtctxinfo", "params": { "btctxid": btctxId }, "id": 83 })
        let { brc20count, btcblockheight, btctxid } = res.data.result
        setCardList(cardList = [
            { title: 'Transaction hours', quantities: 'null' },
            { title: 'Number Of Transaction', quantities: brc20count },
            { title: 'Execution status', quantities: 'null', cardStatus: 'success' }
        ])
        getInforList(inforList = [{
            title: 'Block number:', content: 'null'
        }, {
            title: 'Block height:', content: btcblockheight
        }, {
            title: 'Block timeslot:', content: 'null'
        }, {
            title: 'Force:', content: 'null'
        }, {
            title: 'Gas price:', content: 'null'
        }, {
            title: 'Gas limit:', content: 'null'
        }, {
            title: 'Nonce:', content: 'null'
        }, {
            title: 'Transation type:', content: 'null'
        }])
        getDetailsCard(detailsCard = [{
            title: 'TxID:', content: btctxid
        }, {
            title: 'From:', content: 'null'
        }, {
            title: 'To:', content: 'null'
        }, {
            title: 'Date:', content: 'null'
        }])
        getHashInfo(hashInfo = res.data.result)
        console.log(res)
    }
    return (
        <div>
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='pl-6-9 text-6-0 text-module-title w-full font-medium mt-6-6'>
                    Trade
                </div>
                <div className='pl-6-9 text-6-0 text-module-title w-full font-bold flex justify-start items-baseline'>
                    <div className='text-12-5 font-bold'>Hash</div>
                    <div className='pl-0-8 text-2-0 font-medium'>{getHashInfo.txtime}</div>
                </div>
                <div className='w-full px-6-9 flex justify-between items-center mb-2'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="w-34-4 py-2-6 pl-2-9 mb-1-3  rounded-2xl overflow-hidden e cursor-pointer bg-card-green ">
                            <DataCard title={item.title} quantities={item.quantities} cardStatus={item.cardStatus} />
                        </div>
                    })}
                </div>
                <div className='flex justify-between items-center w-full px-6-9 mb-5-6'>
                    <div className='py-2-0 px-3-4 bg-module-title rounded-2xl w-57-0'>
                        {inforList.map((item, index) => {
                            return <div key={index} className={['h-4-9 w-full pl-1-1 flex justify-start items-center', index != inforList.length - 1 ? 'border-b  border-trans-gray' : ''].join(' ')}>
                                <div className='font-semibold text-select-color w-22-8'>{item.title}</div>
                                <div className='font-medium text-white pl-2-5 h-full flex justify-start items-center border-l border-trans-gray'>{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        {detailsCard.map((item, index) => {
                            return <div key={index} className={['px-2-8 py-2-1 bg-module-title w-47-0 h-10-0 rounded-2xl', index !== detailsCard.length - 1 ? 'mb-1-0' : ''].join(" ")}>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='text-1-5 font-semibold text-select-color'>{item.title}</div>
                                    <div className=''>
                                        <div className='icon iconfont icon-copy2 text-primary-green cursor-pointer' style={{ fontSize: '2.4rem' }}></div>
                                    </div>
                                </div>
                                <div className='w-full text-white mt-1-2 break-words text-1-5 font-medium'>
                                    {item.content}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransferDataDetails
