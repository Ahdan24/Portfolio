const Portfolio = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-center pt-20 px-16">
        <div>
          <h1 className="font-bold flex justify-center text-2xl text- py-3 text-white">
            Portfolio
          </h1>
          <p className="flex justify-center text- py-3 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eos?
          </p>
        </div>

        <div className="py-5 grid grid-cols-3 gap-4">
          <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
            <p className="flex justify-center">Web Maintenance</p>
            <div>
              <p className="p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat sint et adipisci rerum facere modi, ab odio distinctio
                qui, expedita cumque est voluptates labore neque earum debitis
                dolori
              </p>
            </div>
          </div>

          <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
            <p className="flex justify-center">Web Maintenance</p>
            <div>
              <p className="p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat sint et adipisci rerum facere modi, ab odio distinctio
                qui, expedita cumque est voluptates labore neque earum debitis
              </p>
            </div>
          </div>

          <div className="bg-gray-700 bg-opacity-35 rounded-lg text-white p-4">
            <p className="flex justify-center">Web Maintenance</p>
            <div>
              <p className="p-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat sint et adipisci rerum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;