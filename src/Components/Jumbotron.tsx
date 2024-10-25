
import { TiSocialInstagramCircular } from "react-icons/ti";
import { LiaLinkedinIn } from "react-icons/lia";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";


const Jumbotron = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-4 text-white">
            
            <p>Holla! I'm,</p>
            <h4 className=" text-2xl">Ahdan Aufa</h4>
            <h1 className="text-6xl font-bold text-emerald-500">Web Developer</h1>

            <div  className="flex gap-5 text-3xl">
            <TiSocialInstagramCircular />
            <LiaLinkedinIn />
            <AiFillGithub />
            <FaFacebookSquare />
            </div>

            <div className="flex gap-10 py-6">
              <button className=" text-white h-10 w-30 rounded-md border border-white bg-emerald-500 px-4 py-2">
                Hire me!
              </button>
              <button className="h-10 w-30 rounded-md bg-black px-4 py-2 border border-white text-white ">Download Cv</button>
            </div>

            <div className="flex justify-center p-1 bg-gray-700 bg-opacity-35 rounded-lg w-[75%] py-3">
              <div className=" border-r-2 w-33 px-3">
                <p className="text-emerald-500 flex justify-center">5+</p>
                <p>Experience</p>
              </div>
              <div className=" border-r-2 w-33 px-3">
                <p className="flex justify-center">20+</p>
                <p>Project Done</p>
              </div>
              <div className="w-33 px-3">
                <p className="flex justify-center">80+</p>
                <p>Happy Clients</p>
              </div>
            </div>
           
          </div>
          <div>
            <div className="flex justify-center">
              <img
                src="https://img.freepik.com/premium-vector/hacker-with-laptop-vector-illustration-black-background_938798-509.jpg"
                className="h-[400px] w-[400px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
