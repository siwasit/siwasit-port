import Image from 'next/image';

export default function LandingPageSection() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-center w-full h-[65vh] font-montserrat">
        <div className="flex w-full justify-center h-full">

          <div className="m-10 z-30 rounded-xl bg-customRed-bg text-white flex flex-col items-end justify-center w-1/2 h-100 px-6 relative">

            <Image
              src="/images/figma.png"
              alt="Figma logo"
              className="absolute figma-icon z-30 w-[30vh] left-[-10vh] top-20 bouncing-image"
              width={200}
              height={200}
            />

            <div className="text-right z-30 text-5xl font-bold lg:text-4xl md:text-3xl sm:text-2xl">
              <p>Hello, Everyone!!!</p>
              <p>This is</p>
              <p>My Portfolio</p>
            </div>

            <div className="text-right z-30 w-3/4 text-xl mt-6 font-medium lg:text-lg md:text-base sm:text-sm">
              My name is Siwasit Saengnikun, “Punt.” I am a Software Engineering student at Thammasat University, Rangsit Campus. I aspire to gain experience in software dev-related jobs and hope this site will showcase all my skills effectively.
            </div>
            <div className="m-10 z-10 rounded-xl bg-customRed-bg w-full h-full absolute left-1"></div>
          </div>

          <div className="w-1/2 h-100 flex items-end justify-center">

            <div className="w-[52vh] h-full relative">
              <div className="absolute w-full h-full bottom-0 left-0 z-40"></div>

              <img
                src="/images/Siwasit_Saengnikun-removebg.png"
                alt="profile"
                className="w-[52vh] align-bottom z-30 relative" 
              />

              <img
                width={200}

                alt="reactIcon"
                src="/images/React.png"
                className="bouncing-image react-icon absolute  top-[-5vh] left-20 drop-shadow-md z-20"
              />

              <img
                width={200}

                alt="hjc"
                src="/images/3OldGod.png"
                className="bouncing-image old-god absolute top-[20vh] right-[-7vh] drop-shadow-md z-20"
              />

              <img
                width={200}
                height={200}
                alt="tail"
                src="/images/tailwind.png"
                className="bouncing-image tailwind absolute w-[16vh] top-[20vh] left-0 drop-shadow-md z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}