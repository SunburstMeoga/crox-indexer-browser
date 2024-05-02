import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBrc20TransferDetails } from '@/api/homeApi'
import DataCard from './dataCard';
const TransferDataDetails = () => {
    const { id } = useParams()
    let [cardList, setCardList] = useState([
        { title: 'Transaction hours', quantities: '2323', unit: 's' },
        { title: 'Number Of Transaction', quantities: '2323' },
        { title: 'Execution status', quantities: '2323', cardStatus: 'success' }
    ])
    let inforList = [{
        title: 'Block number:', content: 49437
    }, {
        title: 'Block height:', content: 49437
    }, {
        title: 'Block timeslot:', content: 49437
    }, {
        title: 'Force:', content: 49437
    }, {
        title: 'Gas price:', content: 49437
    }, {
        title: 'Gas limit:', content: 49437
    }, {
        title: 'Nonce:', content: 49437
    }, {
        title: 'Transation type:', content: 49437
    }]
    console.log(id)
    useEffect(() => {
        getTransferDetails()
    }, [])
    const getTransferDetails = async () => {
        let detailsInfo = await getBrc20TransferDetails({ "jsonrpc": "2.0", "method": "gettransaction", "params": { "txid": id, "fork": "202" }, "id": 83 })
        console.log(detailsInfo)
    }
    return (
        <div>
            <div className='bg-primary-green w-full flex flex-col items-center justify-start min-h-svh'>
                <div className='pl-6-9 text-6-0 text-module-title w-full font-medium mt-6-6'>
                    Trade
                </div>
                <div className='pl-6-9 text-6-0 text-module-title w-full font-bold flex justify-start items-baseline'>
                    <div className='text-12-5 font-bold'>Hash</div>
                    <div className='pl-0-8 text-2-0 font-medium'>2023-4-30 23:45:02</div>
                </div>
                <div className='w-full px-6-9 flex justify-between items-center mb-2'>
                    {cardList.map((item, index) => {
                        return <div key={index} className="w-34-4 py-2-6 pl-2-9 mb-1-3  rounded-2xl overflow-hidden e cursor-pointer bg-card-green ">
                            <DataCard title={item.title} showUnit={index === 0} quantities={item.quantities} cardStatus={item.cardStatus} />
                        </div>
                    })}
                </div>
                <div className='flex justify-between items-center w-full px-6-9 '>
                    <div className='py-2-0 px-3-4 bg-module-title rounded-2xl w-57-2'>
                        {inforList.map((item, index) => {
                            return <div className={['h-4-9 w-full pl-1-1 flex justify-start items-center', index != inforList.length - 1 ? 'border-b  border-trans-gray' : ''].join(' ')}>
                                <div className='font-semibold text-select-color w-22-8'>{item.title}</div>
                                <div className='font-medium text-white pl-2-5 h-full flex justify-start items-center border-l border-trans-gray'>{item.content}</div>
                            </div>
                        })}
                    </div>
                    <div className=''></div>
                </div>
            </div>
        </div>
    )
}

export default TransferDataDetails
