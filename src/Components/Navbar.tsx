import Gambar_1 from '../assets/Ahdan_aufa_logo.png'

const Navbar = () => {
  return (
   
    <nav className="bg-black">
      <div className="text-black px-16 p-2">
        <div className=" flex justify-center font-bold text-2xl px-3">
          <div>
            <img src={Gambar_1} alt="Logo_Ahdan" className='h-20 w-20rounded-full p-2' />
          </div>
        </div>
        <ul className=" text-white font-bold flex justify-center gap-4">
          <li className=" hover:text-emerald-500 px-5"> Home </li>
          <li className=" hover:text-emerald-500 px-5"> About Me </li>
          <li className=" hover:text-emerald-500 px-5"> Services </li>
          <li className=" hover:text-emerald-500 px-5"> Portfolio </li>
          <li className=" hover:text-emerald-500 px-5"> Contact</li>
        </ul>
        <div className="text-white">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
