import React from "react";
import headerLogo from "../assets/img/logo-skype_svgrepo.com.svg"
import { Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="flex justify-center md:justify-between  content-center h-fit">
                <div className="flex items-center">
                    <img className="w-10 md:w-12 2xl:w-24" src={headerLogo} alt="" />
                    <div className="text-style-deep-purple text-2xl 2xl:text-[64px] font-bold font-['Manrope']">StyleHub</div>
                </div>

                <nav className="hidden  w-full h-[55px] justify-end items-center md:gap-[36.56px] md:inline-flex">
                    <Link to="/" className="text-style-deep-purple 2xl:text-[40px] font-semibold font-['Manrope']">Home</Link>
                    <Link to="/discover" className="text-style-gray hover:text-style-deep-purple  2xl:text-[40px] font-semibold font-['Manrope']">Discover</Link>
                    <Link to="/cart" className="text-style-gray hover:text-style-deep-purple 2xl:text-[40px] font-semibold font-['Manrope']">Cart</Link>
                    <Link to="/favourite" className="text-style-gray hover:text-style-deep-purple 2xl:text-[40px] font-semibold font-['Manrope']">Favourite</Link>
                    <Link to="/setting" className="text-style-gray hover:text-style-deep-purple 2xl:text-[40px] font-semibold font-['Manrope']">Setting</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;