import Spinner from "../custom-components/Spinner";
import { getAuctionDetail } from "../store/slices/auctionSlice";
import React, { useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

export const ViewAuctionDetails = () => {
  const { id } = useParams();
  const { loading, auctionDetail, auctionBidders } = useSelector(
    (state) => state.auction
  );
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated || user.role === "Bidder") {
      navigateTo("/");
    }
    if (id) {
      dispatch(getAuctionDetail(id));
    }
  }, [isAuthenticated]);

  return (
    <>
      {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
        <div className="text-[16px] flex flex-wrap gap-2 items-center">
          <Link
            to="/"
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            Home
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <Link
            to={"/view-my-auctions"}
            className="font-semibold transition-all duration-300 hover:text-[#D6482B]"
          >
            My Auctions
          </Link>
          <FaGreaterThan className="text-stone-400" />
          <p className="text-stone-600">{auctionDetail.title}</p>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex gap-4 flex-col 2xl:flex-row">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="bg-white w-[100%] lg:w-40 lg:h-40 flex justify-center items-center p-5">
                  <img
                    src={auctionDetail.image?.url}
                    alt={auctionDetail.title}
                  />
                </div>
                <div className="flex flex-col justify-around pb-4">
                  <h3 className="text-[#111] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
                    {auctionDetail.title}
                  </h3>
                  <p className="text-xl font-semibold">
                    Condition:{" "}
                    <span className="text-[#D6482B]">
                      {auctionDetail.condition}
                    </span>
                  </p>
                  <p className="text-xl font-semibold">
                    Minimum Bid:{" "}
                    <span className="text-[#D6482B]">
                      Rs.{auctionDetail.startingBid}
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-xl w-fit font-bold">
                Auction Item Description
              </p>
              <hr className="my-2 border-t-[1px] border-t-stone-700" />
              {auctionDetail.description &&
                auctionDetail.description.split(". ").map((element, index) => {
                  return (
                    <li key={index} className="text-[18px] my-2">
                      {element}
                    </li>
                  );
                })}
            </div>
            <div className="flex-1">
              <header className="bg-stone-200 py-4 text-[24px] font-semibold px-4">
                BIDS
              </header>
              <div className="bg-white px-4 min-h-fit lg:min-h-[650px]">
                {auctionBidders &&
                auctionBidders.length > 0 &&
                new Date(auctionDetail.startTime) < Date.now() &&
                new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.map((element, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 flex items-center justify-between"
                      >
                        <div className="flex flex-1 items-center gap-4">
                          <img
                            src={element.profileImage}
                            alt={element.userName}
                            className="w-12 h-12 rounded-full my-2 hidden md:block"
                          />
                          <p className="text-[18px] font-semibold">
                            {element.userName}
                          </p>
                        </div>
                        <p className="flex-1 text-center">{element.amount}</p>
                        {index === 0 ? (
                          <p className="text-[20px] font-semibold text-green-600 flex-1 text-end">
                            1st
                          </p>
                        ) : index === 1 ? (
                          <p className="text-[20px] font-semibold text-blue-600 flex-1 text-end">
                            2nd
                          </p>
                        ) : index === 2 ? (
                          <p className="text-[20px] font-semibold text-yellow-600 flex-1 text-end">
                            3rd
                          </p>
                        ) : (
                          <p className="text-[20px] font-semibold text-gray-600 flex-1 text-end">
                            {index + 1}th
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <img
                    src="/Not_started.png"
                    alt="not-started"
                    className="w-full max-h-[650px]"
                  />
                ) : (
                  <img
                    src="/Sold Auction.jpg"
                    alt="ended"
                    className="w-full max-h-[650px]"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </section> */}

      <section className="w-full min-h-screen flex-grow ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="text-[16px] flex flex-wrap gap-2 items-center bg-[#1E1E1E] p-3 rounded-md shadow-md">
          <Link to="/" className="font-semibold transition-all duration-300 text-[#FBBF24] hover:text-[#D6482B]">Home</Link>
          <FaGreaterThan className="text-gray-500" />
          <Link to="/auctions" className="font-semibold transition-all duration-300 text-[#FBBF24] hover:text-[#D6482B]">Auctions</Link>
          <FaGreaterThan className="text-gray-500" />
          <p className="text-gray-400">{auctionDetail.title}</p>
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row gap-6 py-5">
                <div className="bg-gray-800 w-full lg:w-48 lg:h-48 flex justify-center items-center p-6 rounded-lg shadow-md">
                  <img src={auctionDetail.image?.url} alt={auctionDetail.title} className="max-h-40 object-cover rounded-md" />
                </div>
                <div className="flex flex-col justify-around pb-4 bg-gray-800 p-6 rounded-lg shadow-md my-2">
                  <h3 className="text-white text-2xl font-semibold mb-3">{auctionDetail.title}</h3>
                  <p className="text-lg font-medium text-gray-300">Condition: <span className="text-[#FBBF24] font-semibold">{auctionDetail.condition}</span></p>
                  <p className="text-lg font-medium text-gray-300">Minimum Bid: <span className="text-[#FBBF24] font-semibold">Rs.{auctionDetail.startingBid}</span></p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-[#FBBF24] mt-4">Auction Item Description</h4>
              <hr className="my-2 border-t border-gray-600" />
              <ul className="text-gray-400 text-lg bg-[#1E1E1E] p-4 rounded-md shadow-md">
                {auctionDetail.description?.split(". ").map((element, index) => (
                  <li key={index} className="my-2 before:content-['⚡'] before:mr-2 text-[#FBBF24]">{element}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1 bg-gray-800 rounded-lg shadow-md">
              <header className="bg-[#D6482B] text-white py-4 text-2xl font-semibold px-6 rounded-t-lg">BIDS</header>
              <div className="px-6 min-h-fit lg:min-h-[650px] py-4 bg-gray-900 rounded-b-lg">
                {auctionBidders && new Date(auctionDetail.startTime) < Date.now() && new Date(auctionDetail.endTime) > Date.now() ? (
                  auctionBidders.length > 0 ? (
                    auctionBidders.map((element, index) => (
                      <div key={index} className="py-3 flex items-center justify-between border-b border-gray-700">
                        <div className="flex items-center gap-4">
                          <img src={element.profileImage} alt={element.userName} className="w-12 h-12 rounded-full hidden md:block" />
                          <p className="text-lg font-semibold text-white">{element.userName}</p>
                        </div>
                        <p className={`text-lg font-semibold ${index === 0 ? "text-green-400" : index === 1 ? "text-blue-400" : index === 2 ? "text-yellow-400" : "text-gray-400"}`}>{index + 1}{index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-gray-400 py-6">No bids for this auction</p>
                  )
                ) : Date.now() < new Date(auctionDetail.startTime) ? (
                  <img src="/Not_started.png" alt="not-started" className="w-full max-h-[650px] object-contain rounded-md" />
                ) : (
                  <img src="/Sold Auction.jpg" alt="ended" className="w-full max-h-[650px] object-contain rounded-md" />
                )}
              </div>

              <div className="bg-[#D6482B] py-4 px-6 text-white text-lg md:text-xl font-semibold flex items-center justify-between rounded-b-lg">
                {Date.now() >= new Date(auctionDetail.startTime) && Date.now() <= new Date(auctionDetail.endTime) ? (
                  <>
                    <div className="flex gap-4 flex-col sm:flex-row sm:items-center">
                      <p className="text-white">Place Bid</p>
                      <input type="number" className="bg-white h-10 w-32 p-2 text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FBBF24] focus:border-[#FBBF24]" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <button className="p-4 text-white bg-black rounded-full transition-all duration-300 hover:bg-gray-700 cursor-pointer" onClick={handleBid}>
                      <RiAuctionFill />
                    </button>
                  </>
                ) : new Date(auctionDetail.startTime) > Date.now() ? (
                  <p className="text-white font-semibold text-lg">Auction has not started yet!</p>
                ) : (
                  <p className="text-white font-semibold text-lg">Auction has ended!</p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>


    </>
  );
};

