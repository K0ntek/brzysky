import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import gsap from 'gsap'
import { IoMdClose } from "react-icons/io";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import homesell from '../../public/homesell.png';

export const socials = [
    { 
        icon: <FaFacebookF />,
        link: 'https://www.facebook.com/piotr.brzyski.144'
    },
    { 
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/brzyskip00/'
    },
    // { 
    //     icon: <FaTiktok />,
    //     link: ''
    // },
    { 
        icon: <FaYoutube />,
        link: 'https://www.youtube.com/@PiotrBrzyski-yo4vo'
    },
]

export const navElements = [
    {
        name: 'o mnie',
        link: 'about'
    },
    {
        name: 'oferta',
        link: 'offer'
    },
    {
        name: 'galeria',
        link: 'gallery'
    },
    {
        name: 'kontakt',
        link: 'contact'
    },
]

const Navbar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const setWindowDimensions = () => setWindowWidth(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", setWindowDimensions);
		return () => window.removeEventListener("resize", setWindowDimensions);
	}, []);

    const toggleNavbar=()=>{
        gsap.to('.toggleButton', {display:'none', duration:0, delay:.3})
        gsap.to('.navbar', {top: '40px', duration:.5})
    }

    const closeNavbar=()=>{
            gsap.to('.navbar', {top: '-200'})
            gsap.to('.toggleButton', {display:'block', duration:0, delay:.2})
    }

        useEffect(()=>{
            if(windowWidth > 763){
            gsap.to('.navbar', {top: '0'})
            gsap.to('.toggleButton', {display:'none', duration:0})
            }
            else{
                gsap.to('.navbar', {top: '-200px'})
                gsap.to('.toggleButton', {display:'block', duration:0})
            }
        })

  return (
        <div className=' fixed top-0 left-0 w-full py-5 bg-white z-[99] h-[60px]'>
            <HiOutlineMenuAlt3 className=' absolute right-5 text-2xl md:hidden hover:text-[#dedede]' onClick={toggleNavbar}/>
            <div className='max-w-[1300px] mx-auto'>
               <div className="relative z-[99]">
                   <Link to='home' spy={true} smooth={true}>
                   <div className=' absolute top-[-20px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-2 font-[500] font-montserrat cursor-pointer '>
                        <img src={homesell} alt="logo" className=' w-[200px]' />
                        <h1 className=' font-montserrat relative -top-4 text-[10px] text-center font-[500] tracking-widest text-[#ff9352]'>PIOTR BRZYSKI</h1>
                    </div>
                    </Link>
               </div>
            <div>
           <div className=" relative">
                <div className=" z-[90] navbar absolute bg-white mx-auto md:right-2 w-full top-[-200px] md:top-0">
                    <IoMdClose className=' absolute right-3 text-2xl md:hidden hover:text-[crimson] z-[99]' onClick={closeNavbar}/>
                    <div className='md:flex justify-end absolute right-0 md:space-x-3 space-x-0 space-y-3 px-7 py-2 md:p-0 md:space-y-0 w-full bg-white'>
                            <ul className=' md:flex md:space-x-4 mx-auto justify-center text-center md:justify-end md:mx-0'>
                                {navElements.map((element, i)=>{
                                    return(
                                        <li className='navElement cursor-pointer text-black text-md font-montserrat font-[600]'><Link key={i} to={element.link} spy={true} smooth={true}><p className=' hover:text-[#ff9352]'>{element.name}</p></Link></li>
                                    )
                                })}
                            </ul>

                            <div className=' flex space-x-3 mx-auto justify-center'>
                            {socials.map((socialElement, i)=>{
                                return(
                                    <a href={socialElement.link}><p key={i} className=' z-[90] text-xl text-black hover:text-[#ff9352] transition-all duration-150'>{socialElement.icon}</p></a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className=' relative'>
                <button className=' text-md font-montserrat absolute top-[50%] translate-y-[-80%] right-5 bg-[#111] text-white py-2 px-4 rounded-lg'>CONTACT US</button>
            </div> */}
            </div>
            </div>
        </div>
  )
}

export default Navbar