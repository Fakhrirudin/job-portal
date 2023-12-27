import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();



  const redirectJob = () => {
    navigate("/job");
  }
  
  return (
    <div className='text-white' id='home'>
      <div className='bgmax-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#004080] font-bold p-2'>
        "LANGKAH PERTAMA MENUJU KARIR SUKSES ANDA DIMULAI DARI SINI"
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Temukan Pekerjaanmu!
        </h1>
        <button onClick={redirectJob} className='bg-[#004080] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Find a Job</button>
      </div>
    </div>
  );
};

export default Home;
