import logo from '../../assets/logo.png'
import secondlogo from '../../assets/footerlogo.png'
import footericon1 from '../../assets/footericon(1).png'
import footericon2 from '../../assets/footericon(2).png'
import footericon3 from '../../assets/footericon(3).png'
import footericon4 from '../../assets/footericon(4).png'

export default function Footer() {
  return (
    <footer className="bg-secondarycl px-4 pt-20 pb-4">
      <div className='max-w-screen-2xl mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-20 md:border-b  md:border-[#54616A26] pb-10">
        <div className="col-span-4 md:col-span-2 xl:cols-span-1 flex flex-col justify-start items-start gap-2 md:border-r md:border-[#54616A26] md:pr-4 lg:pr-20">
          <img src={logo} alt="Logo" />
          <p className='text-xs leading-6 font-normal text-footertext'>BN.GAME offers gambling with a risk factor. You must be over the age of 18 to be a user of our site. We are not responsible for violating any local laws in your area regarding online gambling. Play responsibly and have fun with BN.GAME.</p>
        </div>
        <div className='col-span-4 md:col-span-2 xl:cols-span-3 flex flex-col md:flex-row justify-start'>
          <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-2'>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Help Center
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Terms of Use
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Privacy Policy
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Gambling Awareness
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              AML
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Self Execution
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Blog
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Sports Rules
            </p>
            <p className='uppercase text-xs font-normal leading-7 text-footerlinks'>
              Verify Representative
            </p>
          </div>
          <div className='flex flex-col justify-start items-start max-w-full md:max-w-1/2'>
              <div className='flex flex-col gap-1'>
                <p className='text-xs text-footertext uppercase'>Contact Us</p>
                <div className='flex gap-10'> <p className='text-xs text-footertext'>Get Help : <span className='text-btncl'>@gamblify</span></p>
                  <p className='text-xs text-footertext'>Business : <span className='text-btncl'>Business@mail.com</span></p>
                </div> 
          </div>
            
            <div className='flex flex-col gap-2 py-3'>
             <p className='text-footertext text-xs'>Accepted Currencies</p>
            </div>
          </div>

        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 py-6  md:border-b  md:border-[#54616A26]'>
        <div className='flex flex-col md:flex-row gap-4 md:border-r md:border-[#54616A26] md:pr-10 col-span-4 md:col-span-2 xl:col-span-1'>
        <img src={secondlogo} alt="Gaming Logo" className='w-28 h-20' />
        <p className='text-xs leading-5 text-footertext'>BN.GAME is operated by Royal Way N.V. (Commercial register of Curaçao no. 161620, Abraham de Veerstraat 9, Willemstad, Curaçao) under a sublicense Gaming Curacao pursuant to Master gaming License #365/JAZ. Payment agent company is Altrimax Limited with address A.G. Leventi, 5, The Leventis Gallery Tower, 13th floor, Office 1301, 1097, Nicosia, Cyprus and Registration number: HE 416902</p>
        </div>
        <div className='flex gap-4 md:gap-10 col-span-4 md:col-span-2 xl:col-span-1 md:px-6 py-2 justify-between items-center'>
        <img src={footericon1} alt="" className='w-16 h-8' />
        <img src={footericon2} alt="" className='w-9 h-8'/>
        <img src={footericon3} alt="" className='w-24 h-8'/>
        <img src={footericon4} alt="" className='w-9 h-9'/>
        </div>
      </div>
      <p className='text-footertext text-xs py-2 text-center'>©2023 bn.game ALL RIGHTS RESERVED</p></div>
    </footer>
  )
}
