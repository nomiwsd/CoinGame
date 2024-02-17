import Sidebar from "./Sidebar";
import CardSection from "../CardsSection/CardSection";
import PaymentMethods from "../CardsSection/PaymentMethods";
import TableSection from "../CardsSection/TableSection";
import HeroSection from "../Herosection/HeroSection";
import Footer from '../Footer/Footer'
import { useSidebar } from "./SidebarContext";
export default function Homepage() {
  const { sidebarOpen } = useSidebar();
  return (
    <div className="bg-mainbg flex">
      <Sidebar open={sidebarOpen}  />
      <div className={`flex-1 overflow-hidden ${sidebarOpen ? "w-full" : "w-screen"}`}>
        <HeroSection />
        <CardSection />
        <PaymentMethods />
        <TableSection />
        <Footer/>
      </div>
    </div>
  );
}
