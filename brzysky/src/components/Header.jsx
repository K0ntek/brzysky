import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const Header = () => {

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
    <div className='header grid lg:grid-cols-2 min-h-screen mt-[80px] lg:mt-0' id='header'>
        <div className=''>
            <div className='relative top-[50%] translate-y-[-50%]'>
                <div className=' bg-black w-1/4 h-[5px] my-1 mx-auto'></div>
               <div className=' flex justify-center'>
                    <div className=' bg-black w-[2px] h-[100px] mx-2 mt-[250px]'></div>
                    <div className='w-3/5 aspect-square rounded-[50px] bg-zinc-950'></div>
                    <div className=' bg-black w-[2px] h-[100px] mx-2 mt-[150px]'></div>
               </div>
                <div className=' bg-black w-1/4 h-[5px] my-1 mx-auto'></div>
            </div>
        </div>
        <div className=' mx-auto text-center lg:text-start'>
            <div className=' space-y-4 relative top-[50%] translate-y-[-50%]'>
                <h1 className=' text-7xl font-mont font-[500]'>PIOTR BRZYSKI</h1>
                    <div>
                        <TypeAnimation
                        sequence={[
                            'AGENT NIERUCHOMOŚCI',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                        className=' font-mont text-4xl text-[#b78661]'
                        />
                    </div>
                <p className=' text-2xl font-inter font-[500]'>Sprzedaj ze mną swoją nieruchomość</p>

                        <div className="flex space-x-3 justify-center lg:justify-start">
                            {socials.map((social, i)=>{
                                return(
                                    <div key={i}>
                                        <a href={social.link}>
                                            <div className=' text-3xl hover:text-[#b78661]'>{social.icon}</div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                
                <Link to='offer' smooth={true} spy={true}>
                    <button className='bg-[#b78661] text-white text-xl font-inter font-[300] px-5 py-3 mt-4 rounded-xl hover:rounded-2xl transition-all duration-150 ml-8 '>ZOBACZ OFERTĘ</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header