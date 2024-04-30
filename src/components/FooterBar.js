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
            <div className='w-full flex flex-col items-center text-black py-3-0'>
                <div className='w-11/12 flex justify-end items-center mb-2-4'>
                    {mediaList.map((item, index) => {
                        return <div
                            key={index}
                            className={[
                                'flex flex-col items-center border border-transparent p-0-3 rounded-lg justify-start duration-hover duration-300 hover:text-primary-green hover:bg-black',
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
        </div>
    )
}

export default FooterBar
