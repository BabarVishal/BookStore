import React from 'react';

function Navbar() {
  return (
    <>
      <div className="navbar fixed top-0 left-0 right-0 bg-base-100 z-10">
        <div className="navbar-start">
          {/* Dropdown menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
              <li><a href='/'>Home</a></li>
              <li><a href='/contact'>Contact</a></li>
              <li><a href='/Cours'>Course</a></li>
              <li><a href='/About'>About</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">bookStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
              <li><a href='/contact'>Contact</a></li>
              <li><a href='/Cours'>Course</a></li>
              <li><a href='/About'>About</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className='hidden md:block'>
            <div className="form-control">
              <input type="text" placeholder="Search" className=" mr-4 input input-bordered w-24 md:w-auto " />
            </div>
          </div>
          <a className="btn" href='/Login'>Login</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
