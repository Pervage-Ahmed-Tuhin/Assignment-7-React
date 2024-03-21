
import './App.css'

import banner from './assets/banner3.jpg';
import Recipes from './components/Recipes';
function App() {


  return (
    <>


      {/* This is the navigation bar initialization */}

      <div className="navbar bg-base-100 max-w-[1170px] mx-auto mt-[60px] mb-[60px]">
        <div className="flex-1">
          <a className="btn btn-ghost text-[#0BE58A] text-xl lexend font-bold text-[40px]">Tuhins Kitchen</a>

          <div className='pl-16 space-x-20 hidden lg:block lexend font-normal text-base '>
            <a className='hover:text-gray-400' href="#">Home</a>
            <a className='hover:text-gray-400' href="#">Recipes</a>
            <a className='hover:text-gray-400' href="#">About</a>
            <a className='hover:text-gray-400' href="#">Search</a>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="form-control">
            <div className='flex items-center'>
              <span className='mr-2 text-gray-400'><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" placeholder="Search" className="input input-bordered rounded-full w-24 md:w-auto" />
            </div>

          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={banner} alt="" />
              </div>
            </div>
            <ul tabIndex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* end of the navigation bar section */}

      {/* This is the banner section */}


      <div className="imported-style max-w-[1170px] mx-auto min-h-[650px] bg-cover bg-no-repeat bg-center flex justify-center items-center mb-[100px]" style={{ backgroundImage: `url(${banner})` }}>

        <div className='space-y-8'>
          <h1 className='text-white lexend font-extrabold text-4xl text-center'>Discover an exceptional cooking <br /> class tailored for you!</h1>
          <p className='lexend font-bold text-[18px] text-center text-white'>Welcome to Tuhins Kitchen, your ultimate destination for <br /> culinary inspiration and exploration! Dive into a world of tantalizing flavors expert techniques. <br /> </p>

          <div className='flex gap-4 justify-center'>
            <button className='btn bg-[#0BE58A] text-black rounded-full border-none outline-none w-[176px]'>Explore Now</button>
            <button className='btn bg-transparent font-bold w-[176px] rounded-full border-solid outline-none text-white'>Our Feedback</button>
          </div>
        </div>

      </div>


      {/* End of the banner section */}

      <Recipes></Recipes>

      {/* This is the our recipes section  */}


      {/* End of our recipes section */}

    </>
  )
}

export default App
