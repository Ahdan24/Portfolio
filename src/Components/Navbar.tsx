const Navbar = () => {
  return (
    <div className="bg-emerald-500">
      <div className="container mx-auto flex justify-between text-black px-16 p-2">
        <div className="font-bold text-2xl px-3">
          <h1>Ahdan..</h1>
        </div>
        <div className="mx-auto flex justify-between gap-4">
          <p className=" text-black  px-5"> Home </p>
          <p className=" text-black  px-5"> About Me </p>
          <p className=" text-black  px-5"> Services </p>
          <p className=" text-black  px-5"> Portfolio </p>
          <p className=" text-black  px-5"> Contact</p>
        </div>
        <div className="text-black">
          <button>
            <h2>Hire me</h2>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
