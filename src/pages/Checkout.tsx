import React from 'react';
import { Link } from "react-router-dom";
import HeartIcon from "../assets/img/heart.svg"
import cartIcon from "../assets/img/shopping-cart.svg";
import backIcon from "../assets/img/chevron-left.svg";
import DeliveryIcon from "../assets/img/car-side_svgrepo.com.svg";
import PickupIcon from "../assets/img/cart_svgrepo.com.png";
import MastercardIcon from "../assets/img/Frame 60218.svg";
import PaypalIcon from "../assets/img/logo-paypal_svgrepo.com.png";
import VisaIcon from "../assets/img/visa-fill_svgrepo.com.png";

// import CheckoutForm from '../components/CheckoutForm';



// interface Product {
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     color :string ;
//     size:string;
//   }
  
//   interface CheckoutPageProps {
//     cartItems: Product[];
//   }

//   const Checkout: React.FC<CheckoutPageProps> = ({ cartItems }) => {
//     const [quantities, setQuantities] = useState<{ [key: number]: number }>(
//       cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
//     );
  
//     const removeFromCart = (product: Product) => {
//       // should not happen on checkoutout rather cart
//     };
  
//     const updateQuantity = (product: Product, quantity: number) => {
//       // should not happen on checkout rather cart
//     };
  
//     const handleFormSubmit = (formData: { name: string; email: string; address: string }) => {
//       console.log('Form submitted with data:', formData);
//     };

const Checkout: React.FC = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <Link to="/home">
                        <img className='w-12 sm:w-14 2xl:w-16' src={backIcon} alt="" />      
                    </Link>
                    <div className="text-style-deep-purple text-2xl sm:text-4xl 2xl:text-[80px] font-bold font-['Manrope']">Checkout</div>
                </div>
                <div className='flex me-2 items-center gap-8 md:gap-12 2xl:gap-24'>
                    <Link to="/favourite"><img className='w-6 md:w-8' src={HeartIcon} alt="favourites" /></Link>  
                    <Link to="/cart"> <img className='items- w-6 md:w-8 ' src={cartIcon} alt=" cart page" /> </Link>
                </div>
            </div>
            <div className=' text-xl font-bold text-center'>

                <div className='mx-4'>
                    <form action="/sucess" method='get' className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4 mt-6'>
                                <div className='flex items-center rounded-lg ps-4 border border-style-gray2 rounded-d shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm'>
                                    <input type="radio" id="deliveryOption1" name="deliveryOption" value="Get delivery" className='appearance- ring-inset rounded-full border-spacing-2 text-style-deep-purple border-style-white  bg-style-gray2 checked:border-transparent checked:bg-style-lavender focus:ring-1 border-ring-style-white focus:ring-style-lavender' />
                                    <label htmlFor="deliveryOption1" className='w-full py-2 ms-2 text-lg'>
                                        <div className='flex '>
                                            <img className='mx-3' src={DeliveryIcon} alt="Delivery Icon" />
                                            Get delivery
                                        </div>
                                    </label>
                                </div>
                                <div className='flex items-center rounded-lg ps-4 border border-style-gray2 rounded-d shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm'>
                                    {/* <input type="radio" id="deliveryOption1" name="deliveryOption" value="Get delivery" className='appearance- ring-inset rounded-full border-spacing-2 text-style-deep-purple border-style-white  bg-style-gray2 checked:border-transparent checked:bg-style-lavender focus:ring-1 border-ring-style-white focus:ring-style-lavender'/> */}
                                    <input type="radio" id="deliveryOption2" name="deliveryOption" value="Pickup" className='appearance- ring-inset rounded-full border-spacing-2 text-style-deep-purple border-style-white  bg-style-gray2 checked:border-transparent checked:bg-style-lavender focus:ring-1 border-ring-style-white focus:ring-style-lavender' />
                                    <label htmlFor="deliveryOption2" className='w-full py-2 ms-2 text-lg'>
                                        <div className='flex '>
                                            <img className='mx-3' src={PickupIcon} alt="Pickup Icon" />
                                            Pickup
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="text" className=' text-xl flex justify-start text-start text-style-deep-purple font-semibold'>Shipping  address</label>
                                <input type="text"  placeholder="34 Abigail street, Duste Abuja" required className='py-3 px-4 mt-4 w-full border font-normal focus:outline-none text-center bg-style-lavender-200 border-style-gray2 focus:border-2 rounded-lg shadow-sm focus:ring-style-lavender focus:border-style-lavender text-sm sm:text-base'/>
                            </div>
                        </div>

                        <div className='mt-8'>
                            <h2 className="text-2xl font-medium text-start mb-4 mx-2">Payment Information</h2>
                            <div className='p-3 flex justify-between w-full sm:w-3/5 md:w-full'>
                                <button><img className='border rounded-lg border-style-gray2' src={MastercardIcon} alt="" /></button>
                                <button><img className='border rounded-lg border-style-gray2 py-2 px-5' src={PaypalIcon} alt="" /></button>
                                <button><img className='border rounded-lg border-style-gray2 py-2 px-5' src={VisaIcon} alt="" /></button>
                            </div>
                            <div className="mb-4 mt mx-2">
                                <label htmlFor="number" className="block text-xl text-start font-medium text-style-deep-purple">
                                Card Number
                                </label>
                                <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder='Enter your card number'
                                className="py-3 px-4 mt-4 w-full border font-normal focus:outline-none text-center bg-style-lavender-200 border-style-gray2 focus:border-2 rounded-lg shadow-sm focus:ring-style-lavender focus:border-style-lavender text-sm sm:text-base"
                                required
                                />
                            </div>
                            <div className="mb-4 mx-2">
                                <label htmlFor="cardNumber" className="block text-start text-xl font-medium text-style-deep-purple">
                                CVV
                                </label>
                                <input
                                type="text"
                                id="cardNumber"
                                placeholder='Enter your cvc'
                                name="cardNumber"
                                className="py-3 px-4 mt-4 w-full border font-normal focus:outline-none text-center bg-style-lavender-200 border-style-gray2 focus:border-2 rounded-lg shadow-sm focus:ring-style-lavender focus:border-style-lavender text-sm sm:text-base"
                                required
                                />
                            </div>
                        </div>
               
                        <button
                            type="submit"
                            className="justify-self-center text-style-gray w-4/5 px-4 py-2 rounded-lg border border-style-gray2 hover:bg-style-purple hover:text-style-white"
                        > Checkout</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Checkout;