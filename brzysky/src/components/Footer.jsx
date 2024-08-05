import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';
import { navElements, socials } from './Navbar';

const Footer = () => {


  return (
   <div className='w-full bg-slate-100'>
        {/* <h1 className=' font-montserrat font-[700] text-2xl tracking-wider ml-10 bg-gradient-to-r from-[#585858] to-[#242424]
                                inline-block text-transparent bg-clip-text'>Lorem ipsum dolor sit amet.</h1> */}
     <div className=' py-5 pb-7 md:flex justify-between space-y-4 md:space-y-0 max-w-[1400px] px-10 mx-auto'>

            <div className=' text-black'>
                <p className=' relative top-[6px] font-[600] font-montserrat text-black text-[12px] text-center'> © 2024 UI <span className=' font-[700] text-[#ff9352]'><a href="https://jakubkontek.onrender.com">JAKUB KONTEK</a></span> - All rights reserved</p>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' gap-2 flex mx-auto justify-center'>
                    {navElements.map((element, i)=>{
                        return(
                            <Link to={element.link} spy={true} smooth={true}><p className='cursor-pointer text-lg text-black font-[500] hover:text-[#ff9352] text-center transition-all duration-150'>{element.name}</p></Link>
                        )
                    })}
                </div>
                </div>
            </div>

            <div className=''>
                <div className='w-fit mx-auto'>

                <div className=' flex space-x-3 mx-auto justify-center'>
                    {socials.map((socialElement, i)=>{
                        return(
                            <a href={socialElement.link}><p key={i} className=' z-[90] text-2xl text-black hover:text-[#ff9352] transition-all duration-150'>{socialElement.icon}</p></a>
                        )
                    })}
                </div>
                </div>
            </div>

    </div>
   </div>
  )
}

export default Footer