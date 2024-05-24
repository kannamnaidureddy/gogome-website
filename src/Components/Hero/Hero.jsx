import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";
import './Hero.css'; // Import custom CSS for Hero component

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
    const { text1, text2, color1, color2 } = heroData;
    
    
    return (
        <div className='hero'>
            <div className="hero-text">
                <p style={{ color: color1 }}>{text1}</p> {/* Apply color1 to text1 */}
                <p style={{ color: color2 }}>{text2}</p> {/* Apply color2 to text2 */}
            </div>

            <div className='hero-dot-play'>
                <ul className='hero-dots'>
                    <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                    <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
                </ul>
        
                <div className='hero-play'>
                    <Button variant="primary" onClick={() => setPlayStatus(!playStatus)}>
                        <FontAwesomeIcon icon={playStatus ? faPause : faPlay} /> {/* Using FontAwesome icons */}
                        <span className="ml-2">See the video</span>
                    </Button>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;
