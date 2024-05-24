import React from 'react';
import aboutusimage from '../../assets/aboutusimage.png';
import './About.css';

const About = () => {
  return (
    <div className="bg">
      <div className="d-flex flex-row justify-content-center container container1">
        <div className="about-con">
          <h1 className="heading">About Us</h1>
          <p className="para1">We are a blend of experts in diverse technologies, working for widely known organizations for nearly two decades in respective domains, guiding and mentoring people to accomplish their purpose.We are a blend of experts in diverse technologies, working for widely known organizations for nearly two decades in respective domains, guiding and mentoring people to accomplish their purpose.</p>
        </div>
        <img src={aboutusimage} className="img"/>
      </div>
      <div className="about-container">
        <h1 className="heading">Vision</h1>
        <p className="para">To manifest right connect's in an individual towards flourishment</p>
      </div>
      <div className="about-container">
        <h1 className="heading">Mission</h1>
        <p className="para">Bridging the connections with the experiential knowledge acquired by the professionals in the industry.</p>
      </div>
      <div className="about-container">
        <h1 className="heading">Objectives</h1>
        <ul className="Obj-type">
          <li className="para">Reviving the lives towards the path of enrichment.</li>
          <li className="para">Uplifting the spirits towards the heights of enlightment.</li>
          <li className="para">Leading the aspirants towards the world with excitement.</li>
          <li className="para">Coaching the enthusiasts for greater achievement.</li>
          <li className="para">Rebuilding the foundations for progressive advancement.</li>
          <li className="para">Restoring the focus for immense knowledge enrichment.</li>
          <li className="para">Connecting the right spots towards the purpose fulfillment.</li>
        </ul>
      </div>
      <div className="about-container">
        <h1 className="heading">Benefits</h1>
        <ul className="Obj-type">
          <li className="para">Individuals of great caliber are fabricated.</li>
          <li className="para">Teachers accredited for their perseverance.</li>
          <li className="para">Colleges would be spoken of their demonstrated vision.</li>
          <li className="para">Societies crowded with high standard ethics and behaviour.</li>
          <li className="para">Families built with substantial respect and honour.</li>
          <li className="para">Organizations can employ make ready professionals.</li>
          <li className="para">Nation would be blessed with great visionary leaders.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
