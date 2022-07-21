import React from 'react';

const Contact = () => {
    return (
        <div className=' mx-auto my-28 lg:w-[760px] w-[340px]  text-white'>
            <div className=' bg-secondary rounded-lg p-10'>
                <form >
                    <div className=' flex gap-8'>
                        <div className=' block'>
                            <label className='block mb-2' htmlFor="">First name</label>
                            <input className=' lg:w-[320px] w-full h-[50px] rounded pl-4 text-primary' type="text" name="name" id="" placeholder='Shakiba' />
                        </div>

                        <div className=' block'>
                            <label className='block mb-2' htmlFor="">Last name</label>
                            <input className=' lg:w-[320px] w-full h-[50px] rounded pl-4 text-primary' type="text" name="name" id="" placeholder='Alam' />
                        </div>
                    </div>
                    <div className='my-5'>
                        <label className=' block mb-2' htmlFor="">Email address</label>
                        <input className=' w-full h-[50px] text-primary rounded pl-4' type="email" name="email" id="" placeholder='shakibaalam092@gmail.com' />
                    </div>

                    <div>
                        <label className=' block mb-2' htmlFor="">Your message</label>
                        <textarea type="text" className=' w-full h-[100px] text-primary rounded p-4' placeholder='Enter your message' />
                    </div>

                    <div className=' flex justify-end '>
                        <button className=' bg-primary px-5 py-2 my-4 rounded'>Submit message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;