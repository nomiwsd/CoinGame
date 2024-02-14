import { useState } from 'react';
import logo from '../../assets/logo.png'
import { MdMenu, MdSearch } from "react-icons/md";
import { GiSpades } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";
export default function Header() {
    const [selectedButton, setSelectedButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    return (
        <header className="bg-primarycl text-white max-h-20 py-2 px-2 md:px-4">
            <nav className="flex justify-between items-center gap-2">
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
                    <button className='bg-transparent border border-gray-200 px-4 py-2 rounded-md hover:text-black hover:bg-white text-base font-medium'>Login</button>
                    <button className='bg-btncl text-white rounded-md hover:bg-white hover:text-btncl px-4 py-2 text-base font-medium'>Registration</button>
                    <div className="relative py-2 hidden md:block">
                        <div className="absolute top-1 right-0">
                            <p className="flex w-1 h-1 items-center justify-center rounded-full bg-[#FFDC00] p-2 text-black">3</p>
                        </div>
                        {/* icon */}

                        <RiMessage2Fill className='text-3xl text-bordercl' />
                    </div>
                    <BsGlobe className='text-3xl text-bordercl hidden md:block'/>
                </div>
            </nav>
        </header>
    )
}

