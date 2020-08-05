import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useSpring, animated, config } from 'react-spring';
import Aos from "aos";
import "aos/dist/aos.css";

function Info() {
    const fade = useSpring({
        from: {
            opacity: 0, transform: 'translateY(-50%)',
        },
        to: {
            opacity: 1, transform: 'translateY(0%)'
        },
    })

    const [y, setY] = useSpring(() => ({
        immediate: false,
        config: config.gentle,
        y: 0,
        onFrame: props => {
            window.scroll(0, props.y);
        }

    }));

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })


    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);


    return (<div className="lg:mt-40 lg:mx-64 lg:text-2xl my-10 " >
        <animated.div className="text-center" style={fade}>
            <h1 className="  text-5xl mb font-semibold  " >Andrew Liu</h1>
            <h2> Software Engineer</h2>
            <h2>University of North Carolina at Charlotte</h2>
<h2>            <a  href={`mailto:aliu4@uncc.edu`}className="hover:text-teal-500 transition duration-500">aliu4@uncc.edu</a></h2>
            <h2>Programing Skills: Java, Android, PHP, Python, SQL, Angular, React, Vue</h2>

            <div className="p-2 ">
                <a className="hover:text-teal-500 transition duration-500" href="https://github.com/aliu47">
                    <FontAwesomeIcon
                        icon={faGithub}
                        size="3x" />
                </a>
                <span className="p-3" />
                <a className="hover:text-teal-500 transition duration-500" href="https://www.linkedin.com/in/andrew-liu-964b15126/">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        size="3x" />
                </a>
            </div>
        </animated.div>

        <div data-aos="flip" className="my-20 grid lg:grid-cols-4 gap-4 grid-cols-2 m-4">
            <button className="transition duration-500 shadow-xl bg-transparent hover:bg-teal-500 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-2 focus:outline-none"
                onClick={() => {
                    setY({ y: 600 })
                }}
            >
                About Me</button>
            <button className="transition duration-500 shadow-xl bg-transparent hover:bg-teal-500 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-2 focus:outline-none"
                onClick={() => {
                    setY({y:800})
                }}
            >
                Resume</button>
            <button className="transition duration-500 shadow-xl bg-transparent hover:bg-teal-500 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-2 focus:outline-none"
               onClick={() => {
                setY({ y: 2100 })
            }}>
                Projects</button>
            <button className="transition duration-500 shadow-xl bg-transparent hover:bg-teal-500 text-teal-dark font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mr-2 focus:outline-none"
               onClick={() => {
                setY({ y: 800 })
            }}>
                Contact</button>
        </div>
        <div onClick={() => set(state => !state)}>
      {/* <animated.div className="h-40 w-40 bg-teal-700" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <animated.div className="bg-orange-400 w-40 h-0" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} /> */}
    </div>

    </div >)
}

export default Info