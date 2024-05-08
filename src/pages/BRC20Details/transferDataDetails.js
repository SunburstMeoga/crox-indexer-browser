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
        let detailsInfo = await getBrc20TransferDetails({ "jsonrpc": "2.0", "method": "gettransaction", "params": { "txid": btctxId, "fork": "202" }, "id": 83 })
        console.log(detailsInfo)
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
        console.log(hashInfo)
    }
    return (
        <div>
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='pl-1-0 lg:pl-6-9 text-2-0 lg:text-6-0 text-module-title w-full font-medium mt-2-0 lg:mt-6-6 mb-1-0 lg:mb-auto'>
                    Trade
                </div>
                <div className='pl-1-0 lg:pl-6-9 text-1-0 lg:text-6-0 text-module-title w-full font-bold lg:flex justify-start items-baseline'>
                    <div className='text-4-0 lg:text-12-5 font-bold'>HAH</div>
                    <div className='lg:pl-0-8 lg:text-2-0 text-1-0 font-medium'>{hashInfo.txtime}</div>
                </div>
                <div className='w-full px-1-0 lg:px-6-9 lg:flex justify-between items-center mt-1-0 lg:mt-auto'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="lg:w-34-4 py-2-6 pl-2-9 mb-1-3  rounded-2xl overflow-hidden e cursor-pointer bg-card-green ">
                            <DataCard title={item.title} quantities={item.quantities} cardStatus={item.cardStatus} />
                        </div>
                    })}
                </div>
                <div className='lg:flex justify-between items-center w-full lg:px-6-9 lg:mb-5-6'>
                    <div className='lg:py-2-0 lg:px-3-4 bg-module-title lg:rounded-2xl w-full mb-0-4 lg:mb-auto lg:w-57-0'>
                        {inforList.map((item, index) => {
                            return <div key={index} className={['h-5-2 lg:h-4-9 lg:w-full pl-1-1 flex justify-start items-center', index != inforList.length - 1 ? 'border-b  border-trans-gray' : ''].join(' ')}>
                                <div className='font-semibold text-select-color w-9-9 lg:w-22-8'>{item.title}</div>
                                <div className='font-medium text-white pl-2-5 h-full flex justify-start items-center border-l border-trans-gray'>{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className='flex flex-col justify-between items-center'>
                        {detailsCard.map((item, index) => {
                            return <div key={index} className={['px-2-0 py-1-6 lg:px-2-8 lg:py-2-1 bg-module-title w-full lg:w-47-0 h-11-0 lg:h-10-0 lg:rounded-2xl', index !== detailsCard.length - 1 ? 'mb-0-4 lg:mb-1-0' : ''].join(" ")}>
                                <div className='flex justify-between items-center w-full'>
                                    <div className='text-1-0 lg:text-1-5 font-semibold text-select-color'>{item.title}</div>
                                    <div className=''>
                                        <div className='icon iconfont icon-copy2 text-primary-green cursor-pointer' style={{ fontSize: '2rem' }}></div>
                                    </div>
                                </div>
                                <div className='w-17-3 lg:w-full text-white mt-1-2 break-words text-1-0 lg:text-1-5 font-medium'>
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
