import React, { useState } from 'react'
import { RiAuctionFill } from "react-icons/ri";
import { MdLeaderboard, MdDashboard } from "react-icons/md";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill, BsInfoCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline, IoIosCreate } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/userSlice';
import { Link } from "react-router-dom";


const SideDrawer = () => {

  const [show, setShow] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <>
      {/* <div onClick={() => setShow(!show)} className='fixed right-5 top-5 bg-[#D64828] text-white text-3xl p-2 rounded-md hover:bg-[#b8381e] lg:hidden'>
        <GiHamburgerMenu />
      </div>

      <div className={`w-[100%] sm:w-[300px] bg-[#f6f4f0] h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"
        } transition-all duration-100 p-4 flex flex-col justify-between lg:left-0 border-r-[1px] border-r-stone-500`}>

        <div className='relative'>
          <Link to={"/"}>
            <h4 className="text-2xl font-semibold mb-4">
              Auction<span className="text-[#D6482b]">Edge</span>
            </h4>
          </Link>

          <ul className="flex flex-col gap-3">

            <li>
              <Link to={"/auctions"} className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150">
                <RiAuctionFill /> Auctions
              </Link>
            </li>

            <li>
              <Link to={"/leaderboard"} className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150">
                <MdLeaderboard /> Leaderboard
              </Link>
            </li>

            {
              isAuthenticated && user && user.role === "Auctioneer" && (
                <>
                  <li>
                    <Link
                      to={"/submit-commission"}
                      className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                    >
                      <FaFileInvoiceDollar /> Submit Commission
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/create-auction"}
                      className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                    >
                      <IoIosCreate /> Create Auction
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/view-my-auctions"}
                      className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                    >
                      <FaEye /> View My Auctions
                    </Link>
                  </li>
                </>
              )}

            {
              isAuthenticated && user && user.role === "Super Admin" && (
                <li>
                  <Link
                    to={"/dashboard"}
                    className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                </li>
              )}
          </ul>

          {
            !isAuthenticated ? (
              <>
                <div className="my-4 flex gap-2">
                  <Link
                    to={"/sign-up"}
                    className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to={"/login"}
                    className="text-[#DECCBE] bg-transparent border-[#DECCBE] border-2 hover:bg-[#fffefd] hover:text-[#fdba88] font-bold text-xl py-1 px-4 rounded-md"
                  >
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
                  <button className="bg-[#D6482B] font-semibold hover:bg-[#b8381e] text-xl py-1 px-4 rounded-md text-white">
                    Logout
                  </button>
                </div>
              </>
            )}

          <hr className="mb-4 border-t-[#d6482b]" />

          <ul className="flex flex-col gap-3">

            {isAuthenticated && (
              <li>
                <Link
                  to={"/me"}
                  className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
                >
                  <FaUserCircle /> Profile
                </Link>
              </li>
            )}
            
            <li>
              <Link
                to={"/how-it-works-info"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <SiGooglesearchconsole /> How it works
              </Link>
            </li>

            <li>
              <Link
                to={"/about"}
                className="flex text-xl font-semibold gap-2 items-center hover:text-[#D6482b] hover:transition-all hover:duration-150"
              >
                <BsFillInfoSquareFill /> About Us
              </Link>
            </li>
          </ul>
          <IoMdCloseCircleOutline
            onClick={() => setShow(!show)}
            className="absolute top-0 right-4 text-[28px] sm:hidden"
          />
        </div>
        <div>
          <div className="flex gap-2 items-center mb-2">
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-blue-700"
            >
              <FaFacebook />
            </Link>
            <Link
              to="/"
              className="bg-white text-stone-500 p-2 text-xl rounded-sm hover:text-pink-500"
            >
              <RiInstagramFill />
            </Link>
          </div>
          <Link
            to={"/contact"}
            className="text-stone-500 font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
          >
            Contact Us
          </Link>
          <p className="text-stone-500">&copy; AuctionEdge, LLC.</p>
          <p className="text-stone-500">
            Degined By{" "}
            <Link
              to={"/"}
              className="font-semibold hover:text-[#d6482b] hover:transition-all hover:duration-150"
            >
              Prince_Malaviya
            </Link>
          </p>
        </div>
      </div> */}

      <div 
  onClick={() => setShow(!show)} 
  className="fixed right-5 top-5 bg-yellow-500 text-black text-3xl p-2 rounded-md hover:bg-yellow-600 transition-transform transform hover:scale-105 shadow-md lg:hidden">
  <GiHamburgerMenu />
</div>

<div className={`w-[100%] sm:w-[300px] bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white h-full fixed top-0 ${show ? "left-0" : "left-[-100%]"} transition-all duration-300 ease-in-out p-4 flex flex-col justify-between lg:left-0 border-r border-gray-700 shadow-xl`}>

  <div className="relative">
    <Link to={"/"}>
      <h4 className="text-2xl font-semibold mb-4">
        <span className='text-red-400'>Auction</span><span className="text-yellow-400">Edge</span>
      </h4>
    </Link>

    <ul className="flex flex-col gap-3 text-lg">
      <li>
        <Link to={"/auctions"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
          <RiAuctionFill /> Auctions
        </Link>
      </li>
      <li>
        <Link to={"/leaderboard"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
          <MdLeaderboard /> Leaderboard
        </Link>
      </li>

      {isAuthenticated && user?.role === "Auctioneer" && (
        <>
          <li>
            <Link to={"/submit-commission"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
              <FaFileInvoiceDollar /> Submit Commission
            </Link>
          </li>
          <li>
            <Link to={"/create-auction"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
              <IoIosCreate /> Create Auction
            </Link>
          </li>
          <li>
            <Link to={"/view-my-auctions"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
              <FaEye /> View My Auctions
            </Link>
          </li>
        </>
      )}

      {isAuthenticated && user?.role === "Super Admin" && (
        <li>
          <Link to={"/dashboard"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
            <MdDashboard /> Dashboard
          </Link>
        </li>
      )}
    </ul>

    {!isAuthenticated ? (
      <div className="my-4 flex gap-3">
        <Link to={"/sign-up"} className="bg-yellow-500 font-semibold hover:bg-yellow-600 text-black text-xl py-1 px-4 rounded-md transition-transform transform hover:scale-105 shadow-md">
          Sign Up
        </Link>
        <Link to={"/login"} className="text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-500 hover:text-black font-bold text-xl py-1 px-4 rounded-md transition-transform transform hover:scale-105 shadow-md">
          Login
        </Link>
      </div>
    ) : (
      <div className="my-4 flex gap-4 w-fit" onClick={handleLogout}>
        <button className="bg-red-500 font-semibold hover:bg-red-600 text-xl py-1 px-4 rounded-md text-white transition-transform transform hover:scale-105 shadow-md">
          Logout
        </button>
      </div>
    )}

    <hr className="mb-4 border-gray-700" />

    <ul className="flex flex-col gap-3 text-lg">
      {isAuthenticated && (
        <li>
          <Link to={"/me"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
            <FaUserCircle /> Profile
          </Link>
        </li>
      )}
      <li>
        <Link to={"/how-it-works-info"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
          <SiGooglesearchconsole /> How it works
        </Link>
      </li>
      <li>
        <Link to={"/about"} className="flex gap-3 items-center hover:text-yellow-400 transition-all duration-200">
          <BsFillInfoSquareFill /> About Us
        </Link>
      </li>
    </ul>

    <IoMdCloseCircleOutline
      onClick={() => setShow(!show)}
      className="absolute top-0 right-4 text-[28px] sm:hidden cursor-pointer hover:text-yellow-500 transition-all duration-200"
    />
  </div>

  <div>
    <div className="flex gap-2 items-center mb-2">
      <Link to="/" className="bg-white text-gray-800 p-2 text-xl rounded-sm hover:text-blue-500">
        <FaFacebook />
      </Link>
      <Link to="/" className="bg-white text-gray-800 p-2 text-xl rounded-sm hover:text-pink-500">
        <RiInstagramFill />
      </Link>
    </div>
    <Link to={"/contact"} className="text-gray-450 font-semibold hover:text-yellow-400 transition-all duration-200">
      Contact Us
    </Link>
    <p className="text-gray-350">&copy; AuctionEdge, LLC.</p>
    <p className="text-gray-350">
      Designed By{" "}
      <Link to={"/"} className="font-semibold hover:text-yellow-400 transition-all duration-200">
        Prince_Malaviya
      </Link>
    </p>
  </div>
</div>

    </>

  )
}

export default SideDrawer;