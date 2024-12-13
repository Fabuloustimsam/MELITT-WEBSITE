import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='flex w-full  h-full'>
        <div className='w-full h-full py-10 px-16 gap-10'>
            <h1 className='font-thin text-9xl '>CONTACT US</h1>
            <h2 className='font-mono text-2xl py-20'>Need to get Styled for your big day?</h2>
            <h3 className='font-mono font-bold  text-xl text-slate-600'>Contact us now.</h3>
            </div>
         <form className="w-full text-slate-500 py-16 font-mono font-thin text-2xl h-full px-8 gap-5 flex flex-col" action="" method="POST">
      
        <div className="text-black">Name <span className="text-slate-500">( required )</span></div>
        <div className="flex gap-5">
          <div>
            <div className="text-black">First Name</div>
            <input type="text"id="firstName" name="firstName"className="rounded-3xl h-12 border border-black bg-transparent px-2"required/>
          </div>
          <div>
            <div className="text-black">Last Name</div>
            <input type="text"id="lastName" name="lastName" className="rounded-3xl h-12 border border-black bg-transparent px-2"required />
          </div>
        </div>

        <div className="w-full">
          <div className="text-black pb-2">Email <span className="text-slate-500">( required )</span>
          </div>
          <input 
            className="w-full border border-black bg-transparent rounded-3xl h-12 px-2"type="email" id="email"name="email" placeholder="Enter your email" required/>
        </div>

        <div>
          <div className="text-black pb-2">
            Message <span className="text-slate-500 ">( required )</span>
          </div>
          <textarea className="w-full border border-black bg-transparent rounded-3xl h-32 px-2" id="message" name="message" placeholder="Enter your message" required/>
        </div>

        <button type="submit" className="text-left hover:bg-blue-900 bg-blue-950 w-fit h-fit px-16 py-8 rounded-3xl text-slate-200">Send</button>
      </form>

    </div>
    </>
    
  )
}

export default Contact