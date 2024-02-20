import logo from '../../assets/logo.png'
import { MdOutlineClose } from "react-icons/md";
import qrcode from '../../assets/qrcode.png'
import btc from '../../assets/btc.png'
import usd from '../../assets/usd.png'
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { LiaClipboardSolid } from "react-icons/lia";

import { Cryptos } from "../../utils/data";
import { Link } from 'react-router-dom';
export default function DepositMoney() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    const [walletselectedButton, setWalletSelectedButton] = useState(1);
    const handleWalletButtonClick = (buttonNumber) => {
        setWalletSelectedButton(buttonNumber);
    };
    return (
        <div className='bg-mainbg flex justify-center items-center py-28'>
            <div className="bg-primarycl flex flex-col md:flex-row justify-between rounded-lg">
                <div className="flex flex-col gap-4 px-4 py-10 w-full md:w-[55%]">
                    <p className="text-lg font-bold text-white">Wallet</p>
                    <div className="flex gap-2">
                        <button
                            className={`rounded-md flex flex-col justify-center items-center w-28 h-16 ${walletselectedButton === 1
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleWalletButtonClick(1)}
                        >
                            <FaBriefcase /> Deposit
                        </button>
                        <button
                            className={` rounded-md flex flex-col justify-center items-center w-28 h-16 ${walletselectedButton === 2
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleWalletButtonClick(2)}
                        >
                            <BiMoneyWithdraw /> Withdraw
                        </button>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-white text-base">Crypto</p>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                            {Cryptos && Cryptos.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center gap-1 bg-secondarycl py-2 px-4 rounded-md">
                                    <img src={item.Image} alt="" />
                                    <p className="text-white text-sm font-normal">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {walletselectedButton === 1 && (
                    <div className="bg-secondarycl py-10 px-2 rounded-lg md:rounded-se-lg md:rounded-ee-lg w-full md:w-[45%]">
                        <div className="flex justify-end items-center">
                            <Link to='/homepage'><MdOutlineClose className='text-lg font-bold text-white' /> </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4">
                            <img src={logo} alt="" />
                            <button className="bg-btncl text-white rounded-3xl w-20 h-10">Bitcoin</button>
                            <img src={qrcode} alt="" />
                            <div className="flex gap-2 w-full items-center justify-center">
                                <div className="flex gap-1">
                                    <img src={btc} alt="" />
                                    <p className="text-base text-white font-normal">1 BTC =</p>
                                </div>
                                <div className="flex gap-1">
                                    <img src={usd} alt="" />
                                    <p className="text-base text-white font-normal">43051.8499999 USD</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-1 pb-2">
                            <p className="text-base text-white">Your BTC deposit address:</p>
                            <div className="flex justify-between bg-primarycl text-white w-full rounded-md py-2 px-2">
                                <input type="text" className="border-none bg-transparent focus:outline-none" />
                                <button className="rounded-xl py-2 px-2 bg-btncl text-white flex items-center gap-1"> <LiaClipboardSolid className='text-lg text-white' />Copy</button>
                            </div>
                        </div>
                        <div className="bg-[#D4A11F24] text-white flex items-center gap-2 py-2 px-2 rounded-md">
                            <IoIosWarning className="text-textcl text-4xl font-black" />
                            <p className="text-white text-sm font-normal">Send only BTC to this address. <br />Number of confirmations required:</p>
                        </div>
                    </div>)}
                {walletselectedButton === 2 && (
                    <div className="bg-secondarycl py-10 px-2 rounded-lg md:rounded-se-lg md:rounded-ee-lg w-full md:w-[45%]">
                        <div className="flex justify-end items-center">
                            <Link to='/homepage'><MdOutlineClose className='text-lg font-bold text-white' /> </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <img src={logo} alt="" />
                            <button className="bg-btncl text-white rounded-3xl w-28 h-10">Bitcoin</button>
                            <div className='flex flex-col gap-1 w-full'>
                                <div className="flex flex-col justify-start items-start gap-1 pb-2 w-full">
                                    <p className="text-base text-white">Balance</p>
                                    <div className="flex justify-between bg-primarycl text-white w-full rounded-md py-2 px-2">
                                        <img src={btc} alt="" />
                                        <input type="text" className="border-none bg-transparent focus:outline-none" />
                                        <p className='text-sm font-normal'>BTC</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-start gap-1 pb-2 w-full">
                                    <p className="text-base text-white">Your wallet address</p>
                                    <div className="flex justify-between bg-primarycl text-white w-full rounded-md py-2 px-2">
                                        <input type="text" className="border-none bg-transparent focus:outline-none" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-start items-start gap-1 pb-2 w-full">
                                    <p className="text-base text-white">Amount</p>
                                    <div className="flex justify-between bg-primarycl text-white w-full rounded-md py-2 px-2">
                                        <input type="text" className="border-none bg-transparent focus:outline-none" />
                                    </div>
                                </div>
                                <div className='flex gap-1 justify-between items-center w-full'>
                                    <button
                                        className={` py-1 px-2 w-16 rounded-md text-white ${activeButton === 0 ? 'bg-btncl' : 'bg-primarycl'}`}
                                        onClick={() => handleButtonClick(0)}
                                    >
                                        Min
                                    </button>
                                    <button
                                        className={`py-1 px-2 w-16 rounded-md text-white ${activeButton === 1 ? 'bg-btncl' : 'bg-primarycl'}`}
                                        onClick={() => handleButtonClick(1)}
                                    >
                                        25%
                                    </button>
                                    <button
                                        className={` py-1 px-2 w-16 rounded-md text-white ${activeButton === 2 ? 'bg-btncl' : 'bg-primarycl'}`}
                                        onClick={() => handleButtonClick(2)}
                                    >
                                        50%
                                    </button>
                                    <button
                                        className={`py-1 px-2 w-16 rounded-md text-white ${activeButton === 3 ? 'bg-btncl' : 'bg-primarycl'}`}
                                        onClick={() => handleButtonClick(3)}
                                    >
                                        75%
                                    </button>

                                </div>
                                <div className='flex flex-col gap-2 my-1'>
                                    <p className='text-red-600 text-sm font-extralight'>Minimum withdrawal amount <span>0.002 BTC</span></p>
                                    <p className='text-sm text-white font-light'>Fee 0.001 BTC <span>(You will get 0)</span> </p>
                                    <button className='bg-[#2283F6] text-white py-2 px-2 w-full rounded-md'>WithDraw</button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm text-white font-light'>The number of confirmations required:</p>

                                <div className="flex  gap-2 w-full items-center justify-start">
                                    <div className="flex gap-1">
                                        <img src={btc} alt="" />
                                        <p className="text-base text-white font-normal">1 BTC =</p>
                                    </div>
                                    <div className="flex gap-1">
                                        <img src={usd} alt="" />
                                        <p className="text-base text-white font-normal">43051.8499999 USD</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>)}
            </div>
        </div>
    )
}
