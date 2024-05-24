import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../../Components/Background/Background";
import Hero from "../../Components/Hero/Hero";



import './Home.css';

const Home = () => {
    let heroData = [
        { text1: 'John 3:16 - For God so loved the world that he gave his one and only Son, that whoever believes ', text2: 'Jeremiah 29:11 - For I know the plans I have for you,” declares the LORD, “plans to prosper you ', color1: '#FF5733', color2: '#3498DB' }, // Specify color for text1 and text2
        { text1: 'Romans 8:28 - And we know that in all things God works for the good of those who love him', text2: 'Philippians 4:13 - I can do everything through him who gives me strength.', color1: '#FFC300', color2: '#9B59B6' }, // Specify color for text1 and text2
        { text1: 'Find and read over 150 versions and 50 languages of the Bible, including the verse of the day.', text2: 'Explore Bible study tools, articles, podcasts, and more to grow your faith.', color1: '#C70039', color2: '#2ECC71' }, // Specify color for text1 and text2
    ];

    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroCount((count) => (count === 2 ? 0 : count + 1));
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    

    return (
        <div>
            
            
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
           
        </div>
    );
}

export default Home;
