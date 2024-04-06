import React from 'react'

const DataTable = ({ titleColumns, dataColumns }) => {
  // const dataColumns = ['', '', '', '']
  return (
    <div>
      <div className=''>
        <div className='flex justify-between items-center border-b-4 border-line-gray'>
          {titleColumns.map((item, index) => {
            return <div
              key={index}
              className={['', item.colWidth ? item.colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
              <div className={['pl-2 text-left h-14 font-bold pt-2', item.titleWidth ? item.titleWidth : ''].join(" ")}>{item.title}</div>
            </div>
          })}
        </div>

        {dataColumns.map((_item, _index) => {
          return <div key={_index} className='flex justify-between items-center border-b border-word-gray'>
            {titleColumns.map((item, index) => {
              return <div
                key={index} className={['flex text-select-color justify-between items-center h-16', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1', index !== 0 ? 'border-l border-word-gray' : ''].join(" ")}>
                <div className={['flex pl-2 items-center overflow-hidden break-words break-all', titleColumns[index].colWidth ? titleColumns[index].colWidth : 'flex-1'].join(" ")}>
                  {_item.height}
                </div>
                {titleColumns[index].canCopy &&
                  <div className='h-full flex flex-col justify-start pr-2 ml-4 pt-1'>
                    <div className='icon iconfont icon-copy2 text-copy-icon cursor-pointer pointer-hover' style={{ fontSize: '18px' }}></div>
                  </div>
                }
              </div>
            })}
          </div>
        })}
      </div>
    </div>
  )
}

export default DataTable
