import React from 'react'
import logo from '../../public/homesell.png'
import { Link } from 'react-scroll'

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

  return (
    <div className=' w-full bg-[rgba(253,253,253)] lg:flex py-3 fixed top-0 z-[99]'>
        <div className=' lg:ms-8'>
            {/* <h1 className=' font-mont text-3xl font-[600] tracking-[2px] text-zinc-950'>BRZ<span className=' text-[#48e9ae]'>Y</span>SK<span className=' text-[#48e9ae]'>Y</span></h1> */}
            <img src={logo} alt='logo' className='w-[180px] relative left-[50%] translate-x-[-50%] lg:static lg:left-0 lg:translate-x-0' />
        </div>
        <div className='mx-auto'>
        <div className=' relative top-[50%] translate-y-[-50%]'>
            <ul className=' hidden absolute w-full lg:static lg:flex bg-[rgba(253,253,253)]  text-zinc-950'>
                {navElements.map((element, i)=>{
                    return(
                        <Link key={i} to={element.link} smooth={true} spy={true} offset={-70}>
                            <div key={i} className=' font-[500] cursor-pointer w-fit group mx-2 p-1 hover:text-[#8d4929] rounded-3xl'>
                            <li> {element.name} </li>
                        {/* <div className=' w-0 h-[2px] group-hover:w-1/2 bg-black'></div> */}
                        </div>
                        </Link>
                    )
                })}
            </ul>
        </div>
        </div>
            <div>
                <Link to='report' smooth={true} spy={true}>
                    <div className=' absolute top-3 right-0 lg:static lg:top-0'>
                        <button className=' bg-zinc-950 text-[#eee] font-[500] font-mont px-3 py-2 rounded-xl me-8'>ZGŁOŚ NIERUCHOMOŚĆ</button>
                    </div>
                </Link>
            </div>
    </div>
  )
}

export default Navbar