import React from 'react';
import './Banner.css'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Particles from "react-tsparticles";

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="banner">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />


            <div className=" margin-change row">

                <div className="size col-md-8" data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <span className='span-size'>We have all the</span>
                    <p className='span-size'>Best Quality Shoes Collection</p>


                    <p className='p-size'> <small>We Ship Over 30 Million Phone Around The World So Please Place The Order.Find The Perfect Shoes For Those Closest To You So Please Place The Order.</small>

                    </p>
                    <Link to='/moreitems' className="item" >Exclusive Shoes <FontAwesomeIcon icon={faSignInAlt} /></Link>
                </div>
            </div>
            <div className="col-md-5 d-sm-block d-none margin-change-2" data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <Typed
                    className=" type--text" className="typed"
                    strings={[
                        'BEST SHOES',
                        ' FAST DELIVERY!',
                        'PRIMIUM $ IMPORTED SHOES']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                >

                </Typed>
            </div>

        </div>
    );
};

export default Banner;