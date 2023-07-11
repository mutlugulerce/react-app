import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGirisYili,
  setPrimGun,
  setYas,
  setCinsiyet,
} from "../store/emeklilikSlice";

const Form = ({ hesapla, setHesap }) => {
  const dispatch = useDispatch();
  const { girisYili, primGun, yas, cinsiyet } = useSelector(
    (state) => state.emeklilik
  );

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center mt-40 mb-12 px-12">
      <label className="text-white font-semibold text-lg my-1">
        Sigorta Giriş Yılı:
      </label>
      <input
        className="w-full py-2 px-4 mb-2 text-red-500 font-semibold text-lg border border-gray-300 rounded"
        type="date"
        value={girisYili}
        onChange={(e) => dispatch(setGirisYili(e.target.value))}
      />

      <label className="text-white font-semibold text-lg my-1">
        Sigorta Prim Günü:
      </label>
      <input
        className="w-full py-2 px-4 mb-2 text-red-500 font-semibold text-lg border border-gray-300 rounded"
        type="number"
        placeholder='Lütfen Prim Gününüzü Giriniz.'
        value={primGun}
        onChange={(e) => dispatch(setPrimGun(e.target.value))}
      />

      <label className="text-white font-semibold text-lg my-1">
        Yaş:
      </label>
      <input
        className="w-full py-2 px-4 mb-2 text-red-500 font-semibold text-lg border border-gray-300 rounded"
        type="number"
        placeholder='Lütfen Yaşınızı Giriniz.'
        value={yas}
        onChange={(e) => dispatch(setYas(e.target.value))}
      />

      <label className="text-white font-semibold text-lg my-1">
        Cinsiyet:
      </label>
      <input
        className="w-full py-2 px-4 mb-6 text-red-500 font-semibold text-lg border border-gray-300 rounded"
        type="text"
        placeholder='Lütfen Cinsiyetinizi Giriniz.'
        value={cinsiyet}
        onChange={(e) => dispatch(setCinsiyet(e.target.value))}
      />

      <button className="w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-xl" onClick={hesapla}>
        Hesapla
      </button>
    </div>
  );
};

export default Form;
