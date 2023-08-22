import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import axios from "axios";

import { Link } from 'react-router-dom'


function ServicePage() {

//api call
  const [serviceWP, setserviceWP] = useState([])
  useEffect(() => {
    let url = 'https://backend.gr8vilen.com/wp-json/wp/v2/posts/?_embed&categories=8'
    axios.get(url).then((res) => {
      setserviceWP(res.data)
    });

  }, [])

  console.log(serviceWP)


  return (

    <>
      <div className="min-h-screen"> 
      <div className='mt-20 flex flex-wrap gap-10 justify-evenly '>
        {
          serviceWP.map((data , index) => {
            //console.log("inner test", data.id)
            return (
              <div key={data.id}>
                <Tilt className=' xs:w-[250px] w-full ' >
                  <motion.div
                    initial={false}
                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
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
              </div>


            );
          })
        }
      </div>
      </div>
    </>
    
  )
}

export default ServicePage