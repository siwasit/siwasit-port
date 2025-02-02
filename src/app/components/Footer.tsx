import { FaFacebookF, FaLinkedinIn  } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function FooterSection() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center h-[50vh] bg-customBlack text-white">
        <div className="flex justify-around gap-8 mb-10">
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100034664002436" className="w-24 h-24 bg-[#1877F2] flex justify-center items-center" style={{ borderRadius: "50%"}}>
            <FaFacebookF className="w-2/3 h-2/3" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/siwasit-saengnikun-130241271/" className="w-24 h-24 bg-[#0077B5] flex justify-center items-center " style={{ borderRadius: "50%"}}>
            <FaLinkedinIn className="w-2/3 h-2/3" />
          </a>
          <a target="_blank" href="https://github.com/siwasit" className="w-24 h-24 bg-black flex justify-center items-center" style={{ borderRadius: "50%", color: "white" }}>
          <TbBrandGithubFilled className="w-2/3 h-2/3" />
          </a>
        </div>

        <div className="text-2xl">Designed and developed by</div>
        <div className="h-1 w-2/5 bg-white mt-2 mb-5"></div>
        <div className="text-3xl font-semibold">Siwasit Saengnikun</div>
      </div>
    </>
  );
}