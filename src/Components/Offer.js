import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Offer = () => {
    return (
        <div className=' lg:mx-28  my-20'>
            <div className=' lg:flex block justify-between items-center gap-16 '>

                <div className=' p-10  w-[384px]  shadow-md mx-auto'>
                    <h5 className=' text-2xl font-semibold'>Free</h5>
                    <h2 className=' text-3xl'><span className=' font-bold'>£0</span> / month</h2>
                    <div className=' my-8'>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-primary' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2 my-2'><AiOutlineCheckCircle className=' text-primary' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-primary ' /> Lorem ipsum dolor</p>
                    </div>
                    <div>
                        <button className=' text-primary w-full rounded py-2  hover:bg-primary hover:text-white bg-slate-100 mb-4'>Sign up</button>
                    </div>
                </div>

                <div className=' bg-primary p-10 h-[400px] w-[400px] lg:w-[384px] text-white shadow-md rounded my-10 mx-auto '>
                    <button className=' text-white bg-accent px-4 py-1 mb-4 rounded'>Most popular</button>
                    <h5 className=' text-2xl font-semibold'>Standard</h5>
                    <h2 className=' text-3xl'><span className=' font-bold'>£0</span> / month</h2>
                    <div className='my-8'>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-white' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2 my-2'><AiOutlineCheckCircle className=' text-white' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-white' /> Lorem ipsum dolor</p>
                    </div>
                    <div>
                        <button className=' text-primary w-full rounded py-2 bg-white'>Sign up</button>
                    </div>
                </div>

                <div className='p-10 w-[384px] mx-auto shadow-md'>
                    <h5 className=' text-2xl font-semibold '>Free</h5>
                    <h2 className=' text-3xl'><span className=' font-bold'>£0</span> / month</h2>
                    <div className='my-8'>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-primary' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2 my-2'><AiOutlineCheckCircle className=' text-primary' /> Lorem ipsum dolor</p>
                        <p className=' flex items-center gap-2'><AiOutlineCheckCircle className=' text-primary' /> Lorem ipsum dolor</p>
                    </div>
                    <div>
                        <button className=' text-primary w-full rounded py-2 hover:bg-primary hover:text-white mb-4 bg-slate-100'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;