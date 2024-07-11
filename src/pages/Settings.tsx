import React from 'react';
import { Link } from "react-router-dom";
import HeartIcon from "../assets/img/heart.svg"
import cartIcon from "../assets/img/shopping-cart.svg";
import backIcon from "../assets/img/chevron-left.svg";
import homeNavInactive from "../assets/img/homeNavInactive.svg";
import discoverNav from "../assets/img/discover_gray.svg";
import cartNav from "../assets/img/shopping-cart-gray-mob-nav.svg";
import heartNavActive from "../assets/img/heart-gray.svg";
import settingsNav from "../assets/img/settings.svg";

const Setting: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <Link to="/home">
                        <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                    </Link>
                    <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-['Manrope']">Setting</div>
                </div>
                <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                    <Link to="/favourite"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                    <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                </div>
            </div>
            <div className=' italic text-xl font-bold text-center'>
                <h2>Setting Page Coming Soon ....</h2>
            </div>
            <footer className='fixed bottom-1 pb-8 left-0 right-0 mt-8 px-4 flex justify-between md:hidden'>
                <div className='flex flex-col items-center'>
                    <Link to="/"><img src={homeNavInactive} alt="" /></Link>
                    <p className='text-sm xs:text-lg  sm:text-xl font-semibold'>Home</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Link to="/discover"><img src={discoverNav} alt="" /></Link>
                        <p className='text-sm xs:text-lg sm:text-xl font-semibold'>Discover</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Link to="/cart"><img src={cartNav} alt="" /></Link>
                    <p className='text-sm xs:text-lg sm:text-xl font-semibold'>Cart</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Link to="/favourite"><img src={heartNavActive} alt="" /></Link>
                    <p className='text-sm xs:text-lg sm:text-xl font-semibold'>Favorite</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Link to="/setting"><img src={settingsNav} alt="" /></Link>
                    <p className='text-sm xs:text-lg sm:text-xl font-semibold'>Setting</p>
                </div>
            </footer>
        </div>
    );
};

export default Setting;