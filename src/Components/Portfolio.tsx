import porto from "../assets/portfolio.jpg";
import porto2 from "../assets/portfolio2.webp";
import porto1 from "../assets/Portfolio1.png";

const Portfolio = () => {
  return (
    <div id = 'Portfolio' className="bg-black">
        <div className="container text-center pt-20 px-16">
          <div>
            <h2 className="font-bold flex justify-center text-2xl text- py-3 text-white">
              Portfolio
            </h2>
            <p className="flex justify-center text- py-3 text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              eos?
            </p>
          </div>

          <div className="py-5 grid grid-cols-3 gap-4">
            <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
              <p className="flex justify-center">Web Maintenance</p>
              <div>
                <img src={porto} alt="" />
              </div>
            </div>

            <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
              <p className="flex justify-center">Web Maintenance</p>
              <div>
                <img src={porto2} alt="" />
              </div>
            </div>

            <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
              <p className="flex justify-center">Web Maintenance</p>
              <div>
                <img src={porto1} alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Portfolio;
