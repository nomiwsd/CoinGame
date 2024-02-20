/* eslint-disable react/prop-types */
import { IoClose } from 'react-icons/io5'
import Bonus from '../../assets/Vector (1).png'
import Casino from '../../assets/Vector (2).png'
import Sports from '../../assets/Vector (3).png'
import Lottery from '../../assets/Vector (4).png'
import Affiliate from '../../assets/Vector (5).png'
import Fair from '../../assets/Vector (6).png'
import Quest from '../../assets/quest.png'
import Spin from '../../assets/spin.png'
import { useSidebar } from './SidebarContext'
import { Link } from 'react-router-dom'

const Sidebar = ({ open }) => {
  const { sidebarOpen, setSidebarOpen,openQuestModal } = useSidebar();

  const closeSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
 
  return (
    <div className={`relative z-50 md:z-40 overflow-clip bg-primarycl px-2  ${open ? "w-60 " : "w-20 hidden md:flex"}`}>
      <div className={`fixed h-full overflow-y-auto scroll-smooth py-4 flex flex-col gap-4 justify-start  ${open ? "max-w-56" : "max-w-16"}`}>
        <div className='flex justify-end items-start'>
          <IoClose on onClick={closeSidebar} className='block md:hidden text-white text-lg font-medium' />
        </div>
        <Link to='/Bonus'>
          <div className="bg-secondarycl text-white flex justify-start items-center gap-2 rounded-md py-3 px-4 w-full">
            <img src={Bonus} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
            <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden " : 'block'}`}>Bonus</p>
          </div> </Link>
        <div className={`flex gap-2 w-full ${open ? "flex-row " : 'flex-col'}`}>
          <div className='bg-gradient-to-br from-purple-200 via-purple-700 to-purple-900 text-white rounded-md flex justify-start items-center gap-3 py-2 px-2 w-fit' onClick={openQuestModal}>
            <img src={Quest} alt="Wait for Loading" className='w-12 h-8 object-contain' />
            <p className={`text-sm font-normal text-white ${!open ? "hidden" : 'block'}`}  >Quest</p>
          </div>
         
          <div>

            <div className="bg-gradient-to-br from-red-400 via-red-600 to-red-800 text-white flex justify-start items-center gap-3 rounded-md  px-2 py-3 w-full">
              <img src={Spin} alt="Wait for Loading" className='w-12 h-8 object-contain' />
              <p className={`text-sm font-normal text-white ${!open ? "hidden" : 'block'}`}>Spin</p>
            </div>
          </div>
        </div>

        <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Casino} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden" : 'block'}`}>Casino</p>
        </div>
        <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Sports} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden" : 'block'}`}>Sports</p>
        </div>
        <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Lottery} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? 'hidden' : 'block'}`}>Lottery</p>
        </div>

        <Link to='/Affiliate'>  <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Affiliate} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden" : 'block'}`}>Affiliate</p>
        </div></Link>
        <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Fair} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden" : 'block'}`}>Provably Fair</p>
        </div>
        <div className="bg-secondarycl text-white flex justify-start items-center gap-3 rounded-md w-full py-3 px-4">
          <img src={Bonus} alt="Wait for Loading" className={`${!open ? "w-full h-6" : 'w-6 h-6'}`} />
          <p className={`text-sm font-normal text-dashboardlinks ${!open ? "hidden" : 'block'}`}>Live Support</p>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
