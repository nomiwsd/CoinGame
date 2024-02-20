import { useSidebar } from "../Homepage/SidebarContext";
import Sidebar from "../Homepage/Sidebar";
import Footer from '../Footer/Footer'
import MessageSect from "../Homepage/MessageSect";
import treasure from '../../assets/treasurebox.png'
import spin from '../../assets/spin.png'
import Bonus1 from '../../assets/Bonus (6).png'
import Bonus2 from '../../assets/Bonus (7).png'
import Bonus3 from '../../assets/Bonus (8).png'
import Bonus4 from '../../assets/Bonus (9).png'
import Bonus5 from '../../assets/Bonus (10).png'
import { IoChatboxEllipsesSharp, IoMenu, IoSearch } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import Modal from "../Header/Modal";

import dollar from '../../assets/dollar.png'
import openbox from '../../assets/openbox.png'
import closebox from '../../assets/closebox.png'
export default function Bonus() {
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
            <div className={`flex-1 overflow-hidden ${sidebarOpen || msgbarOpen ? "w-full" : "w-screen"}`}>
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
                <div className="flex flex-col gap-5 py-10 px-6 min-h-[880px]">
                    <div className="flex flex-col md:flex-row justify-between items-center bg-primarycl px-2 py-2 rounded-md">
                        <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-2/4">
                            <div className="flex gap-3 justify-center md:justify-start items-center md:items-start  md:w-1/2">
                                <img src={treasure} alt="" className="w-10 h-10" />
                                <div className="flex flex-col gap-1 w-full">
                                    <p className="text-[#8795A8] text-sm font-normal">Total Rewarded</p>
                                    <p className="text-[#FFBC00] text-sm font-normal">$0.00</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/2">
                                <div className="flex flex-row md:flex-col justify-between items-center gap-4 w-full md:gap-1">
                                    <p className="text-[#8795A8] text-sm font-normal">Daily</p>
                                    <p className="text-white text-sm font-normal">$0.00</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between items-center gap-4  w-full md:gap-1">
                                    <p className="text-[#8795A8] text-sm font-normal">Weekly</p>
                                    <p className="text-white text-sm font-normal">$0.00</p>
                                </div>
                                <div className="flex flex-row md:flex-col justify-between items-center  w-full gap-4 md:gap-1">
                                    <p className="text-[#8795A8] text-sm font-normal">Monthly</p>
                                    <p className="text-white text-sm font-normal">$0.00</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center md:justify-end w-2/4">
                            <button className="bg-btncl text-white py-2 px-2 rounded-md">Promocode</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex flex-col gap-1 bg-secondarycl px-2 py-2 rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">100</p>
                                    <p className="text-xs font-normal text-[#8795A8]">Free Spins for registration</p>
                                </div>
                                <p className="text-xs font-normal text-[#8795A8]">Details</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={spin} alt="" className="w-16 h-14" />
                            </div>

                            <div className="flex justify-between items-center gap-1 w-full">
                                <p className="text-xs font-normal text-[#8795A8]">Min Deposit</p>

                                <p className="text-white text-sm font-normal">No deposit</p>
                            </div>
                            <div className="flex justify-between items-center gap-1 w-full">

                                <p className="text-xs font-normal text-[#8795A8]">Wager</p>
                                <p className="text-white text-sm font-normal">X20</p>
                            </div>
                            <button className="bg-btncl py-2 px-2 rounded-md w-full text-white">
                                Activate
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="flex flex-col  gap-4 bg-secondarycl px-2 py-2 h-56 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">Daily Bonus</p>
                                </div>
                                <p className="text-xs font-normal text-[#8795A8]">Details</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={Bonus1} alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex flex-col justify-between items-center gap-1 w-full">
                                <p className="text-xs font-normal text-[#8795A8]">Claim in</p>
                                <p className="text-white text-base font-normal">10:17:19</p>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-4 bg-secondarycl px-2 py-2 h-56 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">Weekly Bonus</p>
                                </div>
                                <p className="text-xs font-normal text-[#8795A8]">Details</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={Bonus2} alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex flex-col justify-between items-center gap-1 w-full">
                                <p className="text-xs font-normal text-[#8795A8]">Claim in</p>
                                <p className="text-white text-base font-normal">04:08:17:19</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 bg-secondarycl px-2 py-2 h-56 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">Monthly Bonus</p>
                                </div>
                                <p className="text-xs font-normal text-[#8795A8]">Details</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={Bonus3} alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex flex-col justify-between items-center gap-1 w-full">
                                <p className="text-xs font-normal text-[#8795A8]">Claim in</p>
                                <p className="text-white text-base font-normal">13:08:17:19</p>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-4 bg-secondarycl px-2 py-2 h-56 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">Daily Wheel</p>
                                </div>
                                <p className="text-xs font-normal text-[#8795A8]">Details</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <img src={Bonus4} alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex flex-col justify-between items-center gap-1 w-full">
                                <p className="text-xs font-normal text-[#8795A8]">Claim in</p>
                                <p className="text-white text-base font-normal">11:56:08</p>
                            </div>
                        </div>
                        <div className="flex flex-col  gap-4 bg-secondarycl px-2 py-2 h-56 rounded-md">
                            <div className="flex justify-between items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-white text-sm font-normal">Quests</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-cnter">
                                <img src={Bonus5} alt="" className="w-24 h-24" />
                            </div>
                            <div className="flex flex-col justify-between items-center gap-1 w-full">
                                <button className="px-3 py-2 bg-btncl text-white w-20 h-10 rounded-md">Open</button>
                            </div>
                        </div>
                    </div>
                </div>
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

    )
}
