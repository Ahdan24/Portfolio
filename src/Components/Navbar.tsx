
const Navbar = () => {
  return (
    <div className="bg-black">
        <div className="container mx-auto flex justify-between text-black p-5">

          <div className="text-white  bg-emerald-500 rounded-lg px-3">
            <p>AA</p>
          </div>
          <div className="mx-auto flex justify-between gap-4">
          <h1 className="bg-white  text-black border border-white px-5 rounded-lg" > Home </h1>
          <h1 className= "text-black bg-white px-5 rounded-lg "> Services </h1>
          <h1 className="text-black bg-white px-5 rounded-lg"> About Me </h1>
          <h1 className="text-black bg-white px-5 rounded-lg"> Portfolio </h1>
          <h1 className="text-black bg-white px-5 rounded-lg"> Contact</h1>
          </div>
          <div className="text-white bg-emerald-500 rounded-lg px-3">
            <button>Hire me</button>
          </div>
        </div>
      </div>
    
  )
}

export default Navbar