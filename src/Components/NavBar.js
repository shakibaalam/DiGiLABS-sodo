import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/Combined Shape Copy 2.png'

const NavBar = () => {
    return (
        <div className=''>
            <div className='px-28  h-[80px] pt-4 text-neutral font-bold text-lg hidden lg:block'>
                <div className=' flex justify-between items-center'>
                    <div className=' flex items-center gap-5'>
                        <div className='flex gap-2'>
                            <img src={logo} alt="" />
                            <span>sodo</span>
                        </div>
                        <div>
                            <ul className=' flex gap-4 '>
                                <Link to=''>About us</Link>
                                <Link to=''>Download</Link>
                                <Link to=''>Contact</Link>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Link to='/login'>Login</Link>
                        <button className=' bg-primary text-white px-5 py-2 rounded ml-4'>Primary section</button>
                    </div>
                </div>
            </div>

            <div className='lg:hidden flex justify-between px-2 text-darkGrey font-bold text-lg'>
                <div className='flex items-center gap-2 navbar-start'>
                    <img src={logo} alt="" />
                    <span>sodo</span>
                </div>
                <div className=' '>
                    <div class="dropdown dropdown-left">
                        <label tabindex="0" class="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            <Link to=''>About us</Link>
                            <Link to=''>Download</Link>
                            <Link to=''>Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;