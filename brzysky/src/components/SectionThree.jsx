import React, {useState, useEffect} from 'react'

const SectionThree = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const setWindowDimensions = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", setWindowDimensions);
		return () => window.removeEventListener("resize", setWindowDimensions);
	}, []);

  return (
    <div>

         {windowWidth > 1024 &&(
          <div className="grid grid-cols-2">

              <div>
                  <div className=' text-center lg:text-start relative top-[50%] translate-y-[-50%]'>
                  <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                      bg-gradient-to-r from-[#cacaca] to-[#222]
                                      inline-block text-transparent bg-clip-text uppercase'>Profesjonalizm i precyzja</h2>
                      <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>Profesjonalizm i precyzja</h1>
                      <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8 mx-auto lg:mx-0'>
                      Profesjonalizm oznacza dla mnie nieustanne doskonalenie swoich umiejętności i poszerzanie
                       wiedzy o rynku nieruchomości. Dzięki temu mogę oferować
                         usługi na najwyższym poziomie.</p>

                         <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8 mx-auto lg:mx-0'>
                         Precyzja jest kluczowa w mojej pracy. Każdy detal ma znaczenie, dlatego dokładam wszelkich
                       starań, aby wszystko było dopięte na ostatni guzik. Wierzę, że to właśnie precyzyjne 
                       podejście pozwala osiągać najlepsze rezultaty i zadowolenie klientów.</p>
                  </div>
              </div>

              <div className=' max-w-[500px] lg:w-full mx-auto grid grid-cols-2 gap-1 sm:gap-3 '>

                    <div className=' shadow-[0px_0px_10px_0px] shadow-black/50 w-full aspect-[9/16] overflow-hidden bg-zinc-950 rounded-[40px] mt-10'>
                      <img src="https://images.unsplash.com/photo-1603783032764-c434d583b10f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                    </div>

                  <div className=" space-y-1 sm:space-y-3">

                      <div className=' shadow-[0px_0px_10px_0px] shadow-black/50  w-full aspect-square overflow-hidden bg-zinc-950 rounded-[40px]'>
                        <img src="https://plus.unsplash.com/premium_photo-1700860838212-10c44393f9e5?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                      </div>

                      <div className=' shadow-[0px_0px_10px_0px] shadow-black/50  w-full aspect-[9/11] overflow-hidden bg-zinc-950 rounded-[40px]'>
                        <img src="https://images.unsplash.com/photo-1605334727599-2bc9d256a61e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                      </div>
                  
                  </div>
              </div>

          </div>
         )}

         {windowWidth < 1024 &&(
          <div>

              <div className=' max-w-[500px] lg:w-full mx-auto grid grid-cols-2 gap-2 sm:gap-5 '>

                    <div className='w-full aspect-[9/16] overflow-hidden bg-zinc-950 rounded-3xl sm:rounded-[40px] mt-10'>
                      <img src="https://images.unsplash.com/photo-1603783032764-c434d583b10f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                    </div>

                  <div className=" space-y-2 sm:space-y-5">

                      <div className=' w-full aspect-square overflow-hidden bg-zinc-950 rounded-3xl sm:rounded-[40px]'>
                        <img src="https://plus.unsplash.com/premium_photo-1700860838212-10c44393f9e5?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                      </div>

                      <div className=' w-full aspect-[9/11] overflow-hidden bg-zinc-950 rounded-3xl sm:rounded-[40px]'>
                        <img src="https://images.unsplash.com/photo-1605334727599-2bc9d256a61e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                      </div>
                  
                  </div>
              </div>

              <div className=' max-w-[650px] mx-auto'>
                  <div className=' text-center lg:text-start relative mt-10'>
                  <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                      bg-gradient-to-r from-[#cacaca] to-[#222]
                                      inline-block text-transparent bg-clip-text'>SUBHEADING TEXT</h2>
                      <h1 className=' font-montserrat text-5xl font-[700] mt-1 mb-6'>Lorem ipsum dolor sit amet.</h1>
                      <p className=' font-inter font-[500] text-xl w-3/4 text-justify mb-8 mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis saepe voluptates numquam a qui, sit quasi iusto, magnam enim maxime accusamus voluptatum commodi quae quos doloribus harum quibusdam. Quas officiis sequi omnis, doloribus saepe illo possimus vitae eaque, autem assumenda unde recusandae sapiente, et distinctio inventore dolor reiciendis aspernatur minus.</p>
                  </div>
              </div>

          </div>
         )}

    </div>
  )
}

export default SectionThree