import React , {useRef, useState } from 'react'
import axios from 'axios';

const Contact = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    //const handleSubmit = async (e) =>{
      //e.preventDefault();

      //emailjs templates
      //const serviceID = 'service_ctjauxn'
      //const templateID = 'template_lls2shr'
      //const publicKey = 'OrU4sSzJwY303AR90'

      //const data = {
        //service_id: serviceID,
        //template_id: templateID,
        //user_id: publicKey,
        //template_params: {
          //user_name: name + " " + surname,
          //user_mail: email,
          //user_phone: phone,
          //message: message,
          //to_name: 'Jakub Kontek'
        //}
      //}

     // try{
        //const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        //console.log(res.data);
        //setName('')
        //setSurname('')
        //setPhone('')
       // setEmail('')
        //setMessage('')
      //} catch (error){
        //console.error(error)
      //}
    //}

  return (
    <div className='w-full py-8 bg-[#b78661] text-white'>-
      {/* <p className=' font-mont text-center mb-3 text-[silver]'>Formularz kontaktowy</p> */}
      <h1 className=' font-mont text-center text-3xl sm:text-4xl mb-8 px-10'>SKONTAKTUJ SIĘ ZE MNĄ!</h1>
      <div className=" max-w-[800px] mx-auto px-5">
          <form>
              <div className='grid grid-cols-2 gap-4'>
                    <div className=' mx-auto w-full'> <input placeholder='IMIĘ' type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' /></div>
                    <div className=' mx-auto w-full'> <input placeholder='NAZWISKO' type="text" value={surname} id="surname" onChange={(e) => setSurname(e.target.value)} className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' /></div>
                    <div className=' mx-auto w-full'> <input placeholder='NUMER TELEFONU' type="number" value={phone} id="phoneNumber" onChange={(e) => setPhone(e.target.value)} className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' /></div>
                    <div className=' mx-auto w-full'> <input placeholder='E-MAIL' type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' /></div>
              </div>

              <div className=' text-center my-4 w-full'>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" rows={8} className='w-full rounded-xl bg-transparent border-[1px] border-white py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='WIADOMOŚĆ'></textarea>
              </div>

                    <div className=' mx-auto text-center'>
                      <button type="submit" className='bg-zinc-950 w-full rounded-xl text-white py-4 px-6 text-xl hover:bg-zinc-900 hover:rounded-3xl transition-all duration-150'>WYŚLIJ</button>
                    </div>
          </form>
      </div>
    </div>
  )
}

export default Contact
