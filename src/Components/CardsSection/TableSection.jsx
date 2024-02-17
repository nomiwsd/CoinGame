import BgImage from '../../assets/bgimg.png'
import Payment1 from '../../assets/Payment (1).png'
import Payment2 from '../../assets/Payment (2).png'
import Payment3 from '../../assets/Payment (3).png'
import Payment4 from '../../assets/Payment (4).png'
import Payment5 from '../../assets/Payment (5).png'
import { TableData } from '../../utils/data'
export default function TableSection() {
    return (
        <section className=" px-4 md:px-6 lg:px-10 py-10">
            <div className="bg-secondarycl rounded bg-cover bg-no-repeat max-h-60 flex flex-col md:flex-row justify-around items-center" style={{
                backgroundImage: `url(${BgImage})`,
            }}>
                <div className='flex flex-col md:flex-row justify-around items-center  gap-10 py-4 px-4'>
                    <div className='grid grid-cols-3 items-center gap-2 justify-center'>
                        <div className=''>
                            <img src={Payment1} alt="Wait For Internet" className='w-full h-full object-contain' />
                        </div>
                        <div className=''>
                            <img src={Payment2} alt="Wait For Internet" className='w-full h-full object-contain' />
                        </div>
                        <div className=''>
                            <img src={Payment3} alt="Wait For Internet" className='w-full h-full object-contain' />
                        </div>
                        <div className=''>
                            <img src={Payment4} alt="Wait For Internet" className='w-full h-full object-contain' />
                        </div>
                        <div className=''>
                            <img src={Payment5} alt="Wait For Internet" className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>       <p className='text-lg font-normal text-white'>Fast & Easy Way to get started</p>
                            <p className='text-lg font-normal text-white'><span className='text-textcl'> 300 % </span> Deposit Bonus</p>
                        </div>
                        <button className='bg-[#6E34E2B2] text-white rounded px-4 py-2 max-w-28'>Deposit</button>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto my-5">
                <table className="table-auto min-w-full divide-y divide-gray-200">
                    <thead className=''>
                        <tr>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Game
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Player
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Time
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bet
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Multiplayer
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Payout
                            </th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {TableData && TableData.map((item,index) => (
                            <tr key={index} className=" text-tableoddtext even:bg-tablecl text-xs font-normal">
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center">{item.GameName}</td>
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center">{item.PlayerName}</td>
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center">{item.Time}</td>
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center">{item.Bet}</td>
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center">{item.Multiplayer}</td>
                                <td className="text-xs font-normal px-6 py-4 whitespace-nowrap text-center text-btncl">{item.Payout}</td>
                                {/* Add more table cells based on your data */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
