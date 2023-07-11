import React from 'react'
import { useSelector } from 'react-redux'

const Sonuc = () => {
  const {emeklilikDurumu} = useSelector((state) => state.emeklilik)
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-500 to-yellow-300'>
      <h1 className='font-bold text-2xl mb-20'>Mevcut Emeklilik Durumu:</h1>
      <p className='text-lg text-white font-medium text-center'>
      {emeklilikDurumu}
      </p>
      
    </div>
  )
}

export default Sonuc