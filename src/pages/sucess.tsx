import React from 'react';
import { Link } from "react-router-dom";
import pass from "../assets/img/Shape (1).svg"

const Success: React.FC = () =>{
    return(
        <div className="m-3 mt-9 sm:mt-12 py-5 flex flex-col gap-3 justify-self-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className='w-40 sm:w-44' src={pass} alt="" />
                {/* <h1>Home</h1> */}
                <p className="mt-6 2xl:mt-9 text-center font-Manrope text-lg font-bold md:text-3xl xl:text-5xl">Transaction successful</p>

            </div>
            <div className='flex mt-4 w-full- w-11/12 sm:w-3/5 justify-center'>
                <Link to="/" className='w-full'><button className='rounded-2xl w-full py-3 bg-style-purple'><div className="text-center px-1.5 py-0.5 text-style-white text-lg font-bold font-['Manrope']">Send Receipt</div></button>
                </Link>
            </div>        </div>
    )
}

export default Success;