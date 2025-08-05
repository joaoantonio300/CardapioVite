import plateImage from '../assets/plate.png';
import details from '../assets/details.png';

//router

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
     <div className='font-poppins flex justify-between items-center flex-col w-[100%] h-[100vh]'>
      {/* ----- */}
     <div className='gap-20 flex justify-center items-center flex-col w-[100%]'>
     <div className='flex justify-center items-center bg-no-repeat bg-contain h-[36vh] w-[100%]'
      // after, to see about the usage about that
        // style={{ backgroundImage: `url(${backGroundImage})` }}
      >
       <div className='relative flex justify-center items-center bg-[#FF0000] w-[95%] h-[100%]  rounded-bl-[50px] rounded-br-[50px]'>
         <img className='h-[17em] mt-19 z-10' src={plateImage} alt="" />
         <img className='absolute z-1 w-[500px]' src={details} alt="" />
         </div>
      </div>
      <main className='w-[85%]' >
        <h1 className='font-semibold leading-8 text-4xl'>Coma,</h1>
        <h1 className='font-semibold leading-8 text-4xl'>
          Relemebre &</h1>
        <h1 className='font-semibold leading-8 text-4xl'>
          Viva</h1>
        <p className='mt-4 text-sm sm:text-base font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis magni cum incidunt, impedit nulla fugit.Omnis magni cum incidunt, impedit nulla fugit.</p>
      </main> 
     </div>
      <footer className='w-[95%] flex justify-end aling-end'>
        <Link to={'/lista'}>
        <button className='w-15 h-15 bg-gray-300 text-5xl rounded-sm animate-bounce'>></button>
        </Link>
      </footer>
    </div>
    </>
  )
}

export default Home