import { useState } from 'react';
import logo from '../../assets/logo.png'
import { MdMenu, MdOutlineClose, MdSearch } from "react-icons/md";
import { GiSpades } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Modal from './Modal';
import registerimg from '../../assets/Registerimg.png'
import { Languages } from '../../utils/data';
import { useSidebar } from '../Homepage/SidebarContext';
export default function Header() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isGLoginModalOpen, setIsGLoginModalOpen] = useState(false);
    const [isForgetModalOpen, setIsForgetModalOpen] = useState(false);
    const [isLangModalOpen, setIsLangModalOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(1);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
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
                    <button className='bg-transparent border border-gray-200 px-4 py-2 rounded-md hover:text-black hover:bg-white text-base font-medium' onClick={openLoginModal}>Login</button>
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

                                    <button className='py-3 px-4 bg-btncl text-white rounded-md w-full'>Log In</button>
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

                    <button className='bg-btncl text-white rounded-md hover:bg-white hover:text-btncl px-2 py-2 text-base font-medium' onClick={openRegisterModal}>Registration</button>
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
        </header>
    )
}

