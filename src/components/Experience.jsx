import React, { useEffect, useState }  from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import axios from "axios";

const ExperienceCard = ({ data }) => {
  
  console.log('inner exp', data)
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(data.content.rendered, 'text/html');
  const dateElement = parsedHtml.getElementById('date');
  const dateText = dateElement.textContent;
  console.log(dateText)

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={dateText}
      //iconStyle={{ background:black }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={'tst icon'}
            alt={'test icon alt'}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{data.title.rendered}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {data.content.rendered}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        <li>test</li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
    //api call
    const [ExpWP, SetExpWP] = useState([])
    useEffect(() => {
      let url = 'https://backend.gr8vilen.com/wp-json/wp/v2/posts/?_embed&categories=5'
      axios.get(url).then((res) => {
        SetExpWP(res.data)
      });
  
    }, [])
    console.log('exp',ExpWP)
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>

          {ExpWP.map((experience, index) => (
          
            <ExperienceCard
              key={`experience-${index}`}
              data={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
