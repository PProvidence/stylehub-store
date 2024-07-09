import React from 'react';
import { Link } from "react-router-dom";
import HeartIcon from "../assets/img/heart.svg"
import cartIcon from "../assets/img/shopping-cart.svg";
import backIcon from "../assets/img/chevron-left.svg";
import product1 from "../assets/img/Frame 60166.svg";
import product2 from "../assets/img/Frame 60177.svg";
import minusIcon from "../assets/img/minus.svg";
import plusIcon from "../assets/img/plus.svg";
// import ShoppingCart from '../components/ShoppingCart';

const Cart: React.FC = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-y-8'>
            <div className='flex flex-col w-full justify-start gap-y-8 px-4 py-8'>
                {/* Header */}
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <Link to="/home">
                            <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                        </Link>
                        <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-['Manrope']">Cart</div>
                    </div>
                    <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                        <Link to="/favourite"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                        <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                    </div>
                </div>
                {/* Cart box */}
                <div className=' flex flex-col justify-center text-xl font-bold text-center'>
                    <div className="justify-between mx-2 gap-6 md:gap-8 flex flex-col md:flex-row">
                        {/* product card */}
                        <div className='flex items-start gap-3'>
                            <img className="w-44 xl:w-56 2xl:w-96 rounded-lg" src={product1} />
                            <div className="flex-col text-style-deep-purple justify-start items-start gap-y-3 flex">
                                <div className="text-center text-xl font-bold font-['Manrope']">Gown</div>
                                <div className="text-center  text-xl font-bold font-['Manrope']"><span className="">Size</span><span className="font-medium"> : </span><span className="font-normal">M</span></div>
                                <div className="text-center"><span className="text-style-deep-purple text-xl font-bold font-['Manrope']">Color : </span><span className="text-style-deep-purple text-xl font-normal font-['Manrope']">Black</span></div>
                                <div className="justify-between items-center me-2 gap-5 sm:gap-7 inline-flex">
                                    <div className="justify-start items-start flex">
                                        <div><span className='text-style-deep-purple text-xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                    </div>
                                    <div className="justify-start items-center flex">
                                        <div className="p-1 w-7 bg-style-deep-purple rounded-sm flex">                                    
                                            <img className='md:w-5' src={minusIcon} alt="" />
                                        </div>
                                        <div className=" p-1 w-7 rounded-sm border border-style-deep-purple justify-center items-center flex">
                                            <div className="text-style-deep-purple text-sm 2xl:text-4 font-bold font-['Manrope']">1</div>
                                        </div>
                                        <div className="p-1 bg-style-deep-purple rounded-sm flex">                                    
                                            <img className='md:w-5' src={plusIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product card */}
                        <div className='flex items-start- gap-3'>
                            <img className="w-44 xl:w-56 2xl:w-96 rounded-lg" src={product2} />
                            <div className="flex-col text-style-deep-purple justify-start items-start gap-y-3 flex">
                                <div className="text-center text-xl font-bold font-['Manrope']">Gown</div>
                                <div className="text-center  text-xl font-bold font-['Manrope']"><span className="">Size</span><span className="font-medium"> : </span><span className="font-normal">M</span></div>
                                <div className="text-center"><span className="text-style-deep-purple text-xl font-bold font-['Manrope']">Color : </span><span className="text-style-deep-purple text-xl font-normal font-['Manrope']">Black</span></div>
                                <div className="justify-between items-center me-2 gap-5 sm:gap-7 inline-flex">
                                    <div className="justify-start items-start flex">
                                        <div><span className='text-style-deep-purple text-xl font-bold font-[Manrope]'> $80.</span><span className="text-style-deep-purple text-sm  font-bold font-['Manrope']">95</span></div>
                                    </div>
                                    <div className="justify-start items-center flex">
                                        <div className="p-1 w-7 bg-style-deep-purple rounded-sm flex">                                    
                                            <img className='md:w-5' src={minusIcon} alt="" />
                                        </div>
                                        <div className=" p-1 w-7 rounded-sm border border-style-deep-purple justify-center items-center flex">
                                            <div className="text-style-deep-purple text-sm 2xl:text-4 font-bold font-['Manrope']">1</div>
                                        </div>
                                        <div className="p-1 bg-style-deep-purple rounded-sm flex">                                    
                                            <img className='md:w-5' src={plusIcon} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                {/* Order Summary */}
                <div className="w-full flex-col justify-start items-start gap-4 inline-flex">  
                    <div className="text-center text-style-deep-purple text-2xl font-bold font-['Manrope']">Order Summary</div>
                    
                    <div className="flex flex-col w-full">
                        <div className="text-style-deep-purple gap-5 font-['Manrope'] flex w-full justify-between">
                            <div className="text-xl">Color : </div>
                            <div className="text-xl font-semibold">2 Items</div>
                        </div>
                        <div className="text-style-deep-purple gap-5 font-['Manrope'] flex justify-between">
                            <div className="text-xl">Price Subtotal : </div>
                            <div className="text-xl font-semibold">$131.9</div>
                        </div>
                            <div className="text-style-deep-purple gap-5 font-['Manrope'] flex justify-between">
                                <div className="text-xl">Delivery fee : </div>
                                <div className="text-xl font-semibold">$30</div>
                            </div>
                            <div className="text-style-deep-purple gap-5 font-['Manrope'] flex justify-between">
                                <div className="text-xl">Discount : </div>
                                <div className="text-xl font-semibold">$20</div>
                            </div>
                            <div className="text-style-deep-purple gap-5 font-['Manrope'] flex justify-between">
                                <div className="text-xl">Total : </div>
                                <div className="text-xl font-semibold">$181,9</div>
                            </div>
                    </div>
                </div>
            </div> 
            <div className='flex mt-4 w-3/5 justify-center'>
                <Link to="/checkout" className='w-full'><button className='rounded-2xl w-full py-5 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Checkout</div></button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;