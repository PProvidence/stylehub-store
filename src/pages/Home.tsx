import React from 'react';
import mobHero from "../assets/img/mobileHero1.svg"
import heroImg from "../assets/img/Desktop image.png";
import camIcon from "../assets/img/camera.svg"
import searchIcon  from "../assets/img/search.svg";
import cartIcon from "../assets/img/shopping-cart.svg";
import bellIcon from "../assets/img/bell.svg";
import { Link } from "react-router-dom";
import popular1 from "../assets/img/Frame 60172.png";
import popular2 from "../assets/img/Frame 60173.png";
import popular3 from "../assets/img/Frame 60279.png";
import popular4 from "../assets/img/Frame 60280.png";

const Home: React.FC = () => {
    return (
        <div>
            <div className='flex w-full justify-between items-center my-4'>
                <img className='w-7 ms-2 md:w-10' src={camIcon} alt="" />
                <div className='flex w-3/5 p-2 md:mx-3 bg-style-white justify-start items-center rounded-xl'>
                    <button className='bg-style-white ms-1'><img className='w-6 md:w-8' src={searchIcon} alt="search icon" /></button>
                    <input className=' text-xs md:text-base w-full mx-2 py-2 rounded-lg bg-style-white' type="text" name="" id="" placeholder='Search your style'/>
                </div>
                <div className='flex me-2  gap-3 md:gap-5'>
                    <Link to="/cart         "> <img className='w-6 md:w-8' src={cartIcon} alt=" cart shortcut" /> </Link>
                    <img className='w-6 md:w-8' src={bellIcon} alt="notifications" />
                </div>
            </div>
            <img className='flex sm:hidden w-full' src={mobHero} alt="mobile hero img" />
            <img className='hidden sm:flex w-full' src={heroImg} alt="desktop hero img" />

            <section className='px-4'>
                <div className='flex gap-3 text-center justify-between mt-4 2xl:mt-8'>
                    <div className=" w-20 md:w-28 px-2 md:py-1 flex items-center justify-center bg-style-purple rounded-lg">
                        <div className="text-style-white md:text-xl font-semibold font-['Manrope']">Man</div>
                    </div>
                    <div className=" w-20 md:w-28 px-2 py-1  flex items-center justify-center bg-style-purple rounded-lg">
                        <div className="text-style-white md:text-xl font-semibold font-['Manrope']">Woman</div>
                    </div>
                    <div className=" w-20 md:w-28 px-2 py-1  flex items-center justify-center bg-style-purple rounded-lg">
                        <div className="text-style-white md:text-xl font-semibold font-['Manrope']">Kids</div>
                    </div>
                    <div className=" w-20 md:w-28 px-2 py-1  flex items-center justify-center    bg-style-purple rounded-lg">
                        <div className="text-style-white md:text-xl font-semibold font-['Manrope']">Sport</div>
                    </div>
                </div>
                <div className="flex mt-4 2xl:mt-8 justify-between items-center">
                    <div className="text-style-deep-purple text-lg 2xl:text-3xl font-semibold font-['Manrope']">Popular</div>
                    <Link to="/all" className="text-style-ash hover:text-style-deep-purple text-lg 2xl:text-3xlfont-semibold font-['Manrope']">See all</Link>
                </div>
                <div className=' mt-4 2xl:mt-8 grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <Link to="/details"><img className='' src={popular1} alt="" /></Link>
                    <Link to="/details"><img className='' src={popular2} alt="" /></Link>
                    <Link to="/details"><img className='' src={popular3} alt="" /></Link>
                    <Link to="/details"><img className='' src={popular4} alt="" /></Link>
                </div>
            </section>
        </div>
    );
};

export default Home;