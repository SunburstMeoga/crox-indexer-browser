import React from 'react'
import { notification } from "antd";
// const Context = React.createContext({
//     name: 'Default',
// });
const TransactionsCard = ({ detailsInfo,transCount }) => {
    const [api, contextHolder] = notification.useNotification();
    const handleCopyText = async (value) => {
        // console.log(value)
        try {
            await navigator.clipboard.writeText(value);
            console.log('文本已成功复制到剪贴板');
            api['success']({
              message: '已复制',
              description:
                `已将 ${value} 添加至粘贴板`,
            });
          } catch (error) {
            console.error('复制文本失败:', error);
          }
    }
    return (
        <div>
            {contextHolder}
            <div className='pl-3-3 py-1-1 overflow-hidden xl:rounded-2xl bg-card-black'>
                <div className='xl:flex justify-start items-center'>
                    <div className='text-title-green pr-2-9 pt-1-5'>
                        <div className='text-4-0 font-medium mb-1-0 '>
                            Transactions
                        </div>
                        <div className='flex justify-start items-baseline'>
                            <div className='text-12-5 font-bold' >{ transCount.count}</div>
                            <div className='flex justify-start items-baseline font-medium text-3-2'>({transCount.brc20Count }<div className='text-1-5 pl-0-5'>brc20</div>)</div>
                        </div>
                    </div>
                    <div className='border-l border-line-transction flex-1 font-bold'>
                        {detailsInfo.map((item, index) => {
                            return <div key={index}
                                className={['flex justify-start items-center  h-4-9 text-1-5', index !== detailsInfo.length - 1 ? "border-b border-line-transction" : ""].join(" ")}>
                                <div className='pl-1-4 text-trans-gray border-r border-line-transction w-21-3 h-4-9 flex items-center'>{item.title}</div>
                                <div className='flex justify-start items-end xl:items-center'>
                                    <div className='pl-1-4 text-white font-medium text-wrap break-words xl:w-40-0 '>{item.content}</div>
                                    {item.canCopy && <div onClick={() => handleCopyText(item.content)} className='text-title-green ml-7-8 cursor-pointer'>
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
