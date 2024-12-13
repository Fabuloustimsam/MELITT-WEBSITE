import React from 'react'

const footer = () => {
  return (
    <>
    <div className='border-t w-full h-64 justify-between flex gap-24 py-8 px-7 bg-transparent'>
        <div className='flex-col h-full w-full items-center flex gap-24'>
            <h1 className='font-mono cursor-pointer text-7xl'>MELITT</h1>
            <h3 className='font-mono cursor-not-allowed'>delivery available worldwide..........</h3>
        </div>

        <div className='w-full h-full text-center gap-8  justify-center items-center flex '>
            <a className='cursor-pointer'><img className='w-10 rounded-full h-10' src="/assets/Twitter_new_X_logo.png" alt="" href="https://x.com/melittwears/status/1807907923248447738?s=46&t=2K-la5B6mgvePcViopaGIg"/></a>
            <a className='h-10 w-10 cursor-pointer overflow-hidden rounded-full'><img className='w-10 rounded-full h-10 object-cover' src="/assets/download.png" alt="" href="https://wa.me/2349071533615" /></a>
            <a className='cursor-pointer'><img className='w-10 rounded-full object-cover h-10' src="/assets/128px-Instagram-Icon.png" alt="" href="https://www.instagram.com/melittwears/?igsh=MTB0enNtenJxbHRjcw%3D%3D#" /></a>
        </div>

        <div className='w-full h-full text-center'>
            <button className='bg-blue-600 px-5 py-2 rounded-3xl text-white font-bold shadow-sm hover:bg-blue-950 transition shadow-black'>Shop now</button>
        </div>
        
    </div>
    </>
    
  )
}

export default footer