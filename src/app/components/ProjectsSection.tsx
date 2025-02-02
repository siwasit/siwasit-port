"use client";

import { useState } from "react";
import { BiLogoFigma } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function CustomArrowSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"  // Custom stroke width

      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function CustomArrowSVGReverse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5" // Custom stroke width
      strokeLinejoin="round"
    >
      <path d="M18 15l-6-6-6 6" /> {/* Reverse the path for an upward arrow */}
    </svg>
  );
}

export default function ProjectsSection() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <div className='font-montserrat flex flex-col justify-center items-center w-full'>
        <div className='text-customBlack mx-auto flex justify-center items-start text-7xl font-bold border-b-8 border-customRed-bg pb-4'>Projects</div>
        
        <div className="container w-full flex flex-col items-center justify-center w-full mt-10 px-10 ">

          <div className="w-full mb-5">
            
            <div className="bg-customRed-second w-full relative">
              <div className="w-full z-20 absolute h-[14vh]" style={{ boxShadow: "#1E1E1E 0px 15px 20px -15px" }}></div>
              <div className='flex items-center h-[14vh] justify-between'>
                <div className='px-10 text-5xl font-bold'>MEWS Application</div>
                <button
                  type="button"
                  onClick={() => setIsOpen1(!isOpen1)}
                  className="mx-10 z-30 w-16 h-16 flex justify-center items-center bg-white text-customRed-second"
                  style={{ borderRadius: "50%" }}
                >
                  {isOpen1 ? <CustomArrowSVGReverse /> : <CustomArrowSVG />}
                </button>
              </div>
            </div>

            <div
              className={`bg-white relative text-customBlack overflow-hidden transition-all ease-out duration-[var(--custom-duration)] ${isOpen1 ? "max-h-[1000px]" : "max-h-0"
                }`}
              style={{ "--custom-duration": "1800ms" } as React.CSSProperties}
            >
              {isOpen1 && (

                <div className="flex bg-customRed-bg" >
                  <div className="w-2/5">
                    <img src="/images/MEWSProject.png" className="" alt="" />
                  </div>

                  <div className="w-3/5 flex justify-center relative items-center">

                    <div className="absolute text-white flex gap-8 bottom-0 right-0">

                      <div className="bottom-0 right-0 bg-customRed-second px-4 py-2">
                        <a target="_blank" href="https://www.figma.com/proto/JlnaiXeB3bMB3obxp7dE87/Mockup?page-id=0%3A1&node-id=764-1892&starting-point-node-id=764%3A1892&t=1BThyta0aAxbnB7y-1">
                          <div className="flex items-center">
                            <div className="mx-"><BiLogoFigma size={30} /></div>
                            <div className="font-medium underline">Figma</div>
                          </div>
                        </a>
                      </div>

                      <div className="bottom-0 right-10 bg-customRed-second px-4 py-2">
                        <a target="_blank" href="https://github.com/Worayot/Pulse2.0">
                          <div className="flex items-center">
                            <div className="mx-1"><FaGithub size={30} /></div>
                            <div className="font-medium underline">Github</div>
                          </div>
                        </a>
                      </div>

                    </div>

                    <div className="flex flex-col px-10">
                      <div className="text-2xl text-center font-bold mb-5">
                        Create an application for nurses to assess the urgency level of patients.
                      </div>

                      <ul className="list-disc font-medium">
                        <li>
                          Responsible for acting as project manager, business analyst and system analyst in the team.
                        </li>
                        <li>
                          Gather customer requirements and run requirements engineering
                        </li>
                        <li>
                          Design app framework, control app mockup and prototyping processes.
                        </li>
                        <li>
                          Develop a backend API using Firebase and integrate it with the frontend using flutter.
                        </li>
                      </ul>

                      <div className="my-5 flex gap-8">
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/Flutter.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/firebase.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )}
            </div>
          </div>
        </div>

        <div className="container w-full flex flex-col items-center justify-center w-full mt-10 px-10 ">

          <div className="w-full mb-5">
            
            <div className="bg-customRed-second w-full relative">
              <div className="w-full z-20 absolute h-[14vh]" style={{ boxShadow: "#1E1E1E 0px 15px 20px -15px" }}></div>
              <div className='flex items-center h-[14vh] justify-between'>
                <div className='px-10 text-5xl font-bold'>SnapShot</div>
                <button
                  type="button"
                  onClick={() => setIsOpen2(!isOpen2)}
                  className="mx-10 z-30 w-16 h-16 flex justify-center items-center bg-white text-customRed-second"
                  style={{ borderRadius: "50%" }}
                >
                  {isOpen2 ? <CustomArrowSVGReverse /> : <CustomArrowSVG />}
                </button>
              </div>
            </div>

            <div
              className={`bg-white relative text-customBlack overflow-hidden transition-all ease-out duration-[var(--custom-duration)] ${isOpen2 ? "max-h-[1000px]" : "max-h-0"
                }`}
              style={{ "--custom-duration": "1800ms" } as React.CSSProperties}
            >
              {isOpen2 && (

                <div className="flex bg-customRed-bg" >
                  <div className="w-2/5">
                    <img src="/images/SnapShot.png" className="h-full" alt="" />
                  </div>

                  <div className="w-3/5 flex justify-center relative items-center">

                    <div className="absolute text-white flex gap-8 bottom-0 right-0">

                      <div className="bottom-0 right-10 bg-customRed-second px-4 py-2">
                        <a target="_blank" href="https://github.com/siwasit/SnapShot/tree/main">
                          <div className="flex items-center">
                            <div className="mx-1"><FaGithub size={30} /></div>
                            <div className="font-medium underline">Github</div>
                          </div>
                        </a>
                      </div>

                    </div>

                    <div className="flex flex-col px-10">
                      <div className="text-2xl text-center font-bold mb-5">
                        Create a Front-End application to display images and be searchable.
                      </div>

                      <ul className="list-disc font-medium">
                        <li>
                          Display top 20 images in web application by searching or selecting.
                        </li>
                        <li>
                          Build a search system using keywords to retrieve images from the Flickr API, which stores an image database.
                        </li>
                      </ul>

                      <div className="my-5 flex gap-8">
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/React.png" className="object-cover h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/Bootstrap.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/Html.jpg" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )}
            </div>
          </div>
        </div>

        <div className="container w-full flex flex-col items-center justify-center w-full mt-10 px-10 ">

          <div className="w-full mb-5">
            
            <div className="bg-customRed-second w-full relative">
              <div className="w-full z-20 absolute h-[14vh]" style={{ boxShadow: "#1E1E1E 0px 15px 20px -15px" }}></div>
              <div className='flex items-center h-[14vh] justify-between'>
                <div className='px-10 text-5xl font-bold'>Kanban Board</div>
                <button
                  type="button"
                  onClick={() => setIsOpen3(!isOpen3)}
                  className="mx-10 z-30 w-16 h-16 flex justify-center items-center bg-white text-customRed-second"
                  style={{ borderRadius: "50%" }}
                >
                  {isOpen3 ? <CustomArrowSVGReverse /> : <CustomArrowSVG />}
                </button>
              </div>
            </div>

            <div
              className={`bg-white relative text-customBlack overflow-hidden transition-all ease-out duration-[var(--custom-duration)] ${isOpen3 ? "max-h-[1000px]" : "max-h-0"
                }`}
              style={{ "--custom-duration": "1800ms" } as React.CSSProperties}
            >
              {isOpen3 && (

                <div className="flex bg-customRed-bg" >
                  <div className="w-2/5">
                    <img src="/images/Kanban.png" className="h-full" alt="" />
                  </div>

                  <div className="w-3/5 flex justify-center relative items-center">

                    <div className="absolute text-white flex gap-8 bottom-0 right-0">

                      <div className="bottom-0 right-10 bg-customRed-second px-4 py-2">
                        <a target="_blank" href="https://github.com/siwasit/Djangokanban_board">
                          <div className="flex items-center">
                            <div className="mx-1"><FaGithub size={30} /></div>
                            <div className="font-medium underline">Github</div>
                          </div>
                        </a>
                      </div>

                    </div>

                    <div className="flex flex-col px-10">
                      <div className="text-2xl text-center font-bold mb-5">
                        Create a web application for task management using Kanban concepts.
                      </div>

                      <ul className="list-disc font-medium">
                        <li>
                          eveloped a task management back-end system which apply Kanban concepts by using Django as server and SQL
                          as database through SQLite.
                        </li>
                        <li>
                          Design and develop front-end webpages using React.js as web component structure and Bootstrap as web decoration.                        </li>
                        <li>
                          Integrate front-end web pages and back-end systems using the Django REST Framework as a bridge between both
                          of them.
                        </li>
                      </ul>

                      <div className="my-5 flex gap-8">
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/React.png" className="object-cover h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/Django.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/JavaScript.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              )}
            </div>
          </div>
        </div>

        <div className="container w-full flex flex-col items-center justify-center w-full mt-10 px-10 ">

          <div className="w-full mb-5">
            
            <div className="bg-customRed-second w-full relative">
              <div className="w-full z-20 absolute h-[14vh]" style={{ boxShadow: "#1E1E1E 0px 15px 20px -15px" }}></div>
              <div className='flex items-center h-[14vh] justify-between'>
                <div className='px-10 text-5xl font-bold'>Cubesat competition</div>
                <button
                  type="button"
                  onClick={() => setIsOpen4(!isOpen4)}
                  className="mx-10 z-30 w-16 h-16 flex justify-center items-center bg-white text-customRed-second"
                  style={{ borderRadius: "50%" }}
                >
                  {isOpen4 ? <CustomArrowSVGReverse /> : <CustomArrowSVG />}
                </button>
              </div>
            </div>

            <div
              className={`bg-white relative text-customBlack overflow-hidden transition-all ease-out duration-[var(--custom-duration)] ${isOpen4 ? "max-h-[1000px]" : "max-h-0"
                }`}
              style={{ "--custom-duration": "1800ms" } as React.CSSProperties}
            >
              {isOpen4 && (

                <div className="flex bg-customRed-bg" >
                  <div className="w-2/5">
                    <img src="/images/CubeSat.png" className="" alt="" />
                  </div>

                  <div className="w-3/5 flex justify-center items-center">

                    <div className="flex flex-col px-10">
                      <div className="text-2xl text-center font-bold mb-5">
                        Project about small communication satellite to collect agricultural data.
                      </div>

                      <ul className="list-disc font-medium">
                        <li>
                          Design of satellite communication systems for both receiving(Uplink) and transmitting sides(Downlink) and inter-satellite
                          communication(ISLs).
                        </li>
                        <li>
                          Investigate communication system design flaws and find ways to address potential risks.
                        </li>
                      </ul>

                      <div className="my-5 flex gap-8">
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/Flow.jpg" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                        <div className="w-24 h-24 bg-white text-center" style={{ borderRadius: "50%" }}>
                          <img src="/images/LoRa.png" className="w-full h-full" style={{ borderRadius: "50%" }} alt="" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}