import './Landing.css';
import food_truck from './images/Screenshot 2024-09-05 150341.png';
import vector from './images/Vector 1.svg'
import img1 from './images/img1_tif.svg'

function Landing() {
  return (
    <div className="w-screen flex justify-center">
      <div className='w-[100%] flex justify-between'>
        <div className='w-[50%] flex flex-col justify-center items-center'>
          <div className='h-auto flex flex-col items-start gap-5 w-[500px]'>
            <p className='text-5xl font-bold overflow-hidden text-[#0E2368]'>Discover the{' '}
              <span className='text-red-500'>Best</span> Food and Drinks</p>
            <p>Naturally made Healthcare Products for the better care & support of your body.</p>
            <button className='p-2 px-5 bg-red-500 text-white text-xl rounded-full'>Explore Now</button>
          </div>
        </div>
        <div
          className="w-1/2 p-5 h-[100vh]"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',  
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Landing;
