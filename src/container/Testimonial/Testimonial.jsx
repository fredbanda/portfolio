import React, { useState, useEffect }from "react";
import { motion } from "framer-motion";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.css";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query)
      .then((data) => {

      setTestimonials(data);
    });

    client.fetch(brandsQuery)
      .then((data) => {
      setBrands(data);
    });
  }, []);
  return (
    <>
      <h1 style={{textDecoration:"underline", color: "red"}} className="head-text "><span>ANNOUNCEMENT !</span></h1>
      <br />
      <h2 className="head-text">
        Be my first web dev testimonial. <span>I have learned so much. </span>Stuff am loving.{" "}
        <span>Looking for an opportunity to amaze</span>{" "}
      </h2>
      <br />
      <br />
      
      <hr />
      <h3 className="head-text">
        Great with CSS3 and HTML5. <span>Amazing with React and Redux. </span>Unstoppable doing backend.{" "}
        <span>Relaxed with safety on Databases.</span>{" "}
      </h3>
    </>
  );
};


export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonials'),
  'testimonials',
  "app__primarybg"
  );
