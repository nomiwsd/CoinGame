import { useState } from 'react';
import logo from '../../assets/logo.png'
import { MdMenu, MdOutlineClose, MdSearch } from "react-icons/md";
import { GiSpades } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { IoEyeOutline, IoEyeOffOutline, IoWalletSharp, IoDiceSharp, IoSettings, IoShieldCheckmarkSharp } from "react-icons/io5";
import Modal from './Modal';
import registerimg from '../../assets/Registerimg.png'
import avatar from '../../assets/uset.png'
import { Languages } from '../../utils/data';
import { useSidebar } from '../Homepage/SidebarContext';
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { IoIosInformationCircle, IoMdSettings } from "react-icons/io";
import { FaCoins, FaGift, FaMoneyBillTransfer, FaPeopleGroup, FaUser, FaUserLarge, FaWallet } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbLogout } from "react-icons/tb";
import { BiDollar, BiSolidBadgeDollar } from "react-icons/bi";
import qrcode from '../../assets/qrcode.png'
export default function Header() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isUserInfoModalOpen, setIsUserInfoModalOpen] = useState(false);
    const [isBasicSettingsModalOpen, setBasicSettingsModalOpen] = useState(false);
    const [isGLoginModalOpen, setIsGLoginModalOpen] = useState(false);
    const [isForgetModalOpen, setIsForgetModalOpen] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(1);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(prevChecked => !prevChecked);
    };
    const handleLogin = () => {
        // Perform login actions
        // After successful login, set isLoggedIn to true
        setLoggedIn(true);
        // Close the login modal
        closeLoginModal();
    };

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };


    const openBasicSettingsModal = () => {
        setBasicSettingsModalOpen(true);
    };
    const closeBasicSettingsModal = () => {
        setBasicSettingsModalOpen(false);
    };
    const openUserInfoModal = () => {
        setIsUserInfoModalOpen(true);
    };
    const closeUserInfoModal = () => {
        setIsUserInfoModalOpen(false);
    };

    const openUserModal = () => {
        setIsUserModalOpen(true);
    };
    const closeUserModal = () => {
        setIsUserModalOpen(false);
    };
    const openRegisterModal = () => {
        setIsRegisterModalOpen(true);
    };
    const closeRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const openGLoginModal = () => {
        setIsGLoginModalOpen(true);
    };

    const closeGLoginModal = () => {
        setIsGLoginModalOpen(false);
    };
    const openForgetModal = () => {
        setIsForgetModalOpen(true);
    };

    const closeForgetModal = () => {
        setIsForgetModalOpen(false);
    };
    const openLangModal = () => {
        setIsLangModalOpen(true);
    };

    const closeLangModal = () => {
        setIsLangModalOpen(false);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const { sidebarOpen, setSidebarOpen, msgbarOpen, setMsgbarOpen } = useSidebar();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleMsgbar = () => {
        setMsgbarOpen(!msgbarOpen);
    };

    const [settingsselectedButton, setSettingsSelectedButton] = useState(1);
    const handleSettingsButtonClick = (buttonNumber) => {
        setSettingsSelectedButton(buttonNumber);
    };
    return (
        <header className="bg-primarycl text-white sticky top-0 z-[100] max-h-20 py-2 px-2 md:px-4">
            <nav className="flex justify-between items-center gap-2 max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-center gap-4">
                    <div className="bg-secondarycl flex flex-col justify-center items-center rounded-3xl px-2 h-14">
                        <img src={logo} alt="Logo" className='h-12 mt-2' />
                    </div>
                    <div className='w-8 h-8 rounded-full border border-bordercl hidden md:flex justify-center items-center' onClick={toggleSidebar}>
                        <MdMenu className='text-bordercl text-2xl font-black' />
                    </div>
                    <div className='bg-secondarycl rounded-full h-10 hidden md:flex justify-center items-center'>
                        <button
                            className={`py-2 px-2 rounded-full flex items-center gap-1 ${selectedButton === 1
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            <GiSpades className='text-xl' /> Casino
                        </button>
                        <button
                            className={`py-2 px-2 rounded-full flex items-center gap-1 ${selectedButton === 2
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            <MdOutlineSportsSoccer className='text-xl' /> Sports
                        </button>
                    </div>
                    <div className='bg-secondarycl rounded-full h-8 w-8 hidden md:flex justify-center items-center '>
                        <MdSearch />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-2 md:gap-4'>
                    {isLoggedIn && (
                        <>
                            <div className='bg-secondarycl flex items-center gap-2 rounded-md'>
                                <select name="" id="" className='bg-secondarycl focus:outline-none w-28'>
                                    <option value="" >
                                        <LuCircleDollarSign className='text-btncl text-lg' /> $ 0.00</option>
                                    <option value="" >    <LuCircleDollarSign className='text-btncl text-lg font-semibold' /> @ 0.00</option>
                                </select>

                                <Link to='/DepositMoney'>
                                    <button className='bg-[#6E34E2B2] text-white py-2 px-4 rounded-md flex gap-2 items-center'>
                                        <IoWalletSharp className='text-white text-xl' />   Wallet
                                    </button>
                                </Link>
                            </div>

                            <div className='w-8 h-8 rounded-full' onClick={openUserModal}> <img src={avatar} alt="" /></div>

                            <Modal isOpen={isUserModalOpen} onClose={closeUserModal}>
                                <div className='bg-secondarycl flex flex-col gap-2'>
                                    <div className='bg-thirdcl rounded-md px-2 py-2 flex items-center gap-2'>
                                        <img src={avatar} alt="" className='w-16 h-16' />
                                        <p className='text-lg text-[#93ACD3] font-bold'>User Name</p>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 px-4 py-3 border-b border-b-[#29374B]'>
                                        <div className='flex gap-2' onClick={
                                            () => { openBasicSettingsModal(); closeUserModal() }
                                        }>
                                            <IoMdSettings className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>Global settings</p>
                                        </div>
                                        <div className='flex gap-2' onClick={() => {
                                            openUserInfoModal()
                                            closeUserModal()
                                        }}>
                                            <FaUserLarge className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>User Information</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <FaWallet className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>Wallet</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <FaMoneyBillTransfer className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>Transactions</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <FaGift className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>Bonuses</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <FaPeopleGroup className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>Affiliate</p>
                                        </div>
                                        <div className='flex gap-2'>
                                            <TfiHeadphoneAlt className='text-2xl text-[#93ACD3]' />
                                            <p className='text-lg text-[#808A97] font-light'>User Support</p>
                                        </div>
                                    </div>
                                    <div className='flex gap-2 px-4 py-2' onClick={closeUserModal}>
                                        <TbLogout className='text-2xl text-[#93ACD3]' />
                                        <p className='text-lg text-[#808A97] font-light'>Log Out</p>
                                    </div>
                                </div>
                            </Modal>

                            <Modal isOpen={isUserInfoModalOpen} onClose={closeUserInfoModal}>
                                <div className='flex flex-col gap-3 py-4 '>
                                    <div className='flex justify-between items-center px-4'>
                                        <p className='text-white text-lg font-medium'>User Information</p>
                                        <MdOutlineClose onClick={closeUserInfoModal} className='text-lg font-bold' />
                                    </div>
                                    <div className='bg-thirdcl flex flex-col md:flex-row gap-4 items-center px-4 py-2'>
                                        <img src={avatar} alt="" className='w-16 h-16' />
                                        <div className='bg-mainbg flex flex-col md:flex-row justify-center items-center gap-6 py-2 px-2 rounded-md w-full '>
                                            <div className='flex flex-col items-center gap-1'>
                                                <div className='flex gap-1 items-center'>
                                                    <IoDiceSharp className='text-sm text-[#808A97]' />
                                                    <p className='text-[#808A97] text-sm'>Total Wins</p>
                                                </div>
                                                <p className='text-sm text-white'>0</p>
                                            </div>
                                            <div className='flex flex-col items-center gap-1'>
                                                <div className='flex gap-1 items-center'>
                                                    <BiSolidBadgeDollar className='text-sm text-[#808A97]' />
                                                    <p className='text-[#808A97] text-sm'>Total Bets</p>
                                                </div>
                                                <p className='text-sm text-white'>0</p>
                                            </div>
                                            <div className='flex flex-col items-center gap-1'>
                                                <div className='flex gap-1 items-center'>
                                                    <FaCoins className='text-sm text-[#808A97]' />
                                                    <p className='text-[#808A97] text-sm'>Total Waggered</p>
                                                </div>
                                                <p className='text-sm text-white'>$ 0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 w-full px-3 py-5 gap-2'>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-16 h-16 rounded-md bg-thirdcl'></div>
                                                <div className='flex flex-col w-4/5'>
                                                    <p className='text-white text-base font-normal'>Sport</p>
                                                    <p className='text-sm text-[#9DB8E1] font-normal'>
                                                        offer a wide selection of sports events and various types of bets.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center gap-2'>
                                                <p className='text-sm text-[#9DB8E1] font-normal'>Wagered</p>
                                                <p className='text-white font-normal text-sm'>$ 0</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-16 h-16 rounded-md bg-thirdcl'></div>
                                                <div className='flex flex-col w-4/5'>
                                                    <p className='text-white text-base font-normal'>Coinsflip</p>
                                                    <p className='text-sm text-[#9DB8E1] font-normal'>
                                                        Coinsflip undefined
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center gap-2'>
                                                <p className='text-sm text-[#9DB8E1] font-normal'>Wagered</p>
                                                <p className='text-white font-normal text-sm'>$ 0</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-16 h-16 rounded-md bg-thirdcl'></div>
                                                <div className='flex flex-col w-4/5'>
                                                    <p className='text-white text-base font-normal'>BlackJack</p>
                                                    <p className='text-sm text-[#9DB8E1] font-normal'>
                                                        {`is a card game where players aim to reach a hand value of 21 or closest to it without exceeding it, while competing against the dealer's hand.`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-center gap-2'>
                                                <p className='text-sm text-[#9DB8E1] font-normal'>Wagered</p>
                                                <p className='text-white font-normal text-sm'>$ 0</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center items-center gap-1'>
                                        <p className='text-sm text-[#9DB8E1] font-light'>UserName</p>
                                        <p className='text-sm text-[#9DB8E1] font-light'>
                                            Members Since <span> 25-09-2023 </span>
                                        </p>
                                    </div>
                                </div>
                            </Modal>
                            <Modal isOpen={isBasicSettingsModalOpen} onClose={closeBasicSettingsModal}>
                                <div className='flex flex-col gap-3 py-4 '>
                                    <div className='flex justify-between items-center px-4'>
                                        <p className='text-white text-lg font-medium'>Settings</p>
                                        <MdOutlineClose onClick={closeBasicSettingsModal} className='text-lg font-bold' />
                                    </div>
                                    <div className='bg-primarycl rounded-md px-2 py-2 flex justify-between items-center'>

                                        <div className="flex justify-center items-center w-full gap-2">
                                            <button
                                                className={` rounded-md flex flex-col justify-center items-center w-40 h-16 ${settingsselectedButton === 1
                                                    ? "bg-btncl text-white"
                                                    : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                                    }`}
                                                onClick={() => handleSettingsButtonClick(1)}
                                            >
                                                <IoSettings /> Basic
                                            </button>
                                            <button
                                                className={` rounded-md flex flex-col justify-center items-center w-40 h-16 ${settingsselectedButton === 2
                                                    ? "bg-btncl text-white"
                                                    : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                                    }`}
                                                onClick={() => handleSettingsButtonClick(2)}
                                            >
                                                <IoShieldCheckmarkSharp /> Security
                                            </button>
                                            <button
                                                className={` rounded-md flex flex-col justify-center items-center w-40 h-16 ${settingsselectedButton === 3
                                                    ? "bg-btncl text-white"
                                                    : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                                    }`}
                                                onClick={() => handleSettingsButtonClick(3)}
                                            >
                                                <FaUser /> Personal Information
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {settingsselectedButton === 1 && (
                                    <div className="bg-secondarycl px-2 pt-5 pb-20 rounded-md w-full flex flex-col gap-4">
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>Currency Setting</p>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-full bg-mainbg rounded-md py-2 px-2 flex gap-2'>
                                                    <BiDollar className='text-lg text-btncl' />
                                                    <input type="text" className='border-none bg-transparent focus:outline-none' />
                                                </div>
                                                <label htmlFor="toggle" className="flex items-center cursor-pointer px-2">
                                                    <div className="relative">
                                                        <input
                                                            id="toggle"
                                                            type="checkbox"
                                                            className="hidden"
                                                            checked={checked}
                                                            onChange={toggleChecked}
                                                        />
                                                        <div className="w-10 h-4 bg-[#3BC1174D] rounded-full shadow-inner"></div>
                                                        <div
                                                            className={`absolute w-6 -top-1 h-6 bg-btncl rounded-full shadow transition ${checked ? 'left-6' : 'left-0'
                                                                }`}
                                                        ></div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>Language</p>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-full bg-mainbg rounded-md py-2 px-2 flex gap-2'>
                                                    <select name="" id="" className='bg-mainbg text-white w-full'>
                                                        <option value="">English</option>
                                                        <option value="">Urdu</option>
                                                        <option value="">Arabic</option>
                                                        <option value="">Francis</option>
                                                        <option value="">Italian</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>Private Profile</p>
                                            <div className='flex gap-2 w-full'>
                                                <div className='w-full rounded-md py-2 px-2 flex gap-2'>
                                                    <p className='text-sm font-normal text-[#9BA5AF]'>{`After making your profile private, other users won't see name alongside bets,tournaments,etc.`}</p>
                                                    <label htmlFor="toggle" className="flex items-center cursor-pointer px-2">
                                                        <div className="relative">
                                                            <input
                                                                id="toggle"
                                                                type="checkbox"
                                                                className="hidden"
                                                                checked={checked}
                                                                onChange={toggleChecked}
                                                            />
                                                            <div className="w-10 h-4 bg-[#3BC1174D] rounded-full shadow-inner"></div>
                                                            <div
                                                                className={`absolute w-6 -top-1 h-6 bg-btncl rounded-full shadow transition ${checked ? 'left-6' : 'left-0'
                                                                    }`}
                                                            ></div>
                                                        </div>
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>)}
                                {settingsselectedButton === 2 && (
                                    <div className="bg-secondarycl px-2 pt-5 pb-5 rounded-md w-full flex flex-col gap-4">
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>Your Sessions</p>
                                            <button className='bg-btncl text-white py-2 px-2 rounded-md'>View Your Sessions</button>
                                        </div>
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>Change Password</p>
                                            <div className='flex flex-col gap-3'>
                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="" className='text-sm text-[#9DB8E1]'>Old Password</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            type={passwordVisible ? 'text' : 'password'}
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                            placeholder="Enter Old Password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={togglePasswordVisibility}
                                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                                        >
                                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="" className='text-sm text-[#9DB8E1]'>New Password</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            type={passwordVisible ? 'text' : 'password'}
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                            placeholder="Enter New Password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={togglePasswordVisibility}
                                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                                        >
                                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="" className='text-sm text-[#9DB8E1]'>Confirm New Password</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            type={passwordVisible ? 'text' : 'password'}
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                            placeholder="Enter Confirm Password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={togglePasswordVisibility}
                                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                                        >
                                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex gap-2 justify-center items-center'>
                                                <IoIosInformationCircle className='text-[#9DB8E1] text-lg' />
                                                <p className='text-sm text-[#9DB8E1]'>Re-login will be required after changing the password.</p>
                                            </div>
                                            <button className='bg-btncl text-white py-2 px-2 rounded-md'>View Your Sessions</button>
                                        </div>
                                        <div className='bg-thirdcl rounded-md py-2 px-2 flex flex-col gap-2'>
                                            <p className='text-white text-base'>🔑 Two-factor Authentication</p>
                                            <p className='text-[#9DB8E1] text-sm'>Enable Two-factor Authentication to protect your account from unauthorized access.</p>
                                            <p className='text-sm text-[#9DB8E1]'>Scan the QR code with your Google Authenticator App or enter the secret key manually.</p>
                                            <div className='flex justify-center items-center'>
                                                <img src={qrcode} alt="" /></div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Your secret key</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                    placeholder=""
                                                />
                                                <p className='text-[#9DB8E1] text-sm font-normal'>Write down this code, never reveal it to others. You can use it to regain access to your account if there is no access to the authenticator.</p>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <p className='text-base text-white font-normal'>Verification code</p>
                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="" className='text-sm text-[#9DB8E1]'>Your Account password</label>
                                                    <div className="relative w-full">
                                                        <input
                                                            type={passwordVisible ? 'text' : 'password'}
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                            placeholder="Enter Account Password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={togglePasswordVisibility}
                                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                                        >
                                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="" className='text-sm text-[#9DB8E1]'>2FA Code</label>
                                                    <input
                                                        type='text'
                                                        className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                        placeholder="Enter Confirm Password"
                                                    />
                                                </div>
                                                <button className='bg-btncl text-white py-2 px-2 rounded-md'>Enable</button>
                                            </div>
                                        </div>
                                    </div>)}
                                {settingsselectedButton === 3 && (
                                    <div className="bg-secondarycl px-2 pt-5 pb-5 rounded-md w-full flex flex-col gap-2">
                                        <p className='text-white text-base'>User Information</p>
                                        <p className='text-[#9DB8E1] text-sm font-normal'>For a more considerate service, please fill in the following information to let us know about you. Thank you!</p>

                                        <div className='grid grid-cols-2 gap-2 px-2 py-2'>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Nick Name</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Date of Birth</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>First Name</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Last Name</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Country</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Zip / Postal Code</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>Address</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="" className='text-sm text-[#9DB8E1]'>City</label>
                                                <input
                                                    type='text'
                                                    className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                                />
                                            </div>

                                            <div className='flex flex-col  gap-1 w-full'>
                                                <label htmlFor="FirstName" className='text-sm font-medium text-[#9DB8E1]'>Phone Number</label>
                                                <div className='flex gap-2'>
                                                    <select name="code" id="" className='py-2 px-2 bg-primarycl text-[#808A97] w-16 rounded'>
                                                        <option value="" selected>+92</option>
                                                        <option value="">+91</option>
                                                        <option value="">+93</option>
                                                        <option value="">+94</option>
                                                        <option value="">+95</option>
                                                        <option value="">+96</option>
                                                    </select>
                                                    <input type="number" placeholder='Phone Number' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-1 w-full'>
                                                <label htmlFor="Gender" className='text-sm font-medium text-[#9DB8E1]'>Gender</label>

                                                <select
                                                    className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded"
                                                >
                                                    <option value="">Male </option>
                                                    <option value="">Female </option>
                                                    <option value="">  </option>
                                                </select>
                                            </div>

                                            <button className='text-white text-sm bg-btncl rounded-md py-2 w-full
                                        ' >Update</button>
                                        </div>

                                    </div>)}
                            </Modal>



                        </>
                    )}
                    <button className={`bg-transparent border border-gray-200 ${isLoggedIn ? 'hidden' : 'block'} px-4 py-2 rounded-md hover:text-black hover:bg-white text-base font-medium`} onClick={openLoginModal}>Login</button>
                    <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-full px-4 py-4'>
                                <div className='flex justify-end items-center'>
                                    <MdOutlineClose onClick={closeLoginModal} className='text-lg font-bold' />
                                </div>
                                <p className='text-center text-white'>Login</p>
                                <div className='flex justify-center items-center'> <img src={logo} alt="" className='py-5' />  </div>
                                <div className='flex flex-col justify-start items-start gap-1'>
                                    <label htmlFor="Email" className='text-sm font-medium text-[#9DB8E1]'>Email or Phone</label>
                                    <input type="text" placeholder='Email or Phone' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                </div>
                                <div className='flex flex-col gap-1 my-2'>
                                    <label htmlFor="password" className='text-sm font-medium text-[#9DB8E1]'>Password</label>
                                    <div className="relative w-full">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="py-2 px-4 bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                            placeholder="Enter password"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                        >
                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                        </button>
                                    </div>
                                    <div className='flex justify-end items-center pb-1'>
                                        <button className='underline border-none bg-transparent text-sm font-medium text-[#9DB8E1]' onClick={() => {
                                            closeLoginModal();
                                            -      openForgetModal();
                                        }}>Forgot your Password</button>
                                    </div>

                                    <button className='py-3 px-4 bg-btncl text-white rounded-md w-full' onClick={handleLogin}>Log In</button>
                                    <p className='text-white text-lg font-medium text-center'>OR</p>
                                    <p className='text-base font-medium text-[#808A97] text-center' onClick={() => {
                                        openGLoginModal();
                                        closeLoginModal()
                                    }}>Continue With Google</p>
                                    <hr className='w-full border-b border-b-secondarycl' />

                                    <p className='text-sm font-medium text-[#808A97] text-center'>Join BN.GAME today!  <button className='bg-transparent border-none text-textcl' onClick={() => {
                                        closeLoginModal();
                                        openRegisterModal();
                                    }}>
                                        Register Now</button> </p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <Modal isOpen={isGLoginModalOpen} onClose={closeGLoginModal}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-full px-4 py-4'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-center text-white'>Last Step</p>
                                    <MdOutlineClose onClick={closeGLoginModal} className='text-lg font-bold' />
                                </div>
                                <p className='text-left text-white text-base font-medium mt-4'>One more step to unlock your FREE SPIN</p>
                                <p className='text-xs font-normal text-white'>To make BN.GAME a better place, we would love to know more about you. Thanks a lot for your patience!</p>
                                <div className='flex flex-col md:flex-row gap-3 py-2 w-full'>
                                    <div className='flex flex-col  gap-1 w-full'>
                                        <label htmlFor="FirstName" className='text-sm font-medium text-[#9DB8E1]'>First Name</label>
                                        <input type="text" placeholder='FirstName' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <label htmlFor="lastname" className='text-sm font-medium text-[#9DB8E1]'>Last Name</label>
                                        <input
                                            type='text'
                                            className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded"
                                            placeholder="LastName"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-3 py-2'>
                                    <div className='flex flex-col justify-start items-start gap-1'>
                                        <label htmlFor="FirstName" className='text-sm font-medium text-[#9DB8E1]'>Date of Birth</label>
                                        <div className='flex gap-2'>
                                            <input type="text" placeholder='DD' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                            <input
                                                type='text'
                                                className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded"
                                                placeholder="MM"
                                            />
                                            <input
                                                type='text'
                                                className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded"
                                                placeholder="YY"
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-3 py-2 w-full'>
                                    <div className='flex flex-col  gap-1 w-full'>
                                        <label htmlFor="FirstName" className='text-sm font-medium text-[#9DB8E1]'>Phone Number</label>
                                        <div className='flex gap-2'>
                                            <select name="code" id="" className='py-2 px-2 bg-primarycl text-[#808A97] w-16 rounded'>
                                                <option value="" selected>+92</option>
                                                <option value="">+91</option>
                                                <option value="">+93</option>
                                                <option value="">+94</option>
                                                <option value="">+95</option>
                                                <option value="">+96</option>
                                            </select>
                                            <input type="number" placeholder='Phone Number' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <label htmlFor="Gender" className='text-sm font-medium text-[#9DB8E1]'>Gender</label>

                                        <select
                                            className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded"
                                        >
                                            <option value="">Male </option>
                                            <option value="">Female </option>
                                            <option value="">  </option>
                                        </select>
                                    </div>
                                </div>

                                <p className='text-base font-medium text-white'>Settings</p>
                                <div className='flex flex-col md:flex-row gap-3 py-2 w-full'>
                                    <div className='flex flex-col  gap-1 w-full'>
                                        <label htmlFor="Language" className='text-sm font-medium text-[#9DB8E1]'>Language</label>
                                        <select name="Language" id="" className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded'>
                                            <option value="" selected>English</option>
                                            <option value="">Urdu</option>
                                            <option value="">Arabic</option>
                                            <option value="">Hindi</option>
                                            <option value="">Portegese</option>
                                        </select>
                                    </div>
                                    <div className='flex flex-col gap-1 w-full'>
                                        <label htmlFor="Country" className='text-sm font-medium text-[#9DB8E1]'>Country</label>
                                        <select className="py-2 px-2 bg-primarycl text-[#808A97] w-full rounded">
                                            <option value="">India </option>
                                            <option value="">Pakistan </option>
                                            <option value="">Uinted Kingdom </option>
                                        </select>
                                    </div>
                                </div>
                                <button className='bg-btncl text-white py-2 px-4 rounded-md w-full my-3'>Update</button>
                            </div>
                        </div>
                    </Modal>
                    <Modal isOpen={isForgetModalOpen} onClose={closeForgetModal}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-full px-4 py-4'>
                                <div className='flex justify-end items-center'>
                                    <MdOutlineClose onClick={closeForgetModal} className='text-lg font-bold' />
                                </div>
                                <p className='text-center text-white'>
                                    Lost your password?
                                </p>
                                <div className='flex justify-center items-center'> <img src={logo} alt="" className='py-5' />  </div>
                                <div className='flex flex-col'>
                                    <p className='text-base font-medium text-white text-center'>Obtaining a new password is easy:</p>
                                    <ol className='px-6 text-white'>
                                        <li className='text-base font-medium text-white'>1. Please enter the email address you used to register with BN.GAME.</li>
                                        <li className='text-base font-medium text-white'>2. {`Click on "Get New Password." `}</li>
                                        <li className='text-base font-medium text-white'>
                                            3. Follow the additional instructions provided.
                                        </li>
                                    </ol>
                                </div>
                                <div className='flex flex-col justify-start items-start gap-1 my-4'>
                                    <label htmlFor="Email" className='text-sm font-medium text-[#9DB8E1]'>Your Registration Details</label>
                                    <input type="text" placeholder='Email or Phone' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                </div>
                                <button className='py-3 px-4 bg-btncl text-white rounded-md w-full'>Get New Password</button>
                                <button className='py-3 px-4 bg-transparent border border-[#2283F6] text-white rounded-md w-full my-2' onClick={() => {
                                    closeForgetModal()
                                    openLoginModal()
                                }}>Back</button>

                            </div>
                        </div>
                    </Modal>

                    <button className={`bg-btncl text-white rounded-md ${isLoggedIn ? 'hidden' : 'block'} hover:bg-white hover:text-btncl px-2 py-2 text-base font-medium `} onClick={openRegisterModal}>Registration</button>
                    <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
                        <div className='flex justify-center items-center h-full'>
                            <img src={registerimg} alt="Wait for Internet" className='hidden md:flex md:w-1/2 h-[530px] ' />
                            <div className='w-full md:w-1/2 px-4 py-4'>
                                <div className='flex justify-end items-center'>
                                    <MdOutlineClose onClick={closeRegisterModal} className='text-lg font-bold' />
                                </div>
                                <p className='text-center text-white'>Registration</p>
                                <div className='flex justify-center items-center'> <img src={logo} alt="" className='py-5' />  </div>
                                <div className='flex flex-col justify-start items-start gap-1'>
                                    <label htmlFor="Email" className='text-sm font-medium text-[#9DB8E1]'>Email address</label>
                                    <input type="text" placeholder='Email address' className='py-2 px-2 bg-primarycl text-[#808A97] w-full rounded' />
                                    <span className='text-xs font-normal text-[#808A97]'>Your email will be used to log in.</span>
                                </div>
                                <div className='flex flex-col justify-start items-start gap-1 my-2'>
                                    <label htmlFor="password" className='text-sm font-medium text-[#9DB8E1]'>Password</label>
                                    <div className="relative w-full">
                                        <input
                                            type={passwordVisible ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="py-2 px-4  bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent w-full"
                                            placeholder="Enter password"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 px-3 bg-primarycl rounded-r-md flex items-center"
                                        >
                                            {passwordVisible ? <IoEyeOutline className="h-6 w-6 text-gray-400" /> : <IoEyeOffOutline className="h-6 w-6 text-gray-400" />}
                                        </button>
                                    </div>
                                    <span className='text-xs font-normal text-[#808A97]'>Your password must be 8 or more characters long. Do not
                                        use your email address or username as a password.</span>
                                    <div className='flex justify-start items-start py-1 gap-2'>
                                        <input type="checkbox" name="agreement" id="" />
                                        <label htmlFor="agreement" className='text-sm font-medium text-[#808A97]'>
                                            I agree with <span className='text-[#2283F6]'>user agreement</span>  , and
                                            confirm that I am at least 18 years old!
                                        </label>
                                    </div>
                                    <button className='py-3 px-4 bg-btncl text-white rounded-md w-full'>Submit</button>

                                    <hr className='w-full border-b border-b-secondarycl' />

                                    <p className='text-sm font-medium text-[#808A97] text-center'>Already Registered? <button className='bg-transparent border-none text-textcl' onClick={() => {
                                        closeRegisterModal()
                                        openLoginModal()
                                    }}
                                    >Log in</button></p>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <div className="relative py-2 hidden md:block" onClick={toggleMsgbar}>
                        <div className="absolute top-1 -right-1">
                            <p className="flex w-1 h-1 items-center justify-center rounded-full text-xs font-extralight bg-[#FFDC00] p-2 text-black">3</p>
                        </div>
                        {/* icon */}

                        <RiMessage2Fill className='text-3xl text-bordercl' />
                    </div>
                    <BsGlobe className='text-3xl text-bordercl hidden md:block' onClick={openLangModal} />
                    <Modal isOpen={isLangModalOpen} onClose={closeLangModal}>
                        <div className='flex justify-center items-center h-full'>
                            <div className='w-full py-2'>
                                <div className='flex justify-between items-center border-b border-b-bordercl px-4'>
                                    <p className='text-sm font-normal h-6 w-20 border-b border-b-btncl'>Language</p>
                                    <MdOutlineClose onClick={closeLangModal} className='text-lg font-bold' />
                                </div>
                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-2'>
                                    {Languages && Languages.map((language, index) => (
                                        <button
                                            key={index}
                                            className={`px-4 py-2 text-sm font-normal rounded-md ${selectedLanguage === language ? 'bg-primarycl' : 'bg-transparent'
                                                }`}
                                            onClick={() => handleLanguageSelect(language)}
                                        >
                                            {language}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </nav>
        </header >
    )
}

