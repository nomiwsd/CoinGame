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
export default function Header() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(1);
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
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <header className="bg-primarycl text-white max-h-20 py-2 px-2 md:px-4">
            <nav className="flex justify-between items-center gap-2 max-w-screen-2xl mx-auto">
                <div className="flex justify-between items-center gap-4">
                    <div className="bg-secondarycl flex flex-col justify-center items-center rounded-3xl px-2 h-14">
                        <img src={logo} alt="Logo" className='h-12 mt-2' />
                    </div>
                    <div className='w-8 h-8 rounded-full border border-bordercl hidden md:flex justify-center items-center'>
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
                                <div className='flex flex-col justify-start items-start gap-1 my-2'>
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
                                   <p className='text-end text-sm font-medium text-[#9DB8E1]'>Forgot your Password</p>
                                    <button className='py-3 px-4 bg-btncl text-white rounded-md w-full'>Log In</button>
                                <hr className='w-full border-b border-b-secondarycl'/>

                                <p className='text-sm font-medium text-[#808A97] text-center'>Join BN.GAME today!  <span className='text-textcl'>Register Now </span></p>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <button className='bg-btncl text-white rounded-md hover:bg-white hover:text-btncl px-4 py-2 text-base font-medium' onClick={openRegisterModal}>Registration</button>
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
                                            className="py-2 px-4  bg-primarycl rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
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
                                <hr className='w-full border-b border-b-secondarycl'/>

                                <p className='text-sm font-medium text-[#808A97] text-center'>Already Registered? <span className='text-textcl'>Log in</span></p>
                                </div>
                            </div>
                        </div>
                    </Modal>

                    <div className="relative py-2 hidden md:block">
                        <div className="absolute top-1 right-0">
                            <p className="flex w-1 h-1 items-center justify-center rounded-full bg-[#FFDC00] p-2 text-black">3</p>
                        </div>
                        {/* icon */}

                        <RiMessage2Fill className='text-3xl text-bordercl' />
                    </div>
                    <BsGlobe className='text-3xl text-bordercl hidden md:block' />
                </div>
            </nav>
        </header>
    )
}

