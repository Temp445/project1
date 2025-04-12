import React, { useEffect } from "react";
import Header from "../layouts/Header";
import { FaArrowAltCircleRight } from "react-icons/fa";
import CMS from "../../assets/Images/CMS1.png";
import PMS from "../../assets/Images/PMS.png";
import ClientCarousel from "../layouts/Clients";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import Animation2 from "../../assets/gif/Landingimg.mp4";
import Aboutmp4 from "../../assets/gif/About.mp4";
import Count from "../layouts/Count";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: custom * 0.1 || 0 
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  const slideIn = (direction = "left") => ({
    hidden: { 
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0 
    },
    visible: { 
      x: 0, 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  });

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const buttonHover = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const useAnimationOnScroll = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return [ref, controls];
  };
  
  
  const [heroRef, heroControls] = useAnimationOnScroll();
  const [aboutRef, aboutControls] = useAnimationOnScroll();
  const [featuresRef, featuresControls] = useAnimationOnScroll();
  const [pmsRef, pmsControls] = useAnimationOnScroll();
  
  return (
    <div className="w-full mx-auto justify-center items-center xxl:container">
      <Header/>
      
      {/* Hero Section*/}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={heroControls}
        className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-0 sm:py-10 bg-[#FFF5F5]"
      >
        <div className="w-full lg:w-1/2 xl:px-6">
          <motion.div 
            variants={staggerContainer}
            className="flex flex-col  lg:items-start"
          >
            <motion.h1 
              variants={fadeIn}
              custom={0}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F7666F] text-left lg:text-left mb-4 sm:mb-6 lg:h-28 overflow-hidden"
            >
              Great Product is built <br className="hidden sm:block" />
              <span className="text-[#403D3D]">by great teams</span>
            </motion.h1>

            <motion.video
              variants={scaleUp}
              className="h-auto justify-center mx-auto w-4/5 sm:w-3/5 max-w-xs my-4 sm:hidden"
              preload="auto"
              autoPlay
              loop
              muted
              playsInline >
              <source src={Animation2} type="video/mp4" />
            </motion.video>

            <motion.p 
              variants={fadeIn}
              custom={1}
              className="font-normal w-full text-justify lg:text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700 xl:text-gray-600 my-4 sm:my-6"
            >
              Optimize your business with advanced ERP solutions, Industry 4.0
              innovations, and cloud-based management systems. From automotive
              and aerospace to manufacturing and trading, we deliver smart,
              scalable, and secure software tailored to your industry's needs.
            </motion.p>
            
            <motion.div
              variants={fadeIn}
              custom={2}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="self-start"
            >
              <Link to="/contact" className="flex items-start mt-1 mb-2 sm:mt-4 lg:mt-6 xl:mt-8  py-2 gap-2 text-sm md:text-bold lg:font-extrabold xl:text-2xl text-[#F7666F] font-bold transition-all">
                Contact Us{" "}
                <BiSolidRightArrowSquare className=" md:mt-1 text-lg md:text-xl lg:text-2xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={slideIn("right")}
          initial="hidden"
          animate={heroControls}
          className="w-full lg:w-1/2 flex justify-center items-center mb-6 lg:mb-0"
        >
          <video
            className="hidden sm:block w-4/5 md:w-full lg:w-11/12 xl:w-10/12 h-auto"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Animation2} type="video/mp4" />
          </video>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.div 
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12"
      >
        <div className="grid md:grid-cols-2 items-center container gap-6 md:gap-8 lg:gap-10">
          <motion.video
            variants={slideIn("left")}
            className="hidden sm:block w-11/12 md:w-full xl:w-[550px] h-auto mx-auto"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Aboutmp4} type="video/mp4" />
          </motion.video>
          
          <motion.div variants={staggerContainer}>
            <motion.h2 
              variants={fadeIn}
              custom={0}
              className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-black text-center md:text-left mb-4" >
              Who We Are
            </motion.h2>
            
            <motion.video
              variants={scaleUp}
              className="w-4/5 sm:w-3/5 h-auto mx-auto my-4 sm:hidden"
              preload="auto"
              autoPlay
              loop
              muted
              playsInline >
              <source src={Aboutmp4} type="video/mp4" />
            </motion.video>
            
            <motion.p 
              variants={fadeIn}
              custom={1}
              className="w-full text-[12px] sm:text-sm md:text-base lg:text-base xl:text-lg text-justify md:text-left text-gray-700 xl:text-gray-600" >
              <span className="text-[#F7666F]">
                ACE Software Solutions Pvt. Ltd;
              </span>{" "}
              a company incorporated in 2001, has its Head Office and its
              Research & Development center in Chennai. The company was started
              by professionals having rich experience in the Manufacturing
              sector. The ASSPL Management Team has hands on experience in
              designing and implementation of ERP systems, Industry 4.0 & IIOT
              Solutions and SAAS model products for small, medium and large
              industries and corporate.
            </motion.p>

            <motion.div
              variants={fadeIn}
              custom={2}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="flex justify-start"
            >
              <Link to="/about" className="mt-4 sm:mt-6 gap-2 text-[#F7666F] font-semibold text-sm sm:text-sm md:text-base flex items-center">
                Read more{" "}
                <span>
                  <FaArrowAltCircleRight className="mt-0.5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Counter Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Count />
      </motion.div>

      {/* Features Section*/}
      <motion.div 
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-8"
      >
        <div className="container mx-auto">
          <motion.h1 
            variants={fadeIn}
            className="text-center text-xl  sm:text-xl md:text-2xl lg:text-2xl font-bold mb-6 sm:mb-8 lg:mb-10"
          >
            Our Features
          </motion.h1>
          
          {/* CMS Feature */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-10 sm:mb-16 lg:mb-0 xl:ml-10">
            <motion.div 
              variants={staggerContainer}
              className="w-full md:w-1/2 bg-white rounded-xl p-4 sm:p-6" >
              <motion.h2 
                variants={fadeIn}
                custom={0}
                className=" hidden sm:block font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-center md:text-left mb-3" >
                ACE CMS
              </motion.h2>
              
              <motion.div 
                variants={scaleUp}
                className="w-full  mx-auto md:hidden mb-4"
              >
                <img
                  src={CMS}
                  alt="ACE CMS Illustration"
                  className="w-full rounded-md"
                />
              </motion.div>
              
              <motion.p 
                variants={fadeIn}
                custom={1}
                className="text-[12px] sm:text-sm md:text-base xl:text-lg text-justify md:text-left text-gray-700 xl:text-gray-600"
              >
                <span className="text-[#F7666F] font-semibold">
                  ACE Calibration Management System
                </span>{" "}
                on Cloud – a comprehensive, efficient and user-friendly
                Calibration Management System helps to manage your Gauges
                & Instruments calibration needs.
                <span className="hidden sm:block mt-2">
                  Calibration of gauges and instruments is one of the vital
                  processes for any manufacturing industry to produce a
                  quality and reliable product to satisfy customer needs.
                </span>
              </motion.p>

              <motion.div
                variants={fadeIn}
                custom={2}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="flex justify-start"
              >
                <Link to="/products" className="mt-4 flex items-center gap-2 text-[12px] sm:text-sm text-[#F7666F] font-semibold">
                  Read more <FaArrowAltCircleRight className="mt-0.5" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={slideIn("right")}
              className="hidden md:flex md:w-1/2 justify-center items-center"
            >
              <img
                src={CMS}
                alt="ACE CMS Illustration"
                className="w-4/5 lg:w-10/12 rounded-md"
              />
            </motion.div>
          </div>
        </div>

        {/* PMS Feature */}
        <motion.div 
          ref={pmsRef}
          initial="hidden"
          animate={pmsControls}
          className="container mx-auto mb-6 sm:mb-10 xl:-ml-5"
        >
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl">
            <motion.div 
              variants={slideIn("left")}
              className="w-full md:w-1/2 flex justify-center sm:p-4"
            >
              <img
                src={PMS}
                alt="ACE PMS Illustration"
                className="w-4/5 md:w-10/12 xl:w-[800px] rounded-md"
              />
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="w-full md:w-1/2 p-4 sm:p-6"
            >
              <motion.h2 
                variants={fadeIn}
                custom={0}
                className="hidden sm:block font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-center md:text-left mb-3"
              >
                ACE PMS
              </motion.h2>

              <motion.p 
                variants={fadeIn}
                custom={1}
                className="text-[12px] sm:text-sm md:text-base xl:text-lg text-justify md:text-left text-gray-700 xl:text-gray-600"
              >
                <span className="text-[#F7666F] font-semibold">
                  Ace Production Management System
                </span>{" "}
                assists in planning, producing, monitoring, and controlling,
                including corrective actions of production activities in Real
                Time / Online on the shop floor.{" "}
                <span className="hidden md:block mt-2">
                  The main objective of Ace Production Management System is to
                  produce good quality and right quantity product at the right
                  time cost effectively.
                </span>
              </motion.p>

              <motion.div
                variants={fadeIn}
                custom={2}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="flex justify-start"
              >
                <Link to="/products" className="mt-4 flex items-center gap-2 text-sm sm:text-sm text-[#F7666F] font-semibold">
                  Read more <FaArrowAltCircleRight className="mt-0.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <Link to="/products" className="gap-2 text-base sm:text-base underline text-[#F7666F] flex items-center font-semibold mt-0 sm:mt-4">
            View more
          </Link>
        </motion.div>
      </motion.div>

      {/* Client Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ClientCarousel />
      </motion.div>
    </div>
  );
};

export default HomePage;