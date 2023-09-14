import React from 'react'
import "./About.css"
import gif from "../../assets/3.png"

const About = () => {
  return (
    <section className="about-us" id='about'>
      <div className="container">

        <div className="about-us-content-div">
          <div className="about-us-heading">
            <h3 className='about-subtitle'>About Us</h3>
          </div>

          <div className="about-title-div">
            <h1 className='about-title'>Who we're</h1>
            <p className="about-us-content">
              We are Indian soil based ITpreneur serving globally with unique products and services. Our main focus is on delivering commitments with predefined time frame. We are well-known Executors among our circle who have created some of the pre-eminent Android/IOS Applications.We design and create products in accordance with the need of our subscribers and clients. We make it center point where creativity and cost effectiveness along with finest quality P & S encounter parallelly. Our well qualified team manages class and mass simultaneously to offer premium outcomes. Be its cost effectiveness, maintain top quality or practicing global standards, we do it with all our in-house expertise.
            </p>
          </div>

          <div className="mission-vision-div">
            <h1>Our Mission</h1>
            <p className="about-mission-vision">
              To enable our clients to uncover actionable insights at enterprise scale.
            </p>
            <h1>Our Vision</h1>
            <p className='about-mission-vision'>To empower the global Casepoint community with intelligent technology while achieving meaningful experiences and outcomes.</p>
          </div>
        </div>

        <div className="about-img-div">
          <figure className="about-figure">
            <img src={gif} alt="about-us-info" className='img-cover'/>
          </figure>
        </div>

      </div>
    </section>
  )
}

export default About