import CardSection from "../CardsSection/CardSection";
import PaymentMethods from "../CardsSection/PaymentMethods";
import TableSection from "../CardsSection/TableSection";
import HeroSection from "../Herosection/HeroSection";

export default function Homepage() {
  return (
    <div className="bg-mainbg">
      
      <HeroSection/>
      <CardSection/>
      <PaymentMethods/>
      <TableSection/>
    </div>
  )
}
