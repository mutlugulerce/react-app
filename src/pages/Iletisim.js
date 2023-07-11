import React from 'react';
import { FiMail, FiInstagram, FiMessageSquare } from 'react-icons/fi';

const Iletisim = () => {
  const openEmail = () => {
    window.location.href = 'mailto:gulercemutlu1993@gmail.com';
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/sosyalguvenlikciemmi/', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/05511288967', '_blank');
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-8 pt-16 bg-gradient-to-r  from-orange-300 to-white">
      <div className="w-full text-start md:text-center md:mb-32  ">
        <h1 className="text-xl font-semibold mb-8 md:text-4xl">Hesaplamalarla ilgili detaylı bilgi almak için</h1>
        <p className="text-md md:text-2xl">Aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:</p>
      </div>

      <div className="w-full md:flex-row mt-8 flex flex-col mx-8 md:items-center md:justify-center md:space-x-24">
        <div onClick={openEmail} className="flex items-center mb-6 cursor-pointer ">
          <FiMail className="md:text-6xl mr-4 text-4xl text-black " />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-black ">E-posta</h2>
            <p className="text-base ">gulercemutlu1993@gmail.com</p>
          </div>
        </div>

        <div onClick={openWhatsApp} className="flex items-center cursor-pointer mb-6">
          <FiMessageSquare className="md:text-6xl text-4xl mr-4 text-green-500" />
          <div>
            <h2 className="text-xl md:text-2xl font-semibold  text-green-500">WhatsApp</h2>
            <p className="text-base">05511288967</p>
          </div>
        </div>

        <div onClick={openInstagram} className="flex items-center mb-6 cursor-pointer">
          <FiInstagram className=" md:text-6xl text-4xl mr-4 text-red-500" />
          <div>
            <h2 className="text-xl font-semibold text-red-500 md:text-2xl">Instagram</h2>
            <p className="text-base ">https://www.instagram.com/sosyalguvenlikciemmi/</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Iletisim;
