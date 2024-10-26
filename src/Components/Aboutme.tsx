import { LiaLinkedinIn } from "react-icons/lia";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className="bg-black container mx-auto  px-14 pt-20">
        <div className="text-center">
            <p className="text-white text-2xl font-bold py-5" >About Me</p>
        </div>

        <div className="container mx-auto px-16  ">
            <div className="grid grid-cols-2 gap-10 ">

            <div className="text-center px-10 bg-gray-700 bg-opacity-35 rounded-lg text-white ">

              <p className="text-2xl text-emerald-500 pb-5 pt-10">Hallo!</p>
            <div>
              <p className="pt-12"> I'm Ahdan aufa I specialize in Frontend Developer. I work with companies and agencies around the world, building Web user interface and digital product with focus on responsive design, accesbility, peformance, and cutting-egde tech.
              </p>
          

              <p className="pt-5">To find out more about me, you can send a message via my social media below, thankyou.
              </p>
            </div>

            <div  className="pt-7 justify-center flex gap-5 text-4xl text-emerald-500">
             <section>
              <LiaLinkedinIn />
              </section>
              <section>
            <AiFillGithub />
            </section>
            <section>
            <FaFacebookSquare />
            </section>
            </div>

            </div>


                <div className="flex justify-center py-16 bg-gray-700 bg-opacity-35 rounded-lg">
                  <img src="src/assets/Profile_ahdan.jpg" alt=" Profile"  className="h-[300px] w-[300px] border border-black rounded-full object-cover" />
                </div>

            </div>
        </div>

    </div>
  )
}

export default Aboutme