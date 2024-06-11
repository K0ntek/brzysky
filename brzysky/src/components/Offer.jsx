import React from 'react'
import { PiPuzzlePieceThin } from "react-icons/pi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GoGraph } from "react-icons/go";

const Offer = () => {

  const offerElements = [
    {
      name: 'WYDAJNOŚĆ',
      icon: <PiPuzzlePieceThin />
    },
    {
      name: 'PROFESJONALIZM',
      icon: <GoGraph />
    },
    {
      name: 'ZAUFANIE',
      icon: <VscWorkspaceTrusted />
    },
  ]

  return (
    <div className=' w-full mx-auto bg-zinc-950 py-10 mt-8' id='about'>
          <div className='py-7 mx-auto rounded-[40px]'>
              <h1 className=' text-5xl font-inter font-[400] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#d6d6d6] to-[white] my-8'>CO OFERUJĘ ?</h1>
              <div className="flex w-full flex-wrap mx-auto justify-center gap-4">
                  {offerElements.map((element, i)=>{
                    return(
                      <div className=' w-[200px] aspect-square text-white text-center bg-[rgba(183,134,97,.1)] rounded-3xl'>
                        {/* bg-[rgba(183,134,97,.05)] */}
                          <div className=' relative top-[50%] translate-y-[-50%] space-y-5'>
                              <div className="w-full mx-auto">
                                <h1 className=' text-8xl justify-center mx-auto text-center w-fit text-[#b78661]'>{element.icon}</h1>
                              </div>
                              <h1 className=' text-xl'>{element.name}</h1>
                          </div>
                      </div>
                    )
                  })}
              </div>
          </div>
    </div>
  )
}

export default Offer