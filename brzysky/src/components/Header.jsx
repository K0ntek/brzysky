import React, { useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import gsap from 'gsap/gsap-core';
import { TimelineMax } from "gsap/gsap-core";

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

    useEffect(()=>{

            const tl = new TimelineMax({repeat:-1})
            // const tl  = gsap.timeline()

            let imageLine = document.querySelectorAll('.imageLine')
            let imageVerticalLine = document.querySelectorAll('.imageVerticalLine')

            tl.from(imageLine, {x:'20%' })
            .to(imageLine, {x:'-20%', duration:4, delay:.5, stagger:4})
            .to(imageLine, {x:'20%', duration:4, delay:.5, stagger:4})
            .from(imageVerticalLine, {y:'25%' })
            .to(imageVerticalLine, {y:'-25%', duration:4, delay:.5, stagger:4})
            .to(imageVerticalLine, {y:'25%', duration:4, delay:.5, stagger:4})
            //   .to('.imageLine', {x:'0', duration:1, })
            //   .to('.imageVerticalLine', {y:'-20%', duration:1, })
            //   .to('.imageVerticalLine', {y:'20%', duration:2, })
            //   .to('.imageVerticalLine', {y:'0', duration:1, })
            //   .to('.imageLine1', {x:'-10%', duration:.5})
        
            gsap.fromTo('.image', {x:200, opacity:0}, {x:0, opacity:1, duration:.5, delay:.2})
            gsap.fromTo('.content', {y:200, opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2})
            gsap.fromTo('.button', {opacity:0}, {opacity:1, duration:.5, delay:1})
    },[])

  return (
    <div className='header grid lg:grid-cols-2 min-h-screen mt-[80px] lg:mt-0' id='header'>
        <div className=''>
            <div className='relative top-[50%] translate-y-[-50%] image'>
                <div className=' bg-black w-1/4 h-[5px] my-1 mx-auto imageLine'></div>
               <div className=' flex justify-center'>
                    <div className=' bg-black w-[2px] h-[60px] sm:h-[75px] md:h-[150px] mx-2 mt-[20%] imageVerticalLine'></div>
                    <div className='w-3/5 aspect-square rounded-[50px] bg-zinc-950'></div>
                    <div className=' bg-black w-[2px] h-[60px] sm:h-[75px] md:h-[150px] mx-2 mt-[10%] imageVerticalLine'></div>
               </div>
                <div className=' bg-black w-1/4 h-[5px] my-1 mx-auto imageLine'></div>
            </div>
        </div>
        <div className=' mx-auto text-center lg:text-start'>
            <div className=' space-y-4 relative top-[50%] translate-y-[-50%] '>
                <h1 className=' text-7xl font-mont font-[500] content'>PIOTR BRZYSKI</h1>
                    <div className='content'>
                        <TypeAnimation
                        sequence={[
                            'AGENT NIERUCHOMOŚCI',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        cursor={false}
                        className=' font-mont text-4xl text-[#b78661] content'
                        />
                    </div>
                <p className=' text-2xl font-inter font-[500] content'>Sprzedaj ze mną swoją nieruchomość</p>

                        <div className="flex space-x-3 justify-center lg:justify-start content">
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
                    <button className='button bg-[#b78661] text-white text-xl font-inter font-[300] px-5 py-3 mt-4 rounded-xl hover:rounded-2xl transition-all duration-150 ml-8 '>ZOBACZ OFERTĘ</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header