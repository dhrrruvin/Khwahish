import React from 'react'
import "./Home.css"
import gif from "../../assets/1.gif"

const Home = () => {
  return (

    <section className="section introduction" id='home'>
        <div className="container">

            <div className="intro-img-div">
                <figure className="intro-figure">
                    <img src={gif} alt="gif" className='img-cover'/>
                </figure>
            </div>

            <div className="intro-content-div">
                <div className="intro-welcome-div">
                    <h1 className="h1 intro-welcome">Welcome to</h1>
                    <h1 className="h1 intro-welcome">Khwahish Infotech</h1>
                </div>

                <div className="content-div">
                    <p className="welcome-content">
                        Khwahish Infotech is a synonym of celebrating different perspectives and creating unique tools & services by adopting latest techno means. We primarily deep dive into the development of Android / IOS Applications along with the majority of its forward integration.Products and services both are part of our esteemed portfolio. We believe in a decentralized working environment with a single source of command to achieve predefined objectives. Our work ethics and cultural values have brought us this far. The more we grow, the more we learn and our learnings help us to stay grounded. Technological advancements inspire Khwahish Infotech to always create and level up things.
                    </p>
                </div>
            </div>

        </div>
    </section>

  )
}

export default Home