import React from 'react';
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-auto py-16 px-4 text-center text-gray-300' id='contact'>
      <div className='grid lg:grid-cols-1 gap-8'>
        <div>
          <h1 className='text-3xl font-bold text-[#004080]'>Contact</h1>
          <p className='py-4'>Website ini masih dalam proses pengembangan, jika anda memiliki kritik ataupun saran untuk website ini hubungi kontak dibawah.</p>
          <div className='flex justify-center gap-1'>
            <a href="https://www.instagram.com/mfakhrifn/" target='_blank'><FaInstagram size={30} className='mx-2' /></a>
            <a href="https://twitter.com/mahomafakhri"target='_blank'><FaTwitter size={30} className='mx-2' /></a>
            <a href="https://github.com/Fakhrirudin"target='_blank'><FaGithub size={30} className='mx-2' /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
