import React from 'react';
import { animated, useSpring } from 'react-spring';


const Banner = () => {
    const styles = useSpring({
        from: { opacity: 0, marginTop: -400 },
        to: { opacity: 1, marginTop: 0 },
        config: { duration: 1000 }
    })

    return (
        <div className=' min-h-screen flex items-center lg:px-28 px-2'>
            <animated.div style={styles}>
                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <p className=' text-primary font-bold'>DEVELOPED BY TO TEACHERS</p>
                        <h2 className=' text-neutral py-3 text-5xl font-bold leading-tight'>Experience a learning platform that take you next level</h2>
                        <p className=''>World-class training and development programs developed by top teachers</p>

                        <div className=' flex gap-5 mt-10'>
                            <button className=' bg-primary text-white px-5 py-2 rounded ml-4'>Primary section</button>

                            <button className=' hover:bg-primary hover:text-white text-primary px-5 py-2 rounded ml-4'>Secondary section</button>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center items-center lg:pl-24 px-5 pt-5 lg:pt-0'>
                            <div>
                                <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" />
                            </div>

                            <div>
                                <img className=' pl-10' src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>

    );
};

export default Banner;