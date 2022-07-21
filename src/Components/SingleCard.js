import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { RiContactsBook2Line } from 'react-icons/ri';

const SingleCard = ({ d }) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={d.img} alt="" /></figure>

            <div class="card-body">
                <div className=' flex items-center justify-between my-4'>
                    <div>
                        <h4 className=' px-3 py-2 bg-slate-200 rounded text-primary font-bold'>{d.category}</h4>
                    </div>
                    <div>
                        <p className=' font-bold text-lg'>{d.price}</p>
                    </div>
                </div>
                <h2 class=" text-lg text-neutral font-bold my-3">{d.name}</h2>

                <div >
                    <div class="avatar">
                        <div class="w-8 rounded-full">
                            <img src={d.personImg} alt='' />
                        </div>
                        <h4 className='flex items-center justify-between ml-2'>{d.person}</h4>
                    </div>
                </div>
                <hr />
                <div className=' flex justify-between items-center py-4'>
                    <div className=' flex'>
                        <p className=' flex items-center mr-5'><BsPerson className=' text-primary text-lg mr-2' /> {d.like}</p>
                        <p className=' flex items-center'><RiContactsBook2Line className=' text-primary text-lg mr-2' /> {d.chat}</p>
                    </div>
                    <div class="">
                        {
                            d.rating === '5' && <div className=' flex text-lg'>
                                <AiFillStar className=' text-orange-300' />
                                <AiFillStar className=' text-orange-300' />
                                <AiFillStar className=' text-orange-300' />
                                <AiFillStar className=' text-orange-300' />
                                <AiFillStar className=' text-orange-300' />
                            </div>
                        }
                        {
                            d.rating === '4' && <div className=' flex'>
                                <AiFillStar className=' text-orange-300  text-lg' />
                                <AiFillStar className=' text-orange-300  text-lg' />
                                <AiFillStar className=' text-orange-300  text-lg' />
                                <AiFillStar className=' text-orange-300  text-lg' />
                                <BsStarHalf className=' text-orange-300 text-base' />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;