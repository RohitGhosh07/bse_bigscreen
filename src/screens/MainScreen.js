import React from 'react';
import '../App.css';

const MainScreen = () => {
    return (
        <div className="h-screen overflow-hidden bg-gray-200">
            {/* Navbar */}
            <div className="w-full bg-white shadow-md px-4 py-1 flex justify-between items-center relative z-50">
                <div className="flex items-center">
                    <img src="https://i.ibb.co/gPPqZfg/bse-demo-logo.png" alt="Logo" className="object-cover w-20 h-auto ml-2 sm:ml-8" />
                </div>
                <div className="relative">
                    {/* Profile Icon with Shadow */}
                    <div className="shadow-md rounded-full p-1 bg-white"></div>
                </div>
            </div>

            {/* Advertising Strip */}
            <div className="w-full bg-white shadow-md px-4 py-3 relative z-40 mt-5 overflow-hidden whitespace-nowrap">
                <div className="flex animate-marquee space-x-4 relative">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} className="flex items-center pr-4 relative">
                            <img src="https://i.ibb.co/xJLzdGq/image-3.png" alt="Ad" className="w-12 h-12 object-cover" />
                            <div className="ml-4">
                                <div className="text-lg font-semibold mr-12">Veg Burger | Dosa Coffe</div>
                                <div className="flex items-center">
                                    <span className="px-4 py-2 text-green-700 font-bold text-center">
                                        220.00
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-2">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2"></path>
                                        </svg>
                                        22.00
                                    </span>
                                </div>
                            </div>
                            {index < 19 && <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-500"></div>}
                        </div>
                    ))}
                    {Array.from({ length: 20 }).map((_, index) => (
                        <div key={index + 20} className="flex items-center pr-4 relative">
                            <img src="https://i.ibb.co/xJLzdGq/image-3.png" alt="Ad" className="w-12 h-12 object-cover" />
                            <div className="ml-4">
                                <div className="text-lg font-semibold mr-12">Veg Burger | Dosa Coffe</div>
                                <div className="flex items-center">
                                    <span className="px-4 py-2 text-green-700 font-bold text-center">
                                        220.00
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mx-2">
                                            <path d="M9.5 2L2 13.5H17L9.5 2Z" fill="#116228" stroke="#116228" strokeWidth="2"></path>
                                        </svg>
                                        22.00
                                    </span>
                                </div>
                            </div>
                            {index < 19 && <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gray-500"></div>}
                        </div>
                    ))}
                </div>
            </div>




            {/* Main Content */}
            <div className="flex justify-around items-start mt-1 p-4">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-4 w-full  mx-2">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Items</th>
                                <th className="px-4 py-2 border-b"></th>
                                <th className="px-4 py-2 border-b">Gain</th>
                                <th className="px-4 py-2 border-b">Total Items</th>
                                <th className="px-4 py-2 border-b">Restaurant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-100 cursor-pointer">
                                    <td className=" border-b flex justify-center">
                                        <img src="https://i.ibb.co/xJLzdGq/image-3.png" alt="Restaurant" className="h-8 object-cover" />
                                    </td>
                                    <td className=" border-b text-center">Veg Burger</td>
                                    <td className=" border-b text-center">+20%</td>
                                    <td className=" border-b text-center">{rowIndex + 19}</td>
                                    <td className=" border-b flex justify-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOFQwxZFXqROAIRM6IRJrkAAmdvEdBV_tJA&s" alt="Restaurant" className="h-8 object-cover" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-4 w-full  mx-2">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b">Items</th>
                                <th className="px-4 py-2 border-b"></th>
                                <th className="px-4 py-2 border-b">Gain</th>
                                <th className="px-4 py-2 border-b">Total Items</th>
                                <th className="px-4 py-2 border-b">Restaurant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 10 }).map((_, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-gray-100 cursor-pointer">
                                    <td className=" border-b flex justify-center">
                                        <img src="https://i.ibb.co/xJLzdGq/image-3.png" alt="Restaurant" className="h-8 object-cover" />
                                    </td>
                                    <td className=" border-b text-center">Veg Burger</td>
                                    <td className=" border-b text-center">+20%</td>
                                    <td className=" border-b text-center">{rowIndex + 19}</td>
                                    <td className=" border-b flex justify-center">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOFQwxZFXqROAIRM6IRJrkAAmdvEdBV_tJA&s" alt="Restaurant" className="h-8 object-cover" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;
