import React from 'react';
import { Link } from "react-router-dom";
import HeartIcon from "../assets/img/heart.svg"
import cartIcon from "../assets/img/shopping-cart.svg";
import backIcon from "../assets/img/chevron-left.svg";
import product1 from "../assets/img/Frame 60166.svg";
import product2 from "../assets/img/Frame 60177.svg";
import product3 from "../assets/img/Frame 60178.svg";
import product4 from "../assets/img/Frame 60179.svg";
import starIcon from "../assets/img/star.svg";

  
const All: React.FC = () => {
    return (

        <div>

            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <Link to="/home">
                        <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                    </Link>
                    <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-[Manrope]">See all</div>
                </div>
                <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                    <Link to="/favourite"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                    <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                </div>
            </div>
            
            <div className='mx-3 mt-4 2xl:mt-8 grid grid-cols-2 md:grid-cols-4 gap-5'>
                <div>
                <Link to="/details"><img className='' src={product1} alt="" /></Link>
                    <div className='mt-4'>
                        <div>
                            <p>Gown</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" /> 
                                </div>
                                <span className='font-[Inter]'>(1000+)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><span className='text-style-deep-purple text-2xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                <div className="px-1.5 py-0.5 rounded-xl border-2 border-stone-900 justify-center items-center flex">
                                    <div className="text-center text-style-red text-xl md:text-lg font-medium font-['Manrope']">-10%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4 justify-center'>
                            <Link to="/cart"><button className='rounded-xl px-1.5 py-0.5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Add To Cart</div></button></Link>

                        </div>
                    </div>

                </div>
                <div>
                    <img className='' src={product2} alt="" />
                    <div className='mt-4'>
                        <div>
                            <p>Gown</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" /> 
                                </div>
                                <span className='font-[Inter]'>(1000+)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><span className='text-style-deep-purple text-2xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                <div className="px-1.5 py-0.5 rounded-xl border-2 border-stone-900 justify-center items-center flex">
                                    <div className="text-center text-style-red text-xl md:text-lg font-medium font-['Manrope']">-10%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4 justify-center'>
                        <Link to="/cart"><button className='rounded-xl px-1.5 py-0.5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Add To Cart</div></button></Link>

                        </div>
                    </div>

                </div>
                <div>
                    <img className='' src={product3} alt="" />
                    <div className='mt-4'>
                        <div>
                            <p>Gown</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" /> 
                                </div>
                                <span className='font-[Inter]'>(1000+)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><span className='text-style-deep-purple text-2xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                <div className="px-1.5 py-0.5 rounded-xl border-2 border-stone-900 justify-center items-center flex">
                                    <div className="text-center text-style-red text-xl md:text-lg font-medium font-['Manrope']">-10%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4 justify-center'>
                        <Link to="/cart"><button className='rounded-xl px-1.5 py-0.5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Add To Cart</div></button></Link>

                        </div>
                    </div>

                </div>
                <div>
                    <img className='' src={product4} alt="" />
                    <div className='mt-4'>
                        <div>
                            <p>Gown</p>
                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" />
                                    <img className='w-6' src={starIcon} alt="" /> 
                                </div>
                                <span className='font-[Inter]'>(1000+)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div><span className='text-style-deep-purple text-2xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                <div className="px-1.5 py-0.5 rounded-xl border-2 border-stone-900 justify-center items-center flex">
                                    <div className="text-center text-style-red text-xl md:text-lg font-medium font-['Manrope']">-10%</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-4 justify-center'>
                        <Link to="/cart"><button className='rounded-xl px-1.5 py-0.5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Add To Cart</div></button></Link>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default All;