import React from 'react'
import { notification } from "antd";
// const Context = React.createContext({
//     name: 'Default',
// });
const TransactionsCard = ({ detailsInfo }) => {
    const [api, contextHolder] = notification.useNotification();
    const handleCopyText = (value) => {
        // console.log(value)
        api['success']({
            message: '已复制',
            description:
                `已将 ${value} 添加至粘贴板`,
        });
    }
    return (
        <div>
            {contextHolder}
            <div className='pl-6 py-3'>
                <div className='flex justify-start items-center'>
                    <div className='text-title-green pr-12 pt-2'>
                        <div className='text-5xl font-bold mb-8'>
                            Transactions
                        </div>
                        <div className='flex justify-start items-baseline'>
                            <div className='pop-bold text-6xl' style={{ fontSize: '170px' }}>10</div>
                            <div className='flex justify-start items-baseline font-bold text-3xl'>(5<div className='text-base pl-1.5'>brc20</div>)</div>
                        </div>
                    </div>
                    <div className='border-l border-line-transction flex-1 text-xl'>
                        {detailsInfo.map((item, index) => {
                            return <div key={index}
                                className={['flex justify-start items-center', index !== detailsInfo.length - 1 ? "border-b border-line-transction" : ""].join(" ")}>
                                <div className='pl-4 py-3 w-80 font-bold text-trans-gray border-r border-line-transction'>{item.title}</div>
                                <div className='flex justify-start items-end'>
                                    <div className='pl-4 text-white'>{item.content}</div>
                                    {item.canCopy && <div onClick={() => handleCopyText(item.content)} className='text-title-green ml-12 cursor-pointer'>
                                        <div className='icon iconfont icon-copy2' style={{ fontSize: '22px' }}></div>
                                    </div>}
                                </div>

                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsCard
