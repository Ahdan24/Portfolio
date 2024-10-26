
const Navbar = () => {
  return (
    <div className="bg-black">
        <div className="container mx-auto flex justify-between text-black px-16 pt-5">

          <div className="text-white font-bold text-2xl px-3">
            <h1>Ahdan..</h1>
          </div>
          <div className="mx-auto flex justify-between gap-4">
          <p className=" text-white  px-5 rounded-lg"> Home </p>
          <p className=" text-white  px-5 rounded-lg"> About Me </p>
          <p className=" text-white  px-5 rounded-lg"> Services </p>
          <p className=" text-white  px-5 rounded-lg"> Portfolio </p>
          <p className=" text-white  px-5 rounded-lg"> Contact</p>
          </div>
          <div className="text-white">
            <button><h2>Hire me</h2> </button>
          </div>
        </div>
      </div>
    
  )
}

export default Navbar