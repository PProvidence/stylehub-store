import React from 'react';
import heroImg from "../assets/img/Desktop image.png";
import camIcon from "../assets/img/camera.svg"
import searchIcon  from "../assets/img/search.svg";
import cartIcon from "../assets/img/shopping-cart.svg";
import bellIcon from "../assets/img/bell.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-4'>
                <img className='w-10' src={camIcon} alt="" />
                <div className='flex w-1/3 bg-style-white justify-start items-center p-3 rounded-2xl'>
                    <button className='bg-style-white'><img className='w-8' src={searchIcon} alt="search icon" /></button>
                    <input className='w-fit bg-style-white' type="text" name="" id="" placeholder='Search your style'/>
                </div>
                <div className='flex gap-5'>
                    <Link to="/cart         "> <img className='w-8' src={cartIcon} alt=" cart shortcut" /> </Link>
                    <img className='w-8' src={bellIcon} alt="notifications" />
                </div>
            </div>
            <img src={heroImg} alt="desktop hero img" />
            <div className='flex justify-between mt-4 2xl:mt-8'>
                <div className='rounded-xl w-fit bg-style-purple px-2 py-1'>
                    <div className="text-style-white text-2xl px-4  2xl:text-5xl font-semibold font-['Manrope']">Man</div>
                </div>
                <div className='rounded-xl w-fit bg-style-purple px-2 py-1'>
                    <div className="text-style-white text-2xl px-4  2xl:text-5xl font-semibold font-['Manrope']">Woman</div>
                </div>
                <div className='rounded-xl w-fit bg-style-purple px-2 py-1'>
                    <div className="text-style-white text-2xl px-4  2xl:text-5xl font-semibold font-['Manrope']">Kids</div>
                </div>
                <div className='rounded-xl w-fit bg-style-purple px-2 py-1'>
                    <div className="text-style-white text-2xl px-4  2xl:text-5xl font-semibold font-['Manrope']">Sport</div>
                </div>
            </div>
            <div className="flex mt-4 2xl:mt-8 justify-between items-center">
                <div className="text-style-deep-purple text-base 2xl:text-3xl font-semibold font-['Manrope']">Popular</div>
                <Link to="/all" className="text-style-ash hover:text-style-deep-purple text-base 2xl:text-3xlfont-semibold font-['Manrope']">See all</Link>
            </div>
        </div>
    );
};

export default Home;