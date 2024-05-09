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
                data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7',],
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#E4A132' // 横坐标刻度线的颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                interval: 100,
                // boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#000' // 纵坐标横线颜色
                    }
                }
            },
            series: [
                {
                    data: [400, 200, 300, 400, 500, 234, 42],
                    type: 'line',
                    smooth: true,
                    symbolSize: 8,   // 圆点大小
                    lineStyle: {
                        width: 4, // 线条宽度
                        color: '#0ea5e9',
                    },
                    // areaStyle: {
                    //     gradient: {
                    //         colorStops: [
                    //             { offset: 0, color: 'rgba(14, 165, 233, 1)' },  // 渐变起始颜色和透明度
                    //             { offset: 1, color: 'rgba(14, 165, 233, 0)' }     // 渐变结束颜色和透明度
                    //         ],
                    //         globalCoord: true  // 是否使用全局坐标系，默认为 false
                    //     }
                    // }
                },
                {
                    data: [200, 432, 234, 81, 600, 712, 232],
                    type: 'line',
                    smooth: true,
                    symbolSize: 8,   // 圆点大小
                    lineStyle: {
                        width: 4, // 线条宽度
                        color: '#BDFF00'
                    },
                },
            ],
            grid: {
                top: 20,
                left: 30,
                right: 10,
                bottom: 20,
                width: 'auto',
                height: 'auto'
            },
        };
        option && myChart.setOption(option);

    }

    useEffect(() => {
        initChart()
    }, [])
    return (
        <div className='h-full'>
            <div className='h-full'>
                <div className='text-white flex justify-between items-center font-medium lg:font-bold'>
                    <div className='text-2-0 lg:text-2-5 font-semibold lg:mb-1-0 xl:mb-auto'>Number Of Transactions</div>
                    <div className='hidden lg:block'>
                        <div className='flex justify-start items-center mb-0-6'>
                            <div className='flex justify-start items-center'>
                                <div className='bg-title-green w-0-7 h-0-2'></div>
                                <div className='bg-title-green w-1-0 h-1-0 rounded-full'></div>
                                <div className='bg-title-green w-0-7 h-0-2'></div>
                            </div>
                            <div className='text-line-gray text-1-0 font-semibold ml-1-2'>Brc20 Trading</div>
                        </div>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-start items-center'>
                                <div className='bg-blue-500 w-0-7 h-0-2'></div>
                                <div className='bg-blue-500 w-1-0 h-1-0 rounded-full'></div>
                                <div className='bg-blue-500 w-0-7 h-0-2'></div>
                            </div>
                            <div className='text-line-gray text-1-0 font-semibold ml-1-2'>Trade</div>
                        </div>
                    </div>
                </div>
                <div id='chart2' className='h-11-4 lg:h-20-6' style={{ width: '100%',margin: '0', padding: '0', }}></div>
                <div className='block mt-1-0 lg:hidden xl:hidden'>
                    <div className='flex justify-start items-center mb-0-6'>
                        <div className='flex justify-start items-center'>
                            <div className='bg-title-green w-0-7 h-0-2'></div>
                            <div className='bg-title-green w-0-9 h-0-9 rounded-full'></div>
                            <div className='bg-title-green w-0-7 h-0-2'></div>
                        </div>
                        <div className='text-line-gray text-1-0 font-semibold ml-1-2'>Brc20 Trading</div>
                    </div>
                    <div className='flex justify-start items-center'>
                        <div className='flex justify-start items-center'>
                            <div className='bg-blue-500 w-0-7 h-0-2'></div>
                            <div className='bg-blue-500 w-0-9 h-0-9 rounded-full'></div>
                            <div className='bg-blue-500 w-0-7 h-0-2'></div>
                        </div>
                        <div className='text-line-gray text-1-0 font-semibold ml-1-2'>Trade</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TradSmoothedLine
