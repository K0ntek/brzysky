import React from 'react'
import { MdPushPin, MdArrowOutward} from "react-icons/md";
import { PiMapPinAreaLight } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";

const Offer = () => {

    const offer = [
        {
            image: 'https://homesell.pl/imgtmpv2/100/237/174/f398b434v1_c293035e695e5d35e0c2b7db4017abfb.jpg',
            city: 'Cieszanów',
            title: 'Nowoczesny dom z potencjałem w Cieszanowie',
            price: '449 000 PLN',
            meters: '170 m2',
            pricePerMeter: '2 641,18 PLN / m2'
        },
        {
            image: 'https://homesell.pl/imgtmpv2/100/237/174/f398b434v1_c293035e695e5d35e0c2b7db4017abfb.jpg',
            city: 'Cieszanów',
            title: 'Nowoczesny dom z potencjałem w Cieszanowie',
            price: '449 000 PLN',
            meters: '170 m2',
            pricePerMeter: '2 641,18 PLN / m2'
        },
        {
            image: 'https://homesell.pl/imgtmpv2/100/237/174/f398b434v1_c293035e695e5d35e0c2b7db4017abfb.jpg',
            city: 'Cieszanów',
            title: 'Nowoczesny dom z potencjałem w Cieszanowie',
            price: '449 000 PLN',
            meters: '170 m2',
            pricePerMeter: '2 641,18 PLN / m2'
        },
        {
            image: 'https://homesell.pl/imgtmpv2/100/237/174/f398b434v1_c293035e695e5d35e0c2b7db4017abfb.jpg',
            city: 'Cieszanów',
            title: 'Nowoczesny dom z potencjałem w Cieszanowie',
            price: '449 000 PLN',
            meters: '170 m2',
            pricePerMeter: '2 641,18 PLN / m2'
        },
        {
            image: 'https://homesell.pl/imgtmpv2/100/237/174/f398b434v1_c293035e695e5d35e0c2b7db4017abfb.jpg',
            city: 'Cieszanów',
            title: 'Nowoczesny dom z potencjałem w Cieszanowie',
            price: '449 000 PLN',
            meters: '170 m2',
            pricePerMeter: '2 641,18 PLN / m2'
        },
    ]

  return (
    <div id='offer'>
        <div className=' ml-10'>
        <h2 className=' font-montserrat text-xl font-[600] tracking-tight
                                bg-gradient-to-r from-[#cacaca] to-[#222]
                                inline-block text-transparent bg-clip-text uppercase'>OFERTA </h2>
                <h1 className=' font-montserrat text-3xl md:text-5xl font-[700] mt-1 mb-6 uppercase'>MOJA OFERTA</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offer.map((offerElement, i)=>{
                return(
                    <a target='blank' href='https://homesell.pl/dom-sprzedaz-170m2-449000pln-cieszanow-podkarpackie,10/15313/ODS'>
                        <div className=' relative rounded-3xl shadow-[0px_0px_10px_0px] shadow-black/20 font-montserrat font-[600] bg-[#f5f5f5] hover:bg-[#f0f0f0] group transition-all duration-150 cursor-default'>
                        <img src={offerElement.image} alt="" className=' aspect-video object-cover rounded-3xl relative group-hover:-mt-2 transition-all duration-150' />

                        <div className="p-5 pb-[50px] space-y-2">
                                <div className="flex space-x-1">
                                    <MdPushPin className=' relative top-1 text-[#ff9352]'/>
                                    <h2 className=''>{offerElement.city}</h2>
                                </div>

                                <h1 className='text-xl'>{offerElement.title}</h1>
                                <h2 className=' text-xl text-[#ff9352]'>{offerElement.price}</h2>

                                <div className="grid grid-cols-2">
                                    <div className=' flex space-x-1 justify-center'>
                                        <PiMapPinAreaLight className=' relative top-1 text-[#ff9352]'/>
                                        <h2 className=' text-center'>{offerElement.meters}</h2>
                                    </div>

                                    <div className=' flex space-x-1 justify-center'>
                                        <LiaCoinsSolid className=' relative top-1 text-[#ff9352]'/>
                                        <h2 className=' text-center'>{offerElement.pricePerMeter}</h2>
                                    </div>
                                </div>

                                {/* <div className="mx-auto justify-center text-center">
                                    <button className=' py-2 text-white bg-zinc-950 px-4 hover:tracking-widest hover:bg-[#ff9352] transition-all duration-150 group-hover:mt-2'>ZOBACZ</button>
                                </div> */}

                            <div className="absolute bottom-2 right-5">
                                <div className=' flex group'>
                                    <div className=' overflow-hidden'><p className=' text-[12px] relative left-[100%] group-hover:left-0 transition-all duration-150'>ZOBACZ</p></div>
                                    <MdArrowOutward className=' text-2xl group-hover:text-[#ff9352] transition-all duration-150'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Offer