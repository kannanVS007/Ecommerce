import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    const handleAdminPanelClick = () => {
        window.open('/admin', '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='flex items-center justify-between py-3 font-medium bg-white fixed top-0 left-0 w-full z-50 shadow-md px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            {/* Logo */}
            <div className="flex items-center">
                {/* <Link to='/'>
                    <img className='w-14 h-auto' src={assets.logo} alt="Logo" />
                </Link> */}
                <span
  className="text-xl font-bold ml-2 bg-gradient-to-r from-[rgb(234,67,53)] via-[rgb(251,188,5)] to-[rgb(66,133,244)] text-transparent bg-clip-text"
>
  Riya's Couture.
</span>
            </div>
            {/* Menu Links (Desktop) */}
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            {/* Icons and Admin Panel */}
            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="Search Icon" />
                <div className='group relative'>
                    <Link to='/login'>
                        <img onClick={() => navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="Profile Icon" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>

                {/* Cart Icon */}
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="Cart Icon" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                {/* Admin Panel Button (Desktop) */}
                <button onClick={handleAdminPanelClick} className="hidden sm:block bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm">
                    Admin Panel
                </button>

                {/* Mobile Menu Icon */}
                <img onClick={toggleMenu} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="Menu Icon" />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden`}>
                <div className='flex flex-col h-full'>
                    <div className='flex justify-between items-center p-4 border-b'>
                        <h2 className='text-xl font-bold'>Menu</h2>
                        <img onClick={closeMenu} className='w-5 cursor-pointer' src={assets.cross_icon} alt="Close Menu" />
                    </div>
                    <nav className='flex flex-col flex-grow'>
                        <NavLink onClick={closeMenu} to="/" className='py-3 px-4 border-b'>Home</NavLink>
                        <NavLink onClick={closeMenu} to='/collection' className='py-3 px-4 border-b'>Collection</NavLink>
                        <NavLink onClick={closeMenu} to='/about' className='py-3 px-4 border-b'>About</NavLink>
                        <NavLink onClick={closeMenu} to='/contact' className='py-3 px-4 border-b'>Contact</NavLink>
                        <button onClick={() => { closeMenu(); handleAdminPanelClick(); }} className='py-3 px-4 border-b text-left'>Admin Panel</button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;