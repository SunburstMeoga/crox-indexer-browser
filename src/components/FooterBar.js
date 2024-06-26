import React from 'react'

const FooterBar = () => {
    const mediaList = [
        { title: 'GitHub', icon: 'icon-github' },
        { title: 'Gitbook', icon: 'icon-gitbook' },
        { title: 'Discord', icon: 'icon-discord' },
        { title: 'Twitter', icon: 'icon-twitter' },
    ]
    const documentList = [
        { title: 'API' },
        { title: 'Developer Services' },
        { title: 'Legal Disclaimer' },
        { title: 'Privacy Policy' },
        { title: 'Terms Of Service' },

    ]
    return (
        <div>
            <div className='w-full  flex-col items-center text-black py-3-0 footer-bar-bg hidden xl:flex'>
                <div className='w-11/12 flex justify-end items-center mb-2-4'>
                    {mediaList.map((item, index) => {
                        return <div
                            key={index}
                            className={[
                                'flex flex-col items-center border border-transparent p-0-3 rounded-lg justify-start duration-hover duration-500 hover:text-primary-green hover:bg-black',
                                index === 0 ? '' : 'ml-3-1'
                            ].join(" ")}>
                            <div className={['icon iconfont mb-0-6', item.icon].join(" ")} style={{ fontSize: '34px' }}></div>
                            <div className=''>{item.title}</div>
                        </div>
                    })}
                </div>
                <div className='flex justify-center items-center'>
                    {documentList.map((item, index) => {
                        return <div
                            key={index}
                            className='px-1-0 py-0-6 rounded-md mx-0-6 duration-hover hover:bg-card-green hover:text-white'>
                            {item.title}
                        </div>
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-start items-center xl:hidden px-1-5'>
                {documentList.map((item, index) => {
                    return <div key={index} className='w-full h-4-0 lg:h-8-0 flex justify-between items-center text-black'>
                        <div className='text-1-3 lg:text-2-5'>{item.title}</div>
                        <div className='flex justify-center items-center'>
                            <div className='icon iconfont icon-down lg:hidden'></div>
                            <div className='icon iconfont icon-down hidden lg:block' style={{fontSize: '30px'}}></div>

                        </div>
                    </div>
                })}
                <div className='flex justify-start items-center w-full py-2-3'>
                    <div className='w-0-5 h-0-5 bg-black mr-1-0 lg:hidden'></div>
                    <div className='font-bold lg:font-black text-1-3 lg:text-2-5'>Follow us</div>
                </div>
                <div className='w-full lg:flex lg:justify-between lg:items-center lg:my-2-0 '>
                {mediaList.map((item, index) => {
                    return <div key={index} className='w-full h-6-0 flex lg:flex-col justify-between items-center text-black lg:w-5-4'>
                        <div className={['icon iconfont mb-0-6 lg:hidden', item.icon].join(" ")} style={{ fontSize: '34px' }}></div>
                        <div className={['icon iconfont mb-0-6 hidden lg:block', item.icon].join(" ")} style={{ fontSize: '54px' }}></div>

                        <div className='font-bold text-1-3'>{item.title}</div>
                    </div>
                })}
                </div>
            </div>
        </div>
    )
}

export default FooterBar
