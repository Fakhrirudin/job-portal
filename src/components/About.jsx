import React from 'react';
import Laptop from '../assets/laptop.jpg';

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id='about'>
      <div className='text-3xl font-bold text-[#004080] text-center'>About</div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Berbagai Macam Lowongan Pekerjaan</h1>
          <p>
            Website job portal ini diharapkan dalam mempermudah pencarian pekerjaan dan perekrutan.
            Kami membantu menciptakan jembatan antara pemohon kerja dan perusahaan, memungkinkan keduanya
            untuk menemukan pilihan yang sesuai dengan kebutuhan mereka.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
