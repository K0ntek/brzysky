import React, { useEffect, useState } from 'react'
import logo from '../../public/homesell.png'
import { Link } from 'react-scroll'
import { IoMdClose } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import gsap from 'gsap/all';

const Navbar = () => {

    const navElements = [
        {
            name: 'STRONA GŁÓWNA',
            link: 'header'
        },
        {
            name: 'O MNIE',
            link: 'about'
        },
        {
            name: 'GALERIA',
            link: 'gallery'
        },
        {
            name: 'KONTAKT',
            link: 'contact'
        },
        // {
        //     name: 'ZGŁOŚ NIERUCHOMOŚĆ',
        //     link: ''
        // },
    ]

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
      window.addEventListener('resize', setWindowDimensions);
      return () => {
        window.removeEventListener('resize', setWindowDimensions);
      };
    }, []);

    const toggleNavbar=()=>{
        gsap.to('.toggleButton', {display:'none', duration:0, delay:.3})
        gsap.to('.navigation', {top: '70px', duration:.5})
    }

    const hideNavbar=()=>{
            gsap.to('.navigation', {top: '-450'})
            gsap.to('.toggleButton', {display:'block', duration:0, delay:.2})
    }

        useEffect(()=>{
            if(windowWidth > 1024){
            gsap.to('.toggleButton', {display:'none', duration:0})
            }
            else{
                gsap.to('.toggleButton', {display:'block', duration:0})
            }
        })

  return (
    <div className=' w-full bg-[rgba(253,253,253)] h-[70px] lg:flex py-4 fixed top-0 z-[99]'>
        <div className="absolute right-3 text-4xl hover:text-[#8d4929] toggleButton lg:hidden" onClick={toggleNavbar}><RiMenu4Line /></div>
            <Link to='header' smooth={true}>
                <div className=' absolute lg:left-8 lg:translate-x-0 left-[50%] translate-x-[-50%]'>
                    <img src={logo} alt='logo' className='w-[180px] relative' />
                </div>
            </Link>
        <div className='mx-auto'>
            <div className='navigation fixed top-[-100%] w-full lg:static lg:top-0 bg-[rgba(253,253,253)] lg:mt-1 text-center py-4 lg:py-0'>
                <div className=' absolute right-3 top-3 text-3xl hover:text-[#fa9262] closeButton lg:hidden' onClick={hideNavbar}> <IoMdClose/></div>
                <ul className=' justify-center lg:flex text-zinc-950 text-center mx-auto'>
                    {navElements.map((element, i)=>{
                        return(
                            <Link key={i} to={element.link} smooth={true} spy={true} offset={-70}>
                                <div key={i} className=' font-[500] cursor-pointer w-fit group lg:mx-2 p-1 hover:text-[#8d4929] rounded-3xl text-center justify-center mx-auto'>
                                <li> {element.name} </li>
                            {/* <div className=' w-0 h-[2px] group-hover:w-1/2 bg-black'></div> */}
                            </div>
                            </Link>
                        )
                    })}
                </ul>
                    <div>
                        <Link to='report' smooth={true} spy={true}>
                            <div className=' lg:right-0 lg:absolute lg:top-2'>
                                <button className=' bg-zinc-950 text-[#eee] font-[500] w-[230px] font-mont px-3 py-3 rounded-xl lg:me-8'>ZGŁOŚ NIERUCHOMOŚĆ</button>
                            </div>
                        </Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar