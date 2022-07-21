import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaRegCopyright } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { RiInboxLine } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import logo from '../image/Combined Shape Copy 2.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' bg-secondary text-white px-20 pt-20 pb-8'>
            <div className=' grid grid-cols-1 lg:grid-cols-5 mb-16 gap-10'>
                <div className=' lg:mr-5'>
                    <div className='flex gap-2 mb-5 text-lg font-bold'>
                        <img src={logo} alt="" />
                        <span>sodo</span>
                    </div>

                    <p>We support programs that create advancement for people</p>

                    <div className=' flex mt-6'>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex mr-3'><BsFacebook className=' text-lg text-white' /></p>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex mr-3'><BsTwitter className=' text-lg text-white' /></p>
                        <p className=' w-10 h-10 border-2 rounded-full border-primary justify-center items-center flex'><FaInstagramSquare className=' text-lg text-white' /></p>
                    </div>
                </div>
                <div className=' lg:ml-5'>
                    <h4 className=' text-lg font-bold mb-4'>Useful links</h4>
                    <p className=' mb-3'>About Us</p>
                    <p className=' mb-3'>Privacy Policy</p>
                    <p className=' mb-3'>Terms & condition</p>
                    <p className=' mb-3'> Student spotlight</p>
                </div>
                <div>
                    <h4 className=' text-lg font-bold mb-4'>Learning</h4>
                    <p className=' mb-3'>Business Strategy</p>
                    <p className=' mb-3'> Become A Teacher</p>
                    <p className=' mb-3'> Project Management</p>
                    <p className=' mb-3'>Membership</p>
                </div>
                <div>
                    <h4 className=' text-lg font-bold mb-4'>Contact Us</h4>
                    <p className=' mb-3 flex items-center'><FaPhoneVolume className=' text-primary text-lg mr-1 ' /> +91 458 654 528</p>
                    <p className=' mb-3  flex items-center'><RiInboxLine className=' text-primary text-xl mr-2 ' />info@example.com</p>
                    <p className=' mb-3  flex'><MdLocationOn className=' text-primary text-xl mr-2 ' />PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                </div>
                <div className=''>
                    <button className='px-5 py-2 rounded bg-white text-neutral flex justify-center items-center gap-2 font-bold text-xl mb-8'><AiFillApple /> App store</button>
                    <button className='px-5 py-2 rounded bg-white text-neutral flex justify-center items-center gap-2 font-bold text-xl'><FaGooglePlay /> Play store</button>
                </div>

            </div>
            <div className='lg:block hidden'>
                <hr />
                <p className=' my-5 flex justify-center items-center'><FaRegCopyright className=' text-sm mr-2' /> Copyright {year} All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;