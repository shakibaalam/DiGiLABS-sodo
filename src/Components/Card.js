import React from 'react';
import SingleCard from './SingleCard';
import { animated, useSpring } from 'react-spring';


const Card = () => {
    const styles = useSpring({
        from: { opacity: 0, marginRight: -400 },
        to: { opacity: 1, marginRight: 0 },
        config: { duration: 1000 }
    })
    const data = [
        {
            id: 1,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/03/UJYT73-740x540.jpeg",
            category: "Cooking",
            price: "Free",
            name: "Absolute Beginners Cooking Course",
            person: "Tim Burton",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/HIDA4-150x150.jpg",
            like: "34",
            chat: "10",
            rating: "5"
        },
        {
            id: 2,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/05/VAR94-740x540.jpg",
            category: "Business",
            price: "$29.00",
            name: "Web Design Training with Elementor",
            person: "Devon Koss",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/RIT43-150x150.jpeg",
            like: "6",
            chat: "12",
            rating: "5"
        },
        {
            id: 3,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/03/FOO634-740x540.jpeg",
            category: "cooking",
            price: "$39.00",
            name: "Basic Level Youth Health and Cooking",
            person: "Fred Hyman",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/SMK943-150x150.jpg",
            like: "1",
            chat: "12",
            rating: "5"
        },
        {
            id: 4,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/PRO833-740x540.jpeg",
            category: "Lifestyle",
            price: "Free",
            name: "Drawing and Painting Course for Children",
            person: "Tim Burton",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/HIDA4-150x150.jpg",
            like: "10",
            chat: "14",
            rating: "5"
        },
        {
            id: 5,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/BIRR267-740x540.jpeg",
            category: "Finance",
            price: "$29.00",
            name: "WordPress Beginner to Advanced Course",
            person: "Devon Koss",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/RIT43-150x150.jpeg",
            like: "1",
            chat: "13",
            rating: "5"
        },
        {
            id: 6,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2020/09/BLP08-740x540.jpeg",
            category: "Business",
            price: "Free",
            name: "Complete Digital Marketing Course",
            person: "Tim Burton",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/HIDA4-150x150.jpg",
            like: "25",
            chat: "11",
            rating: "4"
        },
        {
            id: 7,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/03/FOOT733-740x540.jpeg",
            category: "cooking",
            price: "Free",
            name: "Online Healthy Cooking Course",
            person: "Fred Hyman",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/01/SMK943-150x150.jpg",
            like: "6",
            chat: "12",
            rating: "4"
        },
        {
            id: 8,
            img: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2020/09/BKJ83-740x540.jpg",
            category: "Business",
            price: "Free",
            name: "The Ultimate App Making Course",
            person: "Devon Koss",
            personImg: "https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/RIT43-150x150.jpeg",
            like: "2",
            chat: "11",
            rating: "5"
        },
    ]
    return (

        <div className=' lg:px-28 my-28  px-5'>
            <animated.div style={styles}>
                <h2 className=' text-center my-14 text-4xl font-bold text-neutral'>Top Rated Learning Tutorials</h2>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    {
                        data.slice(0, 3).map(d => <SingleCard key={d.id} d={d}></SingleCard>)
                    }
                </div>

                <div className=' text-center mt-10'>
                    <button className=' bg-primary text-white rounded py-3 px-5 mt-10 hover:bg-secondary'>Explore All Courses</button>
                </div>
            </animated.div>
        </div>


    );
};

export default Card;