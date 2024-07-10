import React from 'react';
import { Link } from "react-router-dom";
import HeartIcon from "../assets/img/heart.svg"
import cartIcon from "../assets/img/shopping-cart.svg";
import backIcon from "../assets/img/chevron-left.svg"
import dressdetails from "../assets/img/Frame 60417.svg"
import starIcon from "../assets/img/star.svg"

const Details: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <Link to="/home">
                        <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                    </Link>
                    <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-['Manrope']">Details</div>
                </div>
                <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                    <Link to="/Details"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                    <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                </div>
            </div>
            {/* <div className=' italic text-xl font-bold text-center'>
                <h2>Details Page Coming Soon ....</h2>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                <div className='mt-8 flex justify-center'>
                    <img src={dressdetails} alt="" />
                </div>
                <div className='font-Manrope px-3'>
                    <div className=" flex-col justify-start items-start gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-center text-stone-900 text-xl font-bold ">Gown</div>
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="text-center text-stone-900 text-xl font-medium ">Size</div>
                                <div className="justify-start items-start gap-2 sm:gap-4 inline-flex">
                                    <div className="p-2 w-10 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">XS</div>
                                    </div>
                                    <div className="px-3 py-2 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">S</div>
                                    </div>
                                    <div className="px-3 py-2 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">M</div>
                                    </div>
                                    <div className="px-3 py-2 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">L</div>
                                    </div>
                                    <div className="p-2 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">XL</div>
                                    </div>
                                    <div className=" px-0.5 py-2 rounded-lg border border-stone-900 justify-center items-center flex">
                                        <div className="text-center text-stone-900 text-lg font-bold ">XXL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                            <div className="text-center text-stone-900 text-xl font-bold ">Description</div>
                            <div className="w-full"><span className="text-stone-900 text-base font-normal ">Exude timeless elegance and sophistication in this stunning black gown. Crafted with luxurious fabric and tailored to perfection, this gown effortlessly captivates with its classic silhouette and refined details............ </span><span className="text-purple-700 text-base font-bold ">Read more</span></div>
                        </div>
                        <div>
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
                    </div>
                </div>
                <div className='flex mt-4 w-4/5 justify-self-center'>
                    <Link to="/cart" className='w-full'><button className='rounded-2xl w-full py-5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Add To Cart</div></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;