import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
const Navbar = ({cart, addToCart, removeToCart, clearCart, subTotal}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="container mx-auto flex justify-between items-center header">
      <div className="logo">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>
      </div>
      <div className="navbar">
        <nav>
          <ul className="flex m-0 space-x-4 font-bold">
            <li>
              <Link href={"/tshirts"}> T-shirts </Link>
            </li>
            <li>
              <Link href={"/hoodies"}> Hoodies </Link>
            </li>
            <li>
              <Link href={"/sticker"}> Stickers </Link>
            </li>
            <li>
              <Link href={"/mugs"}> Mugs </Link>
            </li>
            <li>
              <Link href={"/login"}> Login </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <button onClick={toggleCart}>
          <AiOutlineShoppingCart className="mx-10 text-3xl my-5" />
        </button>
      </div>
      <div
        ref={ref}
        className="sideCart w-80 fixed top-0 right-0 py-10 px-5 bg-purple-100 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-4 cursor-pointer text-xl"
        >
          <GrClose />
        </span>
        <ol className=" font-semibold">
        {Object.keys(cart).length == 0 && <div> <img alt='no item select in cart' src="https://www.clipartmax.com/png/middle/2-20948_transparent-background-duck-clipart.png" /> </div>}
          {Object.keys(cart).map((k)=>{ 
            return <li key={k}>
              <span className="rmvCrtItem">x</span>
                <div className="flex my-3">
                <span className="w-2/3 inline-block font-semibold">
                    {cart[k].name}
                </span>
                <span className="w-1/3 flex items-center justify-center font-semibold space-x-3">
                <AiFillMinusSquare className="cursor-pointer" /><span className="mx-2">{cart[k].qty}</span>  <AiFillPlusSquare className="cursor-pointer" />
                </span>
            </div>
          </li>})}
          {/* <li>
          <span className="rmvCrtItem">x</span>
            <div className="flex my-3">
              <span className="w-2/3 inline-block font-semibold">
                Tshirt - wear the children
              </span>
              <span className="w-1/3 flex items-center justify-center font-semibold space-x-3">
              <AiFillMinusSquare className="cursor-pointer" /><span className="mx-2">1</span>  <AiFillPlusSquare className="cursor-pointer" />
              </span>
            </div>
          </li>
          <li>
          <span className="rmvCrtItem">x</span>
            <div className="flex my-3">
              <span className="w-2/3 inline-block font-semibold">
                Tshirt - wear the children
              </span>
              <span className="w-1/3 flex items-center justify-center font-semibold space-x-3">
              <AiFillMinusSquare className="cursor-pointer" /><span className="mx-2">1</span>  <AiFillPlusSquare className="cursor-pointer" />
              </span>
            </div>
          </li> */}
        </ol>
        <div className="flex">
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button>
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear Cart</button>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;
