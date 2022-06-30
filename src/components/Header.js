import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
         <p className='text-purple-400 text-3xl'><b>Realtor</b></p>
        </Link>
        <div className='flex items-center gap-6'>
          
          <Link
            className='bg-purple-400 hover:bg-purple-400 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
           Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
