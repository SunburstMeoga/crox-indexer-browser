import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const SupplyTrendLine = () => {
    const initChart = () => {
        let element = document.getElementById('chart1');
        let myChart = echarts.init(element);
        myChart.clear()
        let option;
        option = {
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false, // 隐藏刻度线
                },
                axisLabel: {
                    show: false, // 隐藏刻度标签
                },
                data: ['4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.5'],
                axisLine: {
                    lineStyle: {
                        color: '#1E1E1E' // 横坐标刻度线的颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                interval: 100,
                axisLine: {
                    lineStyle: {
                        color: '#1E1E1E'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#1E1E1E' // 纵坐标横线颜色
                    }
                }
            },
            series: [
                {
                    data: [0, 200, 300, 400, 500, 234, 42, 400, 200, 300, 400, 500, 234, 42, 234],
                    type: 'line',
                    smooth: true,
                    symbolSize: 0,   // 圆点大小
                    lineStyle: {
                        width: 4, // 线条宽度
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(253,121,0, 1)' // 起始颜色
                            }, {
                                offset: 1, color: 'rgba(255,245,0, 0)' // 结束颜色
                            }],
                            globalCoord: false // 默认为 false
                        }
                    },
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(253,121,0, 1)' // 起始颜色
                            }, {
                                offset: 1, color: 'rgba(255,245,0, 0)' // 结束颜色
                            }],
                            globalCoord: false // 默认为 false
                        }
                    },
                    itemStyle: {
                        color: '#E4A132' // 设置圆点颜色
                    }
                },
            ],
            grid: {
                top: 5,
                left: -20,
                right: -20,
                bottom: '4px',
            },
        };
        option && myChart.setOption(option);

    }
    useEffect(() => {
        initChart()
    }, [])
    return (
        <div>
            <div className='h-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='w-6-2'>
                            <img src='/images/logo.png' alt=''></img>
                        </div>
                        <div className='flex flex-col items-start font-semibold justify-start text-white ml-1-0'>
                            <div className='text-1-5'>Crox</div>
                            <div className='text-2-5'>$0.1228</div>
                        </div>
                    </div>

                </div>
                <div className='text-line-gray text-1-3 text-right mt-1-2 mb-1-1'>Supply Trend(15 Days)</div>

                <div id='chart1' className='' style={{ width: '100%', height: '160%', margin: '0', padding: '0' }}></div>
            </div>
        </div>
    )
}

export default SupplyTrendLine
