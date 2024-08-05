import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import selfImage from '../../public/selfImage.png'

const Header = () => {

    useEffect(()=>{

        let imageLine = document.querySelectorAll('.imageLine')

        gsap.fromTo(imageLine, {x:'-20%'}, {x:'20%', duration:4, stagger:1, yoyo:true, repeat:-1, ease: 'power1'})

        gsap.fromTo('.descElement', {y:'50px', opacity:0}, {y:'0', opacity:1, duration:.5, stagger:.2,})
        gsap.fromTo('.headerElement', {opacity:0}, {opacity:1, duration:.5, stagger:.2,})
        gsap.fromTo('.imageWrapper', {x:'50px', opacity:0}, {x:'0', opacity:1, duration:.5, delay:.8})
    },[])

  return (
    <div className=' grid lg:grid-cols-2 min-h-screen gap-10 py-[70px]' id='home'>
        
        <div className=' max-w-[700px] mx-auto'>
            <div className=' text-center lg:text-start relative top-[50%] translate-y-[-50%]'>
                <h2 className=' headerElement font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text'>AGENT NIERUCHOMOŚCI</h2>

                <h1 className=' headerElement font-montserrat text-7xl font-[600] mt-1 my-4'>PIOTR BRZYSKI</h1>

                <p className=' headerElement font-inter font-[500] text-xl w-3/4 text-justify mb-2 mx-auto lg:mx-0'>Sprzedaj ze mną swoją nieruchomość i ciesz się z profesjonalnej współpracy!</p>

                
                <div className=" headerElement flex space-x-5 mx-auto justify-center lg:justify-start mt-3">
                    <Link to='about' spy={true} smooth={true}><button className=' border-[2px] border-[#111] bg-[#111] text-white py-2 px-5 font-montserrat font-[600] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>ZOBACZ WIĘCEJ</button></Link>
                    <Link to='offer' spy={true} smooth={true}><button className=' border-[2px] border-[#ff9352] bg-transparent text-[#ff9352] py-2 px-5 font-montserrat font-[600] rounded-lg hover:tracking-wide hover:font-[600] transition-all duration-150'>MOJA OFERTA</button></Link>
                </div>
                

            <div className=' w-4/5 flex flex-wrap justify-center mx-auto lg:mx-0 gap-2 mt-6'>
                <div className='descElement bg-[rgb(240,240,240)] sm:ml-0 text-black px-4 py-3 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600] text-center py-2'>Profesjonalizm</p>
                </div>
                <div className='descElement bg-zinc-950 sm:ml-0  px-4 py-3 rounded-3xl text-white shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600] text-center py-2'>Doświadczenie</p>
                </div>
                <div className='descElement bg-[#ff9352] sm:ml-0 px-4 py-3 rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/30'>
                    {/* <h3>Lorem, ipsum dolor.</h3> */}
                    <p className=' font-montserrat font-[600] text-center py-2'>Pasja</p>
                </div>
            </div>

            </div>
        </div>

        <div>
        <div className=' imageWrapper max-w-[500px] lg:max-w-full mx-auto lg:w-full space-y-2 relative top-[50%] translate-y-[-50%]'>
            <div className=' imageLine w-1/3 mx-auto bg-black h-[2px]'></div>
            {/* <div className=' w-full  aspect-square bg-black rounded-[40px]'></div> */}
            <div> <img src={selfImage} alt="headingImage"  className=' w-full object-cover object-top rounded-[40px] aspect-square shadow-[0px_0px_20px_0px] shadow-black/10 '/></div>
            <div className=' imageLine w-1/3 mx-auto bg-black h-[2px]'></div>
        </div>
        </div>

    </div>
  )
}

export default Header