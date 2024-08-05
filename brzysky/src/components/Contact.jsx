import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TiPin } from "react-icons/ti";
import { FaClock } from "react-icons/fa6";
import { socials } from './Navbar';

const Contact = () => {
  return (
    <div className=' my-10 grid lg:grid-cols-2 gap-6' id='contact'>

         <div className='w-full mx-auto max-w-[700px] lg:max-w-full  shadow-[0px_0px_20px_0px] shadow-black/10 rounded-[40px] p-2 sm:p-6'>
         <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>KONTAKT</h2>
                <h1 className=' font-montserrat text-2xl sm:text-4xl font-[700] mt-1 mb-6'>NAPISZ DO MNIE LUB ZGŁOŚ NIERUCHOMOŚĆ!</h1>

                <form action="">
                    <div className=' relative space-y-5 mx-auto mb-10 '>
                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>pełne imię</p>
                                <input required type="text" name="" id="" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'/>
                            </div>

                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>e-mail</p>
                                <input required type="text" name="" id="" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'/>
                            </div>

                            <div>
                                <p className=' ml-6 font-montserrat text-sm font-[600]'>wiadomość</p>
                                <textarea required name="" id="" cols="30" rows="10" className=' w-full p-2 rounded-lg bg-[#eaeaea] focus:outline-none font-montserrat font-[500]'></textarea>
                            </div>

                            <button className=' absolute right-5 -bottom-12 py-2 px-5 bg-zinc-950 text-white rounded-lg font-[500] hover:tracking-widest transition-all duration-150'>WYŚLIJ</button>
                    </div>
                </form>
         </div>

        <div className=' max-w-[700px] lg:max-w-full mx-auto bg-gradient-to-tr from-[#ff9352] to-[#db661d] rounded-[40px] p-5 sm:p-10 shadow-[0px_0px_20px_0px] shadow-black/30'>
        <div className='relative top-[50%] translate-y-[-50%] mx-auto'>
            <div className=' space-y-3 font-montserrat font-[500]'>
            <h1 className=' font-montserrat text-2xl sm:text-4xl font-[600]  mt-1 mb-6'>Masz nieruchomość na sprzedaż? Daj znać i postaram się pomóc!</h1>

                    <div className=''>
                        <div className="flex space-x-2 ">
                            <MdEmail className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1 font-montserrat font-[600]'>Napisz!</p>
                        </div>
                        <p className=' ml-8'>piotr@homesell.pl</p>
                    </div>
                    
                   <div className=''>
                        <div className="flex space-x-2">
                            <FaPhoneAlt className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1 font-montserrat font-[600]'>Zadzwoń!</p>
                        </div>
                        <p className=' ml-8'> +48 797 886 210</p>
                   </div>

                   <div className=''>
                        <div className="flex space-x-2">
                            <TiPin className=' mt-2 text-xl rounded-full'/>
                            <p className='text-xl mt-1 font-montserrat font-[600]'>Gdzie pracujemy </p>
                        </div>
                        <p className=' ml-8'> woj. Podkarpackie</p>
                        <p className=' ml-8'> woj. Małopolskie</p>
                        <p className=' ml-8'> woj. Świętokrzyskie</p>
                        <p className=' ml-8'> woj. Lubelskie</p>
                   </div>

                   <div className=' flex space-x-3 mx-auto pt-4'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <a href={socialElement.link}><p key={i} className=' z-[90] text-2xl text-black hover:text-[#ffffff] transition-all duration-150'>{socialElement.icon}</p></a>
                        )
                    })}
                </div>


                {/* <img className=' aspect-[25/9] rounded-[40px] object-cover' src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

            </div>
        </div>
        </div>

    </div>
  )
}

export default Contact