import React from 'react'

const Product = () => {
  return (
    <>
    <div className='justify-center w-full h-full'>
        <div className='justify-center text-center font-extrabold text-7xl py-24 text-black font-serif'>FEATURED PRODUCTS</div>
        <div className='flex flex-wrap justify-center  gap-36'>
            <div className='flex flex-col text-center'>
                <div className="w-72 h-72 bg-center flex flex-col rounded-full bg-black overflow-hidden">
                <img className="w-full h-full object-cover" src="/assets/cap_093226.png" alt="Baseball cap" />
                </div>
                <div className="bg-transparent text-black text-3xl w-full text-center py-2 font-bold">BASEBALL CAP</div>
                <div className='price bg-transparent text-black text-xl w-full text-center py-2 font-bold'>#9,000</div>
                <button className="bg-black hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Order Now</button>
            </div>
            <div className='flex flex-col text-center'>
                <div className="w-72 h-72 bg-center flex flex-col rounded-full bg-black overflow-hidden">
                <img className="w-full h-full object-cover" src="/assets/cap_093226.png" alt="Baseball cap" />
                </div>
                <div className="bg-transparent text-black text-3xl w-full text-center py-2 font-bold">BASEBALL CAP</div>
                <div className='price bg-transparent text-black text-xl w-full text-center py-2 font-bold'>#9,000</div>
                <button className="bg-black hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Order Now</button>
            </div>
            <div className='flex flex-col text-center'>
                <div className="w-72 h-72 bg-center flex flex-col rounded-full bg-black overflow-hidden">
                <img className="w-full h-full object-cover" src="/assets/cap_093226.png" alt="Baseball cap" />
                </div>
                <div className="bg-transparent text-black text-3xl w-full text-center py-2 font-bold">BASEBALL CAP</div>
                <div className='price bg-transparent text-black text-xl w-full text-center py-2 font-bold'>#9,000</div>
                <button className="bg-black hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Order Now</button>
            </div>
            <div className='flex flex-col text-center'>
                <div className="w-72 h-72 bg-center flex flex-col rounded-full bg-black overflow-hidden">
                <img className="w-full h-full object-cover" src="/assets/cap_093226.png" alt="Baseball cap" />
                </div>
                <div className="bg-transparent text-black text-3xl w-full text-center py-2 font-bold">BASEBALL CAP</div>
                <div className='price bg-transparent text-black text-xl w-full text-center py-2 font-bold'>#9,000</div>
                <button className="bg-black hover:bg-slack-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Order Now</button>
            </div>
            <div className='flex flex-col text-center'>
                <div className="w-72 h-72 bg-center flex flex-col rounded-full bg-black overflow-hidden">
                <img className="w-full h-full object-cover" src="/assets/cap_093226.png" alt="Baseball cap" />
                </div>
                <div className="bg-transparent text-black text-3xl w-full text-center py-2 font-bold">BASEBALL CAP</div>
                <div className='price bg-transparent text-black text-xl w-full text-center py-2 font-bold'>#9,000</div>
                <button className="bg-black hover:bg-slate-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Order Now</button>
            </div>
        </div>
        <div className='text-center my-14 w-full h-full'>
            <button className="bg-black border border-white hover:bg-slate-700 text-white font-semibold py-5 px-6 rounded-3xl shadow-md hover:shadow-lg transition duration-300">CHECK STORE</button>
        </div>

    </div>

    </>
    
  )
}

export default Product