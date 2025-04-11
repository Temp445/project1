import React from "react";
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
const HomePage = () => {
  
  return (
    <div className="w-full mx-auto justify-center items-center 2xl:container">
    <Header/>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between  px-6 sm:px-10 md:px-10 lg:pl-15  py-10 bg-[#FFF5F5]">
        <div className=" 3xl:justify-center 3xl:ml-100 2xl:ml-0 @desktop:ml-20 container  ">
          <div className="container flex w-full  xl:ml-10">
            <div className="text lg:text-left max-w-lg xl:ml-12 flex flex-col items lg:items-start">
              <h1 className=" text-xl mb-5 sm:text-2xl sm:mt-10 xl:text-5xl font-bold text-[#F7666F] overflow-hidden xl:h-30">
                Great Product is built <br />
                <span className="text-[#403D3D] ml-0">by great teams</span>
              </h1>

              <video
                className="h-50 w-60  mx-auto flex overflow-hidden object justify-center items-center sm:hidden "
                preload="auto"
                autoPlay
                loop
                muted
                playsinline
              >
                <source src={Animation2} type="video/mp4" />
              </video>

              <p className=" font-normal  mt-5 w-full text-wrap text-justify text-[12px] lg:text-[14px] lg:leading-6 lg:mt-5 sm:w-70 lg:w-90 xl:w-full xl:text-[18px] xl:text-start xl:text-gray-600 xl:leading-7 ">
                Optimize your business with advanced ERP solutions, Industry 4.0
                innovations, and cloud-based management systems. From automotive
                and aerospace to manufacturing and trading, we deliver smart,
                scalable, and secure software tailored to your industry’s needs.
              </p>
              
             <Link to="/contact" className="flex items-center justify-start self-start mt-5 px-0 py-2 gap-3 text-sm text-[#F7666F] font-bold transition-all  lg:mt-10 lg:text-lg xl:mt-20  xl:font-bold">
                Contact Us{" "}
                <BiSolidRightArrowSquare className="text-[20px] lg:text-xl" />
             </Link>
            </div>

            <div className="flex justify-center md:ml-20  md:w-80 lg:w-110 xl:w-120 xl:h-120 xl:ml-30  ">
              <video
                className="hidden sm:block lg:w-100  xl:w-130 xl:-mt-15 pb-10 "
                preload="auto"
                autoPlay
                loop
                muted
                playsinline
              >
                <source src={Animation2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* AboutSection*/}
      <div className="bg-white p-8 xl:pe-20 lg:h-120">
        <div className="grid md:grid-cols-2  items-center container gap-10 xl:gap-0">
          <video
            className="hidden   sm:block h-80 w-100  lg:mt-10 lg:w-200 "
            preload="auto"
            autoPlay
            loop
            muted
            playsinline
          >
            <source src={Aboutmp4} type="video/mp4" />
          </video>
          <div>
            <h2 className="mb-0 text-xl ml-0 font-bold text-black  inline-block md:mb-6 lg:mb-10 lg:text-3xl overflow-hidden ">
              Who We Are
            </h2>
            <video
              className="w-50 h-50 flex items-center justify-center sm:hidden  mx-auto"
              preload="auto"
              autoPlay
              loop
              muted
              playsinline
            >
              <source src={Aboutmp4} type="video/mp4" />
            </video>
            <p className="mt-0 text w-full  text-[12px] text-wrap text-justify lg:text-sm  xl:leading-7  xl:text-[18px] xl:text-gray-600 ">
              <span className=" text-[#F7666F]">
                ACE Software Solutions Pvt. Ltd;
              </span>{" "}
              a company incorporated in 2001, has its Head Office and its
              Research & Development center in Chennai. The company was started
              by professionals having rich experience in the Manufacturing
              sector. The ASSPL Management Team has hands on experience in
              designing and implementation of ERP systems, Industry 4.0 & IIOT
              Solutions and SAAS model products for small, medium and large
              industries and corporate.
            </p>

           <Link to="/about"
              className="mt-5 gap-2  text-[#F7666F] font-semibold text-[12px] text-sm flex lg:mt-10 xl:text-[16px]" >
              Read more{" "}
              <span>
                <FaArrowAltCircleRight className="mt-1 " />
              </span>
           </Link>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <Count />{" "}
      </div>

      {/* ProductSection */}
      <div className="xl:ml-10 2xl:ml-0">
        <div className="container xl:ml-10 lg:px-5">
          <h1 className="mx-auto flex w-full justify-center mt-7 text-xl font-bold xl:text-2xl xl:mt-15 xl:mb-10">
            Our Features
          </h1>
          <div className="flex">
            <div className="items-center space-x-8 p-5 md:mt-8 flex justify-center w-full overflow-hidden xl:ml-10">
              <div className="bg-white shadow-lg rounded-xl p-6 md:shadow-none md:rounded-none w-full max-w-7xl">
                <h2 className="hidden font-bold text-sm md:text-lg sm:block xl:text-[21px]">
                  ACE CMS
                </h2>
                <div className="w-full container md:flex">
                  <div className="w-full justify-center mt-1 sm:w-100 mx-auto md:hidden">
                    <img
                      src={CMS}
                      alt="ACE CMS Illustration"
                      className="sm:w-full rounded-md"
                    />
                  </div>
                  <h2 className="font-bold text-sm md:text-lg sm:hidden xl:text-[21px]">
                    ACE CMS
                  </h2>
                  <p className="mt-2 w-full text-wrap text-[12px] sm:text-[13px] text-justify text-gray-700 md:order-2 md:w-90 md:mt-6 lg:text-start lg:text-[14px] lg:w-120 xl:w-160 xl:text-[18px]">
                    <span className="text-[#F7666F] font-semibold">
                      ACE Calibration Management System
                    </span>{" "}
                    <span className="xl:text-gray-600">
                      on Cloud – a comprehensive, efficient and user-friendly
                      Calibration Management System helps to manage your Gauges
                      & Instruments calibration needs.
                    </span>
                    <span className="hidden sm:block mt-3 md:flex gap-3 xl:text-gray-600">
                      Calibration of gauges and instruments is one of the vital
                      processes for any manufacturing industry to produce a
                      quality and reliable product to satisfy customer needs.
                    </span>
                  </p>
                </div>

                <Link to="/products" className="mt-3 gap-2 text-[12px] text-[#F7666F] font-semibold sm:text-sm flex lg:mt-10">
                  Read more <FaArrowAltCircleRight className="mt-1" />
                </Link>

              </div>
            </div>
            <div className="hidden justify-center mt-10 sm:block sm:mt-15 sm:w-90 mx-auto md:w-120 md:mr-5 lg:w-150 xl:mr-30 xl:w-220 xl:h-100 overflow-hidden">
              <img
                src={CMS}
                alt="ACE CMS Illustration"
                className="rounded-md overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* PMS */}
        <div className="container flex justify-center items-center  lg:px-5 px-6 mt-0 h-120 sm:h-auto">
          <div className="bg-white shadow-lg rounded-xl  md:shadow-none md:rounded-none w-full max-w-[1400px] flex flex-col  md:flex-row items-center gap-0 sm:gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={PMS}
                alt="ACE PMS Illustration"
                className="sm:w-full rounded-md"
              />
            </div>

            <div className="w-full md:w-1/2 p-5">
              <h2 className="font-bold text-sm md:text-lg xl:text-[21px]">
                ACE PMS
              </h2>

              <p className="mt-2 text-[12px] sm:text-[13px] text-justify text-gray-600 lg:text-[14px] xl:text-[18px] xl:mt-5 ">
                <span className="text-[#F7666F] font-semibold">
                  Ace Production Management System
                </span>{" "}
                assists in planning, producing, monitoring, and controlling,
                including corrective actions of production activities in Real
                Time / Onlineon the shop floor.{" "}
                <span className="hidden md:block mt-2">
                  The main objective of Ace Production Management System is to
                  produce good quality and right quantity product at the right
                  time cost effectively.
                </span>
              </p>

      
              <Link to="/products" className="mt-3 text-[12px] text-[#F7666F] font-semibold sm:text-sm flex items-center gap-2 lg:mt-5 xl:mt-10">
                Read more <FaArrowAltCircleRight className="mt-1 " />
              </Link>

            </div>
          </div>
        </div>


       <Link  to="/products" className="w-full text-center gap-2 text-[14px] underline text-[#F7666F] flex items-center font-semibold sm:text-sm justify-center sm:mt-5 xl:text-[16px]">
          View more
        </Link>
      </div>

      <ClientCarousel />
    </div>
  );
};

export default HomePage;
