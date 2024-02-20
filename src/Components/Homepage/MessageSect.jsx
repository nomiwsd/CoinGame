/* eslint-disable react/prop-types */
import { IoIosInformationCircle, IoIosSettings } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import { useSidebar } from "./SidebarContext";
import { IoClose } from "react-icons/io5";
export default function MessageSect({ open }) {
    const { msgbarOpen, setMsgbarOpen } = useSidebar();

    const closeMsgbar = () => {
        setMsgbarOpen(!msgbarOpen);
    };
    return (
        <div className={`relative h-full  md:h-[500px] md:max-h-[650px] bg-primarycl ${open ? "w-full md:w-60 md:block" : 'hidden'}`}>
            <div className="bg-secondarycl px-2 py-2 flex justify-between items-center">
                <p className="text-sm font-normal text-dashboardlinks">Global</p>
                <div className="flex gap-2">
                    <IoIosSettings className="text-lg text-dashboardlinks" />
                    <IoIosInformationCircle className="text-lg text-dashboardlinks" />

                    <IoClose  onClick={closeMsgbar} className='block md:hidden text-white text-lg font-medium' />

                </div>
            </div>
            <div className="absolute bottom-0 right-0 left-0 bg-secondarycl py-2 px-2 flex flex-col gap-2">
                <div className="flex justify-between items-center gap-2 ">
                    <input type="text" className="border-none  focus:outline-none placeholder:text-dashboardlinks text-dashboardlinks bg-primarycl px-2 py-2 rounded-md" placeholder="Log in to Chat" />
                    <VscSend className="text-xl text-dashboardlinks" />
                </div>
                <p className="text-sm text-dashboardlinks px-2"> 0/500 </p>
            </div>
        </div>
    )
}
