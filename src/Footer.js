import React from 'react'
import food_truck from './images/Screenshot 2024-09-05 150341.png';

function Footer() {
  return (
    <div className="bg-slate-200 text-white py-8">
        <div className="container flex md:flex-row justify-around items-center">
            <div className="flex mb-4 md:mb-0">
                <img src={food_truck} alt="Food Truck Logo" className="w-40 "/>
            </div>
            <div className="flex flex-col text-center md:text-left mb-4 md:mb-0 text-black">
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <address>
                    Lorem Ipsum Pvt Ltd, S1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434<br/>
                    Email: example2020@gmail.com<br/>
                    Phone: (904) 443-0343
                </address>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-right text-black">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">More</h3>
                    <ul className="list-none space-y-2">
                        <li><a href="#" className="text-black hover:text-slate-500">About Us</a></li>
                        <li><a href="#" className="text-black hover:text-slate-500">Products</a></li>
                        <li><a href="#" className="text-black hover:text-slate-500">Career</a></li>
                        <li><a href="#" className="text-black hover:text-slate-500">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 mb-24 text-center md:text-right text-black">
                    <h3 className="text-xl text-black font-semibold mb-2">Social Links</h3>
                    <div className="flex justify-center space-x-4">
                        <a href="#"><img src="instagram-icon.png" alt="Instagram" className="w-6 h-6"/></a>
                        <a href="#"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6"/></a>
                        <a href="#"><img src="facebook-icon.png" alt="Facebook" className="w-6 h-6"/></a>
                    </div>
                </div>
        </div>
        <p className="text-center text-gray-400 mt-6">© 2022 Food Truck Example</p>
    </div>
  )
}

export default Footer
