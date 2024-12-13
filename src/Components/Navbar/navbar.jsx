import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="bg-slate-200 w-full border fixed top-0 left-0 z-50 h-28 text-black shadow-md">
        <div className="flex justify-between text-3xl font-mono font-semibold items-center px-14 h-full">
        <div className="font-bold text-4xl w-fit h-fit cursor-pointer flex items-center justify-center overflow-hidden">
            MELITT
</div>

          <div className="flex gap-8">
            <a href='my-project\src\Components\About\About.jsx' className="cursor-pointer">About</a>
            <div className="cursor-pointer">Services</div>
            <div className="cursor-pointer">Contact us</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
