import React from 'react'

const Pricing = () => {

    const pricingOffer =[
        {
            offer: 'free',
            price: '0',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 
            background:'#000',
            text: '#fff'
        },
        {
            offer: 'basic',
            price: '10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            background:'#171717',
            text: '#fff'
        },
        {
            offer: 'pro',
            price: '25',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            background:'rgb(217 114 53)',
            text: '#111'
        },
        {
            offer: 'premium',
            price: '40',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            background:'#ebebeb',
            text: '#222'
        },
    ]

  return (
    <div id='pricing' className='w-full py-[70px] bg-zinc-950 rounded-[40px] my-10 text-center space-y-6'>
        <h2 className=' font-montserrat text-3xl font-[500] tracking-tight
                                bg-gradient-to-r from-[#929292] to-[#fff]
                                inline-block text-transparent bg-clip-text'>OUR PRICING OFFER</h2>
                {/* <h1 className=' font-montserrat text-5xl font-[600] mt-1 mb-6 text-[#efefef]'>OUR PRICING OFFER</h1> */}
    
        <div className=' flex flex-wrap mx-auto justify-center'>
            {pricingOffer.map((offerElement, i)=>{
                return(
                    <div className=' cursor-pointer font-montserrat w-[300px] py-5 rounded-3xl m-2 space-y-4 hover:mt-[-5px] hover:mb-[20px] transition-all duration-150' style={{background: `${offerElement.background}`, color: `${offerElement.text}`}}>
                         <h2 className=' text-2xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#202020] to-[#636363]
                                inline-block text-transparent bg-clip-text'>{offerElement.offer}</h2>

                        <div>
                            <h1 className=' text-4xl font-[600]'><span className=' relative top-[-8px]'>{offerElement.price}$</span> <span className=' text-5xl ml-[-8px] mr-[-8px]'>/</span> <span className=' relative top-[3xp] text-lg'>month</span></h1>
                        </div>
                        <p className=' font-[700] text-justify px-10'>{offerElement.description}</p>

                        {/* <button className=' bg-black text-white px-5 py-2 rounded-full font-[600] hover:tracking-widest transition-all duration-200'> BUY NOW</button> */}
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Pricing