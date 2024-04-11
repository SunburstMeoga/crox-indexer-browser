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
                    data: [400, 200, 300, 400, 500, 234, 42, 400, 200, 300, 400, 500, 234, 42, 234],
                    type: 'line',
                    smooth: true,
                    symbolSize: 8,   // 圆点大小
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
                bottom: '10px',
            },
        };
        option && myChart.setOption(option);

    }
    useEffect(() => {
        initChart()
    }, [])
    return (
        <div>
            <div className='px-6 py-2 pt-5'>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-start items-center'>
                        <div className='w-20'>
                            <img src='/images/logo.png' alt=''></img>
                        </div>
                        <div className='flex flex-col items-start justify-start text-white ml-3'>
                            <div className=''>Crox</div>
                            <div className='font-bold text-2xl'>$0.1228</div>
                        </div>
                    </div>
                    <div className='text-line-gray text-base'>Supply Trend(15 Days)</div>
                </div>

                <div id='chart1' className='' style={{ width: '100%', height: '200px', margin: '0', padding: '0' }}></div>
            </div>
        </div>
    )
}

export default SupplyTrendLine
