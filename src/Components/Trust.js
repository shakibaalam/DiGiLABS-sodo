import React from 'react';
import { animated, useSpring } from 'react-spring';
import amazon from "../image/Amazon.png"
import google from "../image/Google.png"
import monzo from "../image/Monzo.png"
import zoopla from "../image/Zoopla.png"

const Trust = () => {
    const styles = useSpring({
        from: { opacity: 0, marginLeft: -400 },
        to: { opacity: 1, marginLeft: 0 },
        config: { duration: 2000 }
    })
    return (
        <div className=' lg:mx-28 '>
            <h4 className=' text-neutral font-bold px-2 text-2xl  my-8'>Trusted by</h4>
            <animated.div style={styles}>
                <div className=' grid lg:grid-cols-4 grid-cols-1 gap-5'>
                    <img className=' mx-auto w-[150px]' src={amazon} alt="" />
                    <img className=' mx-auto w-[150px]' src={google} alt="" />
                    <img className=' mx-auto w-[150px]' src={monzo} alt="" />
                    <img className=' mx-auto w-[150px]' src={zoopla} alt="" />
                </div>
            </animated.div>
        </div>
    );
};

export default Trust;