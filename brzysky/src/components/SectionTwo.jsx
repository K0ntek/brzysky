import React from 'react'

const SectionTwo = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-10 my-10'>

        <div className='h-fit space-y-1 sm:space-y-3  max-w-[500px] lg:w-full mx-auto'>
            <div className=' shadow-[0px_0px_10px_0px] shadow-black/50 w-full aspect-[21/9] overflow-hidden bg-zinc-950 rounded-3xl sm:rounded-[40px]'>
                <img src="https://images.unsplash.com/photo-1509821361533-422c91a204f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover'/>
            </div>
            <div className="grid grid-cols-2 gap-1 sm:gap-3">
                <div className=' shadow-[0px_0px_10px_0px] shadow-black/50  w-full aspect-square bg-zinc-950 overflow-hidden rounded-3xl sm:rounded-[40px]'>
                    <img src="https://images.unsplash.com/flagged/photo-1554992369-085dc418ee00?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' h-full w-full object-cover' />
                </div>
                <div className=' shadow-[0px_0px_10px_0px] shadow-black/50  w-full aspect-square bg-zinc-950 overflow-hidden rounded-3xl sm:rounded-[40px]'>
                    <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' h-full object-cover'/>
                </div>
            </div>
        </div>

        <div className=' max-w-[650px] mx-auto'>
            <div className=' text-center lg:text-start z-20 relative top-[50%] translate-y-[-50%]'>
            <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text uppercase'>Sumienność </h2>
                <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6 uppercase'>Sumienność</h1>
                <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8 mx-auto lg:mx-0'> To dla mnie nie tylko dokładność w wykonywaniu obowiązków, ale także zaangażowanie w zrozumienie potrzeb i oczekiwań klientów. Uważnie słucham, analizuję i proponuję rozwiązania, które najlepiej odpowiadają ich sytuacji.</p>
            </div>
        </div>

    </div>
  )
}

export default SectionTwo