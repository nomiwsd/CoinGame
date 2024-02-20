import Sidebar from "./Sidebar";
import CardSection from "../CardsSection/CardSection";
import PaymentMethods from "../CardsSection/PaymentMethods";
import TableSection from "../CardsSection/TableSection";
import HeroSection from "../Herosection/HeroSection";
import Footer from '../Footer/Footer'
import MessageSect from "./MessageSect";
import { useSidebar } from "./SidebarContext";
import { IoChatboxEllipsesSharp, IoMenu, IoSearch } from "react-icons/io5";
import Modal from '../Header/Modal';
import { MdOutlineClose } from "react-icons/md";
import dollar from '../../assets/dollar.png'
import openbox from '../../assets/openbox.png'
import closebox from '../../assets/closebox.png'
export default function Homepage() {
  const { sidebarOpen, setSidebarOpen, msgbarOpen, setMsgbarOpen, isQuestModalOpen, closeQuestModal } = useSidebar();
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleChat = () => {
    setMsgbarOpen(!msgbarOpen);
  };
  return (
    <div className="bg-mainbg flex relative">
      <div className={`realtive ${sidebarOpen ? "md:w-60" : "md:w-20"}`}>  <div className={`fixed  inset-y-0 top-16 left-0 z-50 bg-primarycl overflow-y-auto scroll-smooth transition-transform duration-300 transform ${sidebarOpen ? "translate-x-0 md:translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <Sidebar open={sidebarOpen} />
      </div></div>
      <Modal isOpen={isQuestModalOpen} onClose={closeQuestModal} >
          <div className='flex justify-center items-center h-full max-w-[550px]'>
            <div className='w-full px-4 py-4 flex flex-col justify-center items-center'>
              <div className='flex justify-between items-center w-full'>
                <p className="text-lg font-normal text-white">Quests</p>
                <MdOutlineClose onClick={closeQuestModal} className='text-lg font-bold text-white' />
              </div>
              <p className="text-base font-normal text-white flex gap-1 my-2">
                Total rewards: <img src={dollar} alt="" className="w-5 h-5" /> <span> $0.00 USD</span>
              </p>
              <div className="flex flex-col gap-2 w-full">
                <div className="bg-thirdcl rounded-md px-2 py-2 w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 ">
                    <div className="flex items-center gap-1"> 
                      <img src={closebox} alt="" className="w-20 h-16" />
                      <div className="flex flex-col">
                        <p className="text-sm font-normal text-white">Enable 2FA</p>
                        <p className="text-xs font-light text-[#99A4B099]">Enable two-factor authentication to strengthen account security.</p>
                        <p className="text-[#FFDE01] text-base font-normal flex items-center gap-1 w-full pt-1 h-8"><img src={dollar} alt="" className="w-7 h-7" />  Earn 0.1 USD</p>
                      </div>
                    </div>
                    <button className="bg-[#6E34E2B2] rounded-md py-2 px-2 text-white w-28 h-12">Go To</button>
                  </div>
                </div>
                <div className="bg-thirdcl rounded-md px-2 py-2 w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 ">
                    <div className="flex items-center gap-1">
                      <img src={openbox} alt="" className="w-20 h-16" />
                      <div className="flex flex-col">
                        <p className="text-sm font-normal text-white">Email verification</p>
                        <p className="text-xs font-light text-[#99A4B099]">Verify your email address.</p>
                        <p className="text-[#FFDE01] text-base font-normal flex items-center gap-1 w-full pt-1 h-8"><img src={dollar} alt="" className="w-7 h-7" />  Earn 0.25 USD</p>
                      </div></div>
                    <button className="bg-btncl rounded-md py-2 px-2 text-white w-28 h-12">Claim $0.25</button>
                  </div>
                </div>
                <div className="bg-thirdcl rounded-md px-2 py-2 w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 ">
                    <div className="flex items-center gap-1">
                      <img src={closebox} alt="" className="w-20 h-16" />
                      <div className="flex flex-col">
                        <p className="text-sm font-normal text-white">Upload your avatar</p>
                        <p className="text-xs font-light text-[#99A4B099]">Upload your photo as an avatar..</p>
                        <p className="text-[#FFDE01] text-base font-normal flex items-center gap-1 w-full pt-1 h-8"><img src={dollar} alt="" className="w-7 h-7" />  Earn 0.1 USD</p>
                      </div>
                    </div>
                    <button className="bg-[#6E34E2B2] rounded-md py-2 px-2 text-white w-28 h-12">Go To</button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </Modal>
      <div className={`flex-1 overflow-hidden relative ${sidebarOpen || msgbarOpen ? "w-full" : "w-screen"}`}>
      
        <HeroSection />
        <CardSection />
        <PaymentMethods />
        <TableSection />
        <Footer />
      </div>
      <div className={`realtive ${msgbarOpen ? "w-full md:w-60" : ""}`}>  <div className={`fixed  inset-y-0 top-[70px] right-0 z-50 bg-primarycl overflow-y-auto scroll-smooth transition-transform duration-300 transform ${msgbarOpen ? "-translate-x-0 md:translate-x-0  w-full md:w-60" : "translate-x-full md:translate-x-0"}`}>
        <MessageSect open={msgbarOpen} />
      </div></div>
      <div className="fixed bottom-0 right-0 left-0 z-40 flex md:hidden bg-primarycl max-h-20 px-2 py-2">
        <div className="grid grid-cols-4 gap-2 w-full">
          <div className="flex flex-col justify-center items-center gap-1" onClick={toggleSidebar}>
            <IoMenu className="text-2xl font-bold text-white" />
            <p className="text-sm font-medium text-white">Menu</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <IoSearch className="text-2xl font-bold text-white" />
            <p className="text-sm font-medium text-white">Search</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <IoMenu className="text-2xl font-bold text-white" />
            <p className="text-sm font-medium text-white">Menu</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-1" onClick={toggleChat}>
            <IoChatboxEllipsesSharp className="text-2xl font-bold text-white" />
            <p className="text-sm font-medium text-white">Chat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
