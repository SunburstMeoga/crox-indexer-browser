import React, { useEffect } from 'react'
import * as echarts from 'echarts';
const TradSmoothedLine = () => {
    const initChart = () => {
        let element = document.getElementById('chart2');
        let myChart = echarts.init(element);
        myChart.clear()
        let option;
        option = {
            xAxis: {
                type: 'category',
                data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7',]
            },
            yAxis: {
                type: 'value',
                // splitNumber: 6,
                // boundaryGap: [0.4, 0.2]
                interval: 100,
            },
            series: [
                {
                    data: [100, 200, 300, 400, 500, 200, 42],
                    type: 'line',
                    smooth: true
                },
                {
                    data: [200, 300, 400, 500, 600, 190, 232],
                    type: 'line',
                    smooth: true
                }
            ]
        };

        option && myChart.setOption(option);
    }

    useEffect(() => {
        initChart()
    }, [])
    return (
        <div>
            <div className='px-6 py-2 pt-5'>
                <div className='text-white flex justify-between items-center font-bold text-xl'>
                    <div className='text-4xl font-bold'>Number Of Transactions</div>
                    <div className=''>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='bg-title-green w-3 h-0.5'></div>
                                <div className='bg-title-green w-2 h-2 rounded-full'></div>
                                <div className='bg-title-green w-3 h-0.5'></div>
                            </div>
                            <div className='text-line-gray text-base ml-4'>Brc20 Trading</div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='bg-line-blue w-3 h-0.5'></div>
                                <div className='bg-line-blue w-2 h-2 rounded-full'></div>
                                <div className='bg-line-blue w-3 h-0.5'></div>
                            </div>
                            <div className='text-line-gray text-base ml-4'>Trade</div>
                        </div>
                    </div>
                </div>
                <div id='chart2' className='' style={{ width: '100%', height: '400px' }}></div>
            </div>

        </div>
    )
}

export default TradSmoothedLine
