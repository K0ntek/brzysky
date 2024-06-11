import React from 'react'
import logo from '../../public/homesellLight.png'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {

  const socials = [
    {
        link: '',
        icon: <FaFacebookF/>
    },
    {
        link: '',
        icon: <FaInstagram/>
    },
    {
        link: '',
        icon: <FaLinkedinIn/>
    },
]

  return (
    <div>
    <div className="pt-10 pb-3 bg-zinc-950">
      <h1 className=' uppercase text-6xl font-mont text-white/20 text-center mb-10'>bądź na bieżąco</h1>
      <div className=" grid lg:grid-cols-3 space-y-7 lg:space-y-0">
          <div className=' w-fit mx-auto'>
            <img src={logo} alt="logo" className=' w-[200px]'/>
            <p className=' text-[#b78661] mt-[-15px] text-lg text-center tracking-[6px] ml-1'>PIOTR BRZYSKI</p>

            <div className="flex space-x-3 mx-auto text-center justify-center my-3">
                  {socials.map((social, i)=>{
                      return(
                        <div key={i}>
                            <a href={social.link}>
                              <div className=' text-2xl text-[silver] hover:text-[#b78661]'>{social.icon}</div>
                            </a>
                        </div>
                      )
                  })}
              </div>

          </div>

          <div>
            <h1 className=' text-center font-mont text-3xl font-[200] text-[silver]'>KONTAKT</h1>
            <div className="flex text-xl mx-auto text-center justify-center"><FaPhone className=' mt-2 mr-3 text-[#b78661]'/><p className='text-white'>797886210</p></div>
            <div className="flex text-xl mx-auto text-center justify-center"><MdEmail className=' mt-2 mr-3 text-[#b78661]'/><p className='text-white'>piotr@homesell.pl</p></div>
          </div>

          <div className=' mx-auto'>
            <h1 className=' text-center font-mont text-3xl font-[200] text-[silver]'>BLOG</h1>
            <div className=' w-fit'>
              <div className=' w-2/3 mx-auto'>
              <a href="https://homesell.pl/2023/03/dlaczego-warto-korzystac-z-uslugi-biura-nieruchomosci/" className=' text-white font-mont'>Dlaczego warto korzystać z usługi biura nieruchomości?</a>
              </div>
              <div className="w-0 hover:w-full h-[2px] bg-white"></div>
            </div>
          </div>
      </div>
    </div>

    <div className="py-2 bg-[#0a0a0a]">
      <p className=' text-white text-[10px] text-center font-inter font-[500]'> 2024 © PIOTR BRZYSKI DESIGND BY <span className='text-[#b78661]'><a href="https://jakubkontekcv.onrender.com">JAKUB KONTEK</a></span></p>
    </div>
</div>
  )
}

export default Footer