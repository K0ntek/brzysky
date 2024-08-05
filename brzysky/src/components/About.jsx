import React from 'react'

const About = () => {
  return (
    <div className=' relative aboutSection w-full shadow-[0px_0px_20px_0px] shadow-black/50 px-10 min-h-[500px] py-[80px] rounded-[40px] my-10'>
        <div className=' text-white text-center rounded-[40px] py-10'>
        <h2 className=' font-montserrat text-2xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#fff] to-[#a3a3a3]
                                inline-block text-transparent bg-clip-text'>O MNIE</h2>
            <h1 className=' font-montserrat text-5xl font-[600] mt-1 mb-6 uppercase'>Poznajmy się bliżej!</h1>
            <div className=' -space-y-5'>
              <p className=' mx-auto font-inter font-[500] text-xl w-3/4 text-justify mb-8'>
                Nazywam się Piotr Brzyski i z pasją zajmuję się rynkiem nieruchomości. Jestem agentem,
                który stawia na sumienność, profesjonalizm i precyzję w każdym aspekcie swojej pracy.
                  Moim celem jest pomoc klientom w znalezieniu idealnego miejsca do życia lub inwestycji.</p>

                    <p className=' mx-auto font-inter font-[500] text-xl w-3/4 text-justify mb-8 px-5'>
                        Dążę do tego, aby każdy etap procesu – od pierwszego spotkania, przez negocjacje,
                          aż po finalizację transakcji – przebiegał sprawnie i bezstresowo. Zawsze dbam o to,
                          aby moi klienci czuli się pewnie i dobrze poinformowani.</p>
            </div>
            </div>

            <div className=' absolute w-full flex mb-2 gap-2 text-white bottom-0'>
                    <div className=' xl:w-[6%] md:w-[12%] w-[16%]'>
                        <div className=" w-full bg-[#ff9352] rounded-full h-1 relative top-[50%] translate-y-[-50%]"></div>
                    </div>
                    <p className=' font-montserrat font-[600] w-4/6'>"Jeśli kochasz to, co robisz, nie przepracujesz ani jednego dnia w życiu"</p>
                </div>
    </div>
  )
}

export default About