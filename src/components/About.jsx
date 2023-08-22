import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import axios from "axios";

import { Link } from 'react-router-dom'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, data }) => (
  
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={data._embedded['wp:featuredmedia'][0].source_url}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {data.title.rendered}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
    //api call
    const [serviceWP, setserviceWP] = useState([])
    useEffect(() => {
      let url = 'https://backend.gr8vilen.com/wp-json/wp/v2/posts/?_embed&categories=8'
      axios.get(url).then((res) => {
        setserviceWP(res.data)
      });
  
    }, [])
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello, I'm a versatile freelancer well-versed in a range of modern technologies. With hands-on experience across diverse domains, I craft solutions that empower innovation. Let's collaborate and turn ideas into reality!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {serviceWP.map((service, index) => {

if (index >= 4) {
  return;
}
          
          return (
            <ServiceCard key={index} index={index} data={service} />
            
          )     
          })}
        
      </div>

      <motion.div
        variants={fadeIn("right", "spring",5 * 0.5, 0.75)}
      >
        <div className="flex flex-wrap gap-10 justify-center mt-10 transition ease-in-out delay-50   ">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card max-w-max hover:-translate-y-1 hover:scale-110 hover:cursor-pointer duration-300">
            <Link to='/servise'>
              <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[20px] max-w-max flex justify-evenly items-center flex-col mb-1">
                <h3 className='text-white text-[20px] font-bold text-center'>
                  view more
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");