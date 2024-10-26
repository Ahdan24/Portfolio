
const Jumbotron = () => {
  return (
    <div className="bg-black" >
      <div className="container mx-auto px-16 pt-16">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col justify-center gap-4 text-white">
            
            <p className=" pt-10">Holla! I'm,</p>
            <h3 className=" text-2xl">Ahdan Aufa</h3>
            <h3 className="text-6xl font-bold text-emerald-500 pt-5">Web Developer</h3>

            <div className="flex gap-10 pt-10">
             
              <button className="h-10 w-30 rounded-md bg-black px-4 py-2 border border-emerald-500 text-white ">Download Cv</button>
            </div>

            <div className="flex justify-center p-1 bg-gray-700 bg-opacity-35 rounded-lg w-[70%] py-2">
              <div className=" border-r-2 w-33 px-3">
                <p className="text-emerald-500 flex justify-center font-bold">5+</p>
                <p>Experience</p>
              </div>
              <div className=" border-r-2 w-33 px-3">
                <p className="text-emerald-500 flex justify-center font-bold">20+</p>
                <p>Project Done</p>
              </div>
              <div className="w-33 px-3">
                <p className="text-emerald-500 flex justify-center font-bold">80+</p>
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
