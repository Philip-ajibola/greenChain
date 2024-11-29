import img1 from '../assets/img.png'
export default function Reviews(){
    const reviews = [
        {review:'This platform has completely transformed how we operate on our farm.' +
                ' Before, accessing credit was a nightmare—banks wouldn’t even look' +
                ' at us without collateral. Now, using the app, I can secure small' +
                ' loans by tokenizing my future crop yield, and the process is quick and ' +
                'transparent. I also love the direct marketplace feature that connects us with buyers,' +
                ' ensuring we get a fair price for our produce. The weather insurance has been a lifesaver, ' +
                'providing payouts when our harvest was affected by unexpected drought. This is the future of farming!',
        name:' Grace A., Smallholder Farmer from Kenya',image:img1},
        {review:'As a cooperative leader, I’ve always struggled to ensure our members receive fair treatment in the supply chain. This app’s blockchain-powered marketplace has ' +
                'eliminated middlemen who used to exploit us. Now, we sell directly to buyers,' +
                ' and every transaction is tracked, so there’s complete trust in the system.' +
                ' The community wallet feature has also been great for pooling resources and' +
                ' funding new equipment.It’s simple, secure, and empowering for all of us in the' +
                ' agriculture sector.',
        name:'Kofi M., Cooperative Manager from Ghana',image:img1}
    ]
    return (
        <div className={'flex flex-col md:flex-row w-[100vw] md:px-[50px] md:justify-around items-center pb-[10px]'}>
            {reviews.map((data,index)=>(
                <div key={index} className={'flex flex-col gap-[7px] my-[10px] md:my-0  sm:w-[300px] sm:justify-around h-[300px] px-[5px] border-[1px] border-green-400 rounded-md'}>
                    <div className='rounded-[50%] overflow-hidden h-[40px] w-[40px]'>
                        <img src={data.image} alt=""/>
                    </div>
                    <div className={'flex flex-col gap-[12px]'}>
                        <p className={'text-[12px] text-white'}>{data.review}</p>
                        <p className={'text-[10px] text-white'}>{data.name}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}