import React from 'react';
// import { Link } from "react-router-dom";
// import HeartIcon from "../assets/img/heart.svg"
// import cartIcon from "../assets/img/shopping-cart.svg";
// import backIcon from "../assets/img/chevron-left.svg";
import All from "./All"

const Discover: React.FC = () => {
    return (
        <div>
            {/* <div className=' justify-between hidden md:flex'>
                <div className='flex items-center'>
                    <Link to="/home">
                        <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                    </Link>
                    <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-['Manrope']">Discover</div>
                </div>
                <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                    <Link to="/favourite"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                    <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                </div>
            </div> */}
            {/* <div className=' italic text-xl font-bold text-center'>
                <h2>Discover Page Coming Soon ....</h2>
            </div> */}
            <All></All>
        </div>
    );
};

export default Discover;