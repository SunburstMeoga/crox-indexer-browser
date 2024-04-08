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
            <div className='w-full flex flex-col items-center text-black'>
                <div className='w-11/12 flex justify-end items-center mb-10'>
                    {mediaList.map((item, index) => {
                        return <div className={[
                            'flex flex-col items-center border border-transparent px-2 rounded-lg justify-start duration-hover duration-300 hover:text-primary-green hover:bg-black',
                            index === 0 ? '' : 'ml-10'
                        ].join(" ")}>
                            <div className={['icon iconfont', item.icon].join(" ")} style={{ fontSize: '34px' }}></div>
                            <div className=''>{item.title}</div>
                        </div>
                    })}
                </div>
                <div className='flex justify-center items-center'>
                    {documentList.map((item, index) => {
                        return <div className='px-2 py-0.1 rounded-md mx-1 duration-hover hover:text-slate-500'>
                            {item.title}
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FooterBar
