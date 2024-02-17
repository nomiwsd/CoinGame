import Sidebar from "./Sidebar";
import CardSection from "../CardsSection/CardSection";
import PaymentMethods from "../CardsSection/PaymentMethods";
import TableSection from "../CardsSection/TableSection";
import HeroSection from "../Herosection/HeroSection";
import Footer from '../Footer/Footer'
import MessageSect from "./MessageSect";
import { useSidebar } from "./SidebarContext";
import { IoChatboxEllipsesSharp, IoMenu, IoSearch } from "react-icons/io5";

export default function Homepage() {
  const { sidebarOpen, setSidebarOpen, msgbarOpen,setMsgbarOpen } = useSidebar();

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
        <HeroSection />
        <CardSection />
        <PaymentMethods />
        <TableSection />
        <Footer />
      </div>
      <div className={`realtive ${msgbarOpen ? "md:w-60" : ""}`}>  <div className={`fixed  inset-y-0 top-[70px] right-0 z-50 bg-primarycl overflow-y-auto scroll-smooth transition-transform duration-300 transform ${msgbarOpen ? "-translate-x-0 md:translate-x-0" : "translate-x-full md:translate-x-0"}`}>  
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
