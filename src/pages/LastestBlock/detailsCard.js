import React from 'react'
import { notification } from "antd";

const DetailsCard = ({ itemContent, hash }) => {
    const detailsItem = [
        { title: 'Transaction Hash:', content: hash, isLink: true, },
        { title: 'From:', content: itemContent.from, canCopy: true },
        { title: 'To:', content: itemContent.to, canCopy: true },
        { title: 'Brc20 Quantity:', content: itemContent.amount },
        { title: 'Transaction Type:', content: itemContent.method },
        { title: 'Transaction Hour:', content: itemContent.time },

    ]
    const [api, contextHolder] = notification.useNotification();
    const handleCopyText = (value) => {
        console.log(value)
        api['success']({
            message: '已复制',
            description:
                `已将 ${value} 添加至粘贴板`,
        });
    }
    return (
        <div>
            <div className='px-1-3 pt-1-4 lg:pb-2-8 lg:pt-3-6 lg:px-2-0 xl:px-6-9 overflow-hidden lg:rounded-2xl bg-white shadow-2xl'>
                <div className='flex justify-start items-end mb-1-4'>
                    <div className='flex justify-start items-start text-title-blue '>
                        <div className='text-2-0 font-light lg:font-semibold'>#</div>
                        <div className='text-3-5 lg:text-4-0 ml-0-5 font-light lg:font-medium cursor-pointer hover:text-blue-500 hover:border-blue-500'>{itemContent.inscriptionnumber}</div>
                    </div>
                    <div className='ml-0-5 font-light lg:font-extrabold text-2-4 lg:text-3-0'>{itemContent.name}</div>
                </div>
                <div className='lg:hidden w-full h-0-1 bg-black'></div>
                <div className=''>
                    {detailsItem.map((item, index) => {
                        return <div key={index} className={['flex justify-between items-start lg:justify-start lg:items-center py-1-4 lg:py-1-0 xl:py-0-1 xl:h-3-7 text-black  border-trans-line text-1-5', index !== detailsItem.length - 1 ? 'border-b' : ''].join(" ")}>
                            <div className='w-8-3  lg:w-28-9'>{item.title}</div>
                            <div className='flex justify-start items-center w-12-6 lg:flex-1'>
                                <div className={['break-words w-12-6 lg:flex-1', item.isLink ? 'underline text-title-blue cursor-pointer hover:text-blue-500 hover:border-blue-500' : ''].join(" ")}>{item.content}</div>
                                {item.canCopy && <div onClick={() => handleCopyText(item.content)} className='text-black ml-7-8 cursor-pointer'>
                                    <div className='icon iconfont icon-copy2' style={{ fontSize: '22px' }}></div>
                                </div>}
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailsCard
