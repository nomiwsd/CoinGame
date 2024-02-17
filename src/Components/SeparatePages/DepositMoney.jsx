import { IoClose } from "react-icons/io5";
import Modal from "../Header/Modal";
import logo from '../../assets/logo.png'
import qrcode from '../../assets/qrcode.png'
import btc from '../../assets/btc.png'
import usd from '../../assets/usd.png'
import { IoIosWarning } from "react-icons/io";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Cryptos } from "../../utils/data";
export default function DepositMoney() {
    const [selectedButton, setSelectedButton] = useState(1);
    const handleButtonClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };
    return (
        <Modal>
            <div className="bg-primarycl flex justify-between">
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-bold text-white">Wallet</p>
                    <div className="flex gap-3">
                        <button
                            className={`py-2 px-2 rounded-full flex flex-col items-center gap-1 ${selectedButton === 1
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleButtonClick(1)}
                        >
                            <FaBriefcase /> Deposit
                        </button>
                        <button
                            className={`py-4 px-4 rounded-full flex items-center gap-1 ${selectedButton === 2
                                ? "bg-btncl text-white"
                                : "bg-transparent text-gray-700 hover:bg-gray-600 hover:text-gray-50"
                                }`}
                            onClick={() => handleButtonClick(2)}
                        >
                            <BiMoneyWithdraw /> Withdraw
                        </button>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-white text-base">Crpto</p>
                        <div className="grid grid-cols-5 gap-2">
                            {Cryptos && Cryptos.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center gap-1 bg-secondarycl py-2 px-4">
                                    <img src={item.Image} alt="" />
                                    <p className="text-white text-sm font-normal">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-secondarycl">
                    <div className="flex justify-end items-center">
                        <IoClose className="text-lg text-white font-extrabold" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <img src={logo} alt="" />
                        <button className="bg-btncl text-white rounded-3xl w-10 h-10"></button>
                        <img src={qrcode} alt="" />
                        <div className="flex gap-2">
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
                    <div className="flex flex-col justify-start items-start">
                        <p className="text-base text-white">Your BTC deposit address:</p>
                        <div className="flex justify-between bg-primarycl text-white">
                            <input type="text" className="border-none bg-transparent focus:outline-none" />
                            <button className="rounded-xl py-2 px-2 bg-btncl text-white">Copy</button>
                        </div>
                    </div>
                    <div className="bg-[#D4A11F24] text-white flex gap-2 py-2 px-2">
                        <IoIosWarning className="text-textcl text-xl font-black" />
                        <p className="text-white text-sm font-normal">Send only BTC to this address.Number of confirmations required:</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
