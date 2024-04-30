import React from 'react'
import { FilterAddress } from '../utils/format'
import { notification } from "antd";
const Context = React.createContext({
  name: 'Default',
});
const DataTable = ({ titleColumns, dataColumns }) => {
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
      {contextHolder}
      <div className='px-1-4 pb-3-8'>
        <div className='flex justify-between items-center border-b-4 border-line-gray'>
          {titleColumns.map((item, index) => {
            return <div
              key={index}
              className={['', item.colWidth ? item.colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
              <div className={['pl-0-4 flex justify-start items-center h-6-2 text-1-4 font-semibold', item.titleWidth ? item.titleWidth : ''].join(" ")}>{item.title}</div>
            </div>
          })}
        </div>

        {dataColumns.map((_item, _index) => {
          return <div key={_index} className='flex justify-between items-center border-b border-word-gray item-hover'>
            {titleColumns.map((item, index) => {
              return <div
                key={index} className={['flex text-select-color justify-between items-center h-6-4', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
                <div className={['flex pl-0-4 items-center overflow-hidden break-words break-all text-1-5', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1'].join(" ")}>
                  {titleColumns[index].filterAddress ? FilterAddress(_item[item.flag]) : (item.flag ? _item[item.flag] : '')}
                </div>
                {titleColumns[index].canCopy &&
                  <div className='h-full flex flex-col justify-start pr-1-0 ml-1-0 pt-1-0' onClick={() => handleCopyText(_item[item.flag])}>
                    <div className='icon iconfont icon-copy2 text-copy-icon cursor-pointer pointer-hover' style={{ fontSize: '18px' }}></div>
                  </div>
                }
              </div>
            })}
          </div>
        })}

        {/* <div className='flex justify-between items-center border-b border-word-gray'>
          {titleColumns.map((item, index) => {
            return <div
              key={index} className={['flex text-select-color justify-between items-center h-16', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
              <div className={['flex pl-2 items-center overflow-hidden break-words break-all', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1'].join(" ")}>
                sdf
              </div>
              {titleColumns[index].canCopy &&
                <div className='h-full flex flex-col justify-start pr-2 ml-4 pt-1'>
                  <div className='icon iconfont icon-copy2 text-copy-icon cursor-pointer pointer-hover' style={{ fontSize: '18px' }}></div>
                </div>
              }
            </div>
          })}
        </div> */}

      </div>
    </div>
  )
}

export default DataTable
