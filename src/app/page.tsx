
import LandingPageSection from "./components/LandingPageSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import FooterSection from "./components/Footer";
import WalkingCat from "./components/WalkingCat";

export default function Home() {
  return (
    <main id="section1" className="pt-30 md:pt-[16vh] bg-neutral-50 relative">

      <header className="z-40 fixed top-0 w-full" style={{ background: 'linear-gradient(to bottom, #737373 0%,rgba(166, 166, 166, 0.5) 58%, rgba(107, 114, 128, 0.0) 100%)' }}>
        <nav className="flex justify-center py-8 font-montserrat">
          <div className="flex justify-between items-center w-full px-12">

            <div className="text-2xl font-bold text-customBlack tracking-wide">
              <a href="#section1">@Siwasit Saengnikun</a>
            </div>

            <ul className="hidden md:flex space-x-8">
              <li>
                <button className="bg-customRed hover:bg-customRed-second transition delay-150 duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-full w-[120px]">
                  <a href="#section2">About me</a>
                </button>
              </li>
              <li>
                <button className="bg-customRed hover:bg-customRed-second transition delay-150 duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-full w-[120px]">
                  <a href="#section3">Projects</a>
                </button>
              </li>
              <li>
                <button className="bg-customRed hover:bg-customRed-second transition delay-150 duration-200 ease-in-out text-white font-bold py-2 px-4 rounded-full w-[120px]">
                  <a href="#section4">Skills</a>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
      {/* background: 'linear-gradient(135deg, rgba(144,55,55,1) 0%, rgba(82,32,32,1) 77%, rgba(167,65,65,1) 100%)'style={{top: '9vh' }} */}
      <section className="bg-customRed my-10 flex flex-col justify-center items-center" >
        <div className="w-full relative">
          <div className="w-full absolute h-[15vh] w-[15vh] left-0 bottom-0" style={{bottom: '-2vh' }}>
            <WalkingCat />
          </div>
        </div>
        
        <LandingPageSection />
      </section>
      
      <section id="section2" className="mt-20">
        <AboutMeSection />
      </section>
      
      <div id="section3" className="h-[10vh]"></div>

      <section className="mb-10">
        <ProjectsSection />
      </section>
      
      <div id="section4" className="h-[10vh]"></div>

      <section className="mb-10">
        <SkillsSection />
      </section>
      
      <div id="section4" className="h-[20vh]"></div>

      <FooterSection />
    </main>
  );
}
