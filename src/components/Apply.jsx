import React from 'react';
import Single from '../assets/1.png'
import Double from '../assets/2.png'
import Triple from '../assets/3.png'

const Apply = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id='apply'>
      <div className='text-3xl font-bold text-[#004080] text-center'>How to Apply</div>
      <br /><br /><br />
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Cari Pekerjaan</h2>
              <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Cari pekerjaan yang anda inginkan dan yang tersedia di website ini</p>
              </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Apply</h2>
              <div className='text-center font-medium'>
                      <p className='py-2 border-b mx-8 mt-8'>Klik Apply pada job card yang diinginkan, lalu akan diarahkan
                      ke website perusahaan yang akan anda Apply</p>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Dapatkan Pekerjaan</h2>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Lamaran akan diproses. Dapatkan pekerjaan Anda.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Apply;
