import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed w-full h-auto bg-white shadow-md z-[100] py-2">
      <div className="w-full flex items-center justify-center md:justify-around">
        <div>
        <Link to="/" className="text-xl font-semibold hidden md:inline-block ">
          Logo
        </Link>
        </div>
        
       <div>
       <ul className="flex flex-col justify-center items-center space-y-2 md:flex-row md:space-x-16 md:space-y-0">
          <li>
            <Link to="/" className="text-gray-600 hover:text-gray-900">Anasayfa</Link>
          </li>
          <li>
            <Link to="/emeklilik-hesaplama" className="text-gray-600 hover:text-gray-900">Hesaplama</Link>
          </li>
          <li>
            <Link to="/iletisim" className="text-gray-600 hover:text-gray-900">İletişim</Link>
          </li>
        </ul>
       </div>
       
      </div>
    </div>
  );
};

export default Navbar;
