import React, {useState} from 'react'
import axios from 'axios'

const Report = () => {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')
  const [homeType, setHomeType] = useState('')

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }

  return (
    <div id='report' className='w-full py-8 bg-[#ececec] text-black'>
      {/* <p className=' font-mont text-center mb-3 text-[#b78661]'>Zgłoś nieruchomość</p> */}
      {/* <h1 className=' font-mont text-center text-5xl mb-8'>SKONTAKTUJ SIĘ ZE MNĄ!</h1> */}
      <h1 className=' font-mont text-center text-3xl sm:text-4xl mb-8 px-10 font-[500] uppercase'>Zgłoś nieruchomość</h1>
      <div className=" max-w-[800px] mx-auto px-5">
          <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-4'>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setName(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='IMIĘ' type="text" value={name} id="name" /></div>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setSurname(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='NAZWISKO' type="text" value={surname} id="surname" /></div>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setPhone(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='NUMER TELEFONU' type="number" value={phone} id="phoneNumber" /></div>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setEmail(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='E-MAIL' type="email" value={email} id="mail" /></div>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setLocation(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='LOKALIZACJA' type="text" value={location} id="localisation" /></div>
                    <div className=' mx-auto w-full'> <input onChange={(e) => setHomeType(e.target.value)} className='w-full bg-transparent border-[1px] border-black rounded-xl py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='RODZAJ NIERUCHOMOŚCI' type="text" value={homeType} id="type" /></div>
              </div>

              <div className=' text-center my-4 w-full'>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" rows={8} className='w-full rounded-xl bg-transparent border-[1px] border-black py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='DODATKOWE INFORMACJE'></textarea>
              </div>
              {/* <div className=' text-center my-4 w-full'>
                    <textarea name="message" id="message" rows={8} className='w-full rounded-xl bg-transparent border-[1px] border-black py-2 px-2 focus:outline-none placeholder:text-black/50' placeholder='WIADOMOŚĆ'></textarea>
              </div> */}

                    <div className=' mx-auto text-center my-4'>
                      <button type="submit" className=' rounded-xl w-full bg-[#b78661] text-white py-4 px-6 text-xl hover:bg-[#946c4d] hover:rounded-3xl transition-all duration-150'>WYŚLIJ</button>
                    </div>
          </form>
      </div>
    </div>
  )
}

export default Report
