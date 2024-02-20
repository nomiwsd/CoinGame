import { useSidebar } from "../Homepage/SidebarContext";
import Sidebar from "../Homepage/Sidebar";
import Footer from '../Footer/Footer'
import MessageSect from "../Homepage/MessageSect";
import referal from '../../assets/referal.png'
import dollar from '../../assets/dollar.png'
import facebook from '../../assets/fb.png'
import Medal from '../../assets/Medal.png'
import { IoMdEye } from "react-icons/io";
import { GrShareOption } from "react-icons/gr";
import { IoChatboxEllipsesSharp, IoMenu, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { LiaClipboardSolid } from "react-icons/lia";
import { MdOutlineClose } from "react-icons/md";
import Modal from "../Header/Modal";
import openbox from '../../assets/openbox.png'
import closebox from '../../assets/closebox.png'
export default function Affiliate() {
    const { sidebarOpen, setSidebarOpen, msgbarOpen, setMsgbarOpen,isQuestModalOpen, closeQuestModal } = useSidebar();

    const [affialiateselectedButton, setAffiliateSelectedButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
        setAffiliateSelectedButton(buttonNumber);
    };
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
                    <h2 className="text-4xl text-white uppercase">Affiliate program</h2>
                    <div className="flex justify-center items-center">
                        <div className='bg-secondarycl rounded-full h-10 hidden md:flex justify-center items-center w-56'>
                            <button
                                className={`py-2 px-2 rounded-full  w-full flex items-center gap-1 ${affialiateselectedButton === 1
                                    ? "bg-btncl text-white"
                                    : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                    }`}
                                onClick={() => handleButtonClick(1)}
                            >
                                <IoMdEye className="text-lg text-white" /> Overview
                            </button>
                            <button
                                className={`py-2 px-2 rounded-full w-full flex items-center gap-1 ${affialiateselectedButton === 2
                                    ? "bg-btncl text-white"
                                    : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                    }`}
                                onClick={() => handleButtonClick(2)}
                            >
                                <GrShareOption className='text-lg text-white' /> Affiliate
                            </button>
                        </div>
                    </div>
                    <div className="px-4 py-4 bg-primarycl rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="bg-secondarycl px-2 py-2 flex flex-col justify-between gap-1 rounded-md h-80">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-3 justify-center md:justify-start items-center md:items-start w-full border-b border-b-[#273446]">
                                    <img src={referal} alt="" className="w-10 h-10" />
                                    <div className="flex flex-col gap-1 w-full">
                                        <p className="text-white text-sm font-normal">Referrals</p>
                                        <p className="text-white text-sm font-normal">0</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 justify-center md:justify-start items-center md:items-start w-full border-b border-b-[#273446]">
                                    <img src={dollar} alt="" className="w-10 h-10" />
                                    <div className="flex flex-col gap-1 w-full">
                                        <p className="text-white text-sm font-normal">Total withdrawn</p>
                                        <p className="text-white text-sm font-normal">0 USD</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 justify-center md:justify-start items-center md:items-start w-full">
                                    <img src={dollar} alt="" className="w-10 h-10" />
                                    <div className="flex flex-col gap-1 w-full">
                                        <p className="text-white text-sm font-normal">Total Earned</p>
                                        <p className="text-white text-sm font-normal">0 USD</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-[#6E34E2B2] text-white w-full py-2 rounded-md">Get Money Now </button>
                        </div>
                        <div className="bg-secondarycl px-2 py-2 flex flex-col justify-between gap-1 rounded-md h-80">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1 justify-center md:justify-start items-center md:items-start w-full">
                                    <p className="text-white text-sm font-normal">My Referral Link</p>
                                    <div className="flex justify-between bg-primarycl text-white w-full rounded-md">
                                        <input type="text" className="border-none bg-transparent focus:outline-none" />
                                        <button className="rounded py-2 px-2 bg-btncl text-white flex items-center gap-1"> <LiaClipboardSolid className='text-lg text-white' /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-start">
                                    <p className="text-base text-white font-normal">Share</p>
                                    <img src={facebook} alt="" className="w-10 h-10" />
                                </div></div>
                            <button className="bg-btncl text-white w-full py-2 rounded-md">
                                Get Promo Materials
                            </button>
                        </div>
                        <div className="bg-secondarycl px-2 py-2 flex flex-col justify-between gap-2 md:gap-3 rounded-md h-80">
                            <div className="bg-[#273446] flex gap-3 justify-center md:justify-start items-center md:items-start w-full px-2 py-2 rounded-md">
                                <div className="bg-mainbg py-2 px-4 rounded-md text-white">1</div>
                                <div className="flex flex-col w-full">
                                    <p className="text-white text-xs font-normal"> <span className="text-[#FA305CB2]">Share</span> To Friends</p>
                                    <p className="text-[#92A0B4] text-sm font-normal">Share your referral link or code to your friends</p>
                                </div>
                            </div>
                            <div className="bg-[#273446] flex gap-3 justify-center md:justify-start items-center md:items-start w-full px-2 py-2 rounded-md">
                                <div className="bg-mainbg py-2 px-4 rounded-md text-white">2</div>
                                <div className="flex flex-col w-full">
                                    <p className="text-white text-xs font-normal">Get <span className="text-[#FA305CB2]">1000$</span> </p>
                                    <p className="text-[#92A0B4] text-sm font-normal">Your awards will be locked for now</p>
                                </div>
                            </div>

                            <div className="bg-[#273446] flex gap-3 justify-center md:justify-start items-center md:items-start w-full px-2 py-2 rounded-md">
                                <div className="bg-mainbg py-2 px-4 rounded-md text-white">3</div>
                                <div className="flex flex-col w-full">
                                    <p className="text-white text-xs font-normal"> Level Up &  <span className="text-[#FA305CB2]">Received</span></p>
                                    <p className="text-[#92A0B4] text-sm font-normal">Your friend’s level will unlock your awards (see rules below)</p>
                                </div>
                            </div>

                            <button className="bg-[#FA305C] text-white w-full py-2 rounded-md">Details</button>
                        </div>

                    </div>
                    <div className="bg-primarycl text-white py-2 px-6 rounded-md flex flex-col gap-3">
                        <p className="text-sm font-normal text-white">Promote BN.GAME and make money! Receive passive income for each player who clicks on your link, registers and plays on our platform website. As a member of the affiliate program, you earn a commission on all bets made by your referrals to casinos or sports events.</p>
                        <p className="text-sm font-normal text-white">This means that unlike traditional affiliate programs, you earn the same commission whether they win or lose! The more players you attract, the higher your income will be. Keep track of how your referrals come in and what bonuses you get for their bets.</p>
                    </div>
                    <div className="bg-primarycl text-white py-2 px-6 rounded-md flex flex-col md:flex-row justify-center gap-4">
                        <img src={Medal} alt="" className="w-24 h-24" />
                        <div className="flex flex-col gap-4">              <div className="flex flex-col gap-1">
                            <p className="text-white text-sm font-normal">If you, being a member of an affiliate program, have special offers of cooperation, or have access to a wide audience, contact our support team. We can discuss a customized program with you that offers a higher commission, based on the opinion of our marketing manager.</p>
                            <p className="text-white text-sm font-normal">
                                Contact our manager to discuss conditions - <span className="text-[#2383F6]">partner@BN.GAME</span>
                            </p>
                        </div>
                            <p className="text-sm text-white font-normal">Important: Only users who have passed the manager`s requirements and only after agreement with the manager can participate in the program.</p>
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
