import Gambar_1 from '../assets/Ahdan_Logo.png'

const Navbar = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); 
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
   
    <nav className="container bg-black">
    
          <div className=' flex justify-center' >
            <img src={Gambar_1} alt="Logo_Ahdan" className="flex justify-center h-20 w-30 p-1" />
          </div>

        <div>
        <ul className=" text-white font-bold flex justify-center gap-4">
          <li>
             <a href='#Home' onClick={(e) => handleSmoothScroll(e, "Home")} className=" hover:text-emerald-500 px-5">Home</a>
          </li>
          <li>
             <a href='#Aboutme' onClick={(e) => handleSmoothScroll(e, "Aboutme")} className=" hover:text-emerald-500 px-5">About</a> 
          </li>
          <li> 
          <a href='#Services' onClick={(e) => handleSmoothScroll(e, "Services")} className=" hover:text-emerald-500 px-5">Services</a>
          </li>
          <li>
          <a href='#Portfolio' onClick={(e) => handleSmoothScroll(e, "Portfolio")}  className=" hover:text-emerald-500 px-5">Portfolio</a>
          </li>
          <li>
          <a href='#Contact' onClick={(e) => handleSmoothScroll(e, "Contact")}  className=" hover:text-emerald-500 px-5">Contact</a>
          </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
