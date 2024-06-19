import React from 'react'
import Offer from './Offer'

const About = () => {
  return (
    <div className=' rounded-[40px] bg-zinc-950'>
      <h1 className=' text-transparent bg-clip-text bg-gradient-to-r from-[#8b8b8b] to-[#eeeeee] text-lg uppercase py-5 font-mont tracking-wide text-center font-[600]'>Moja misja, twoja satysfakcja</h1>
      <div className=' w-full mx-auto py-10 mt-8' id='about'>
          <div className='w-5/6 py-7 mx-auto rounded-[40px] grid lg:grid-cols-2'>
              <div className='hidden sm:block'>
                <h1 className=' text-8xl font-mont font-[500] text-center text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white] my-8 sticky hidden lg:block top-[50%] translate-y-[-50%]'>O MNIE</h1>
              </div>
                  <div>
                    <h1 className=' text-center text-5xl font-mont mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[silver] to-[white]'>POZNAJ MNIE BLIŻEJ !</h1>
                    <p className=' text-2xl text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate natus eos numquam placeat repellat recusandae reprehenderit, aliquid illum molestiae sunt maiores aliquam laborum, eligendi pariatur rerum sed enim veniam architecto sequi odit totam quam ea mollitia? Quibusdam, quo temporibus.</p>
                    <Offer/>
                  </div>
          </div>
    </div>
    </div>
  )
}

export default About