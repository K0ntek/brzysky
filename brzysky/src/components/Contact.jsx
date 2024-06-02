import React from 'react'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9fb48cc8-1091-4ad0-ad46-73ab5d4e06e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  };

  return (
    <div className='w-full py-8 bg-[#b78661] text-white'>
      <p className=' font-mont text-center mb-3 text-[silver]'>Formularz kontaktowy</p>
      <h1 className=' font-mont text-center text-5xl mb-8'>SKONTAKTUJ SIĘ ZE MNĄ!</h1>
      <div className=" max-w-[800px] mx-auto px-5">
          <form action="https://formsubmit.co/062f696d78fa8b283b149c89b9daa3f0" method="POST">
              <div className='grid grid-cols-2 gap-4'>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='IMIĘ' type="text" name="name" id="name" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='NAZWISKO' type="text" name="surname" id="surname" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='NUMER TELEFONU' type="number" name="phoneNumber" id="phoneNumber" /></div>
                    <div className=' mx-auto w-full'> <input className='w-full bg-transparent border-[1px] border-white rounded-xl py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='E-MAIL' type="email" name="mail" id="mail" /></div>
              </div>

              <div className=' text-center my-4 w-full'>
                    <textarea name="message" id="message" rows={8} className='w-full rounded-xl bg-transparent border-[1px] border-white py-2 px-2 focus:outline-none placeholder:text-white/50' placeholder='WIADOMOŚĆ'></textarea>
              </div>

                    <div className=' mx-auto text-center'>
                      <button type="submit" className='bg-zinc-950 text-white py-2 px-6 text-xl'>WYŚLIJ</button>
                    </div>
          </form>
      </div>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </div>
  )
}

export default Contact