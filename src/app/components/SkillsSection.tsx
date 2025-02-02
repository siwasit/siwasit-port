"use client";

import SkillsCard from "./SkillsCard";

export default function SkillsSection() {

  return (
    <>
      <div className='font-montserrat flex flex-col justify-center items-center w-full'>
        <div className='text-customBlack mx-auto flex justify-center items-start text-7xl font-bold border-b-8 border-customRed-bg pb-4'>
          Skills
        </div>
        <div className="w-full overflow-x-auto mt-10 p-4 inner-shadow container">
          <div className="flex space-x-8">
            <SkillsCard imageSrc="/images/SkillPic/3OldGod.png" title="3OldGod" />
            <SkillsCard imageSrc="/images/SkillPic/Dart.jpg" title="Dart" />
            <SkillsCard imageSrc="/images/SkillPic/Documentation.jpg" title="Documentation" />
            <SkillsCard imageSrc="/images/SkillPic/DrawIO.jpg" title="DrawIO" />
            <SkillsCard imageSrc="/images/SkillPic/ExpressSJ.png" title="ExpressSJ" />
            <SkillsCard imageSrc="/images/SkillPic/Figma.jpg" title="Figma" />
            <SkillsCard imageSrc="/images/SkillPic/Fluttter.jpg" title="Flutter" />
            <SkillsCard imageSrc="/images/SkillPic/GitHub.png" title="GitHub" />
            <SkillsCard imageSrc="/images/SkillPic/Java.jpg" title="Java" />
          </div>
          <div className="flex space-x-8 my-10">
            <SkillsCard imageSrc="/images/SkillPic/MongoDB.jpg" title="MongoDB" />
            <SkillsCard imageSrc="/images/SkillPic/MySQL.png" title="MySQL" />
            <SkillsCard imageSrc="/images/SkillPic/NodeJS.png" title="NodeJS" />
            <SkillsCard imageSrc="/images/SkillPic/Python.png" title="Python" />
            <SkillsCard imageSrc="/images/SkillPic/React.png" title="React" />
            <SkillsCard imageSrc="/images/SkillPic/ReactNative.png" title="ReactNative" />
            <SkillsCard imageSrc="/images/SkillPic/ReqEngt.jpg" title="Requirments engineering" />
            <SkillsCard imageSrc="/images/SkillPic/RequirementModeling.png" title="Requirement Modeling" />
            <SkillsCard imageSrc="/images/SkillPic/firebase.png" title="firebase" />
          </div>
        </div>
      </div>
    </>
  );
}
