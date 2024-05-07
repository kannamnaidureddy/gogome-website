import './Background.css';
import video1 from '../../assets/video1.mp4';
import roadmap from '../../assets/roadmap.png';
import aboutimage from '../../assets/aboutimage.png';
import homepagethird from '../../assets/homepagethird.png';

const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    } else if (heroCount === 0) {
        return <img src={roadmap} className='background1 fade-in' alt=''/>
    } else if (heroCount === 1) {
        return <img src={aboutimage} className='background2 fade-in' alt=''/>
    } else if (heroCount === 2) {
        return <img src={homepagethird} className='background3 fade-in' alt=''/>
    }
}

export default Background;
