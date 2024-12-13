import React from 'react'


const Landing = () => {
  return (
    <>
    <div className='h-screen w-full px-14'>
        <div className='bg-white bg-opacity-50 relative w-full h-full'>
            <img className='landingImg bg-cover z-0 relative inset-0 w-full h-full object-cover' src="/assets/pexels-heyho-6899535.jpg" alt="" />
            <div className="absolute inset-0 flex justify-center items-center z-10">
                 <h1 className="font-bold text-7xl font-serif shadow-gray py-9 shadow-2xl text-white text-center">
                   WELCOME TO MELITT MEGASTORE
                </h1>
            </div>

        </div>
        
    </div>
    </>
  )
}
export default Landing