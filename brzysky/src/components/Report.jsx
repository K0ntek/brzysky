import React from 'react'

const Report = () => {
  return (
    <div id='report' className='w-full py-8 bg-[#ececec] text-black'>
      <p className=' font-mont text-center mb-3 text-[#b78661]'>Zgłoś nieruchomość</p>
      <h1 className=' font-mont text-center text-5xl mb-8'>SKONTAKTUJ SIĘ ZE MNĄ!</h1>
      <div className=" max-w-[800px] mx-auto px-5">
          <form action="https://formsubmit.co/062f696d78fa8b283b149c89b9daa3f0" method="POST">
              <div className='grid grid-cols-2 gap-4'>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='IMIĘ' type="text" name="name" id="name" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='NAZWISKO' type="text" name="surname" id="surname" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='NUMER TELEFONU' type="number" name="phoneNumber" id="phoneNumber" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='E-MAIL' type="email" name="mail" id="mail" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='LOKALIZACJA' type="text" name="localisation" id="localisation" /></div>
              </div>

              {/* <div className=' text-center my-4 w-full'>
                    <textarea name="message" id="message" rows={8} className='w-full rounded-xl bg-transparent border-[1px] border-black py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='WIADOMOŚĆ'></textarea>
              </div> */}

                    <div className=' mx-auto text-center my-4'>
                      <button type="submit" className='bg-[#b78661] text-black py-2 px-6 text-xl'>WYŚLIJ</button>
                    </div>
          </form>
      </div>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  )
}

export default Report