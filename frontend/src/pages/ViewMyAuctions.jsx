import Spinner from "../custom-components/Spinner";
import { getMyAuctionItems } from "@/store/slices/auctionSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardTwo from "../custom-components/CardTwo";

export const ViewMyAuctions = () => {
  const { myAuctions, loading } = useSelector((state) => state.auction);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || user.role !== "Auctioneer") {
      navigateTo("/");
    }
    dispatch(getMyAuctionItems());
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <div className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
  <h1 className="text-[#d6482b] text-2xl font-bold mb-6 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
    My Auctions
  </h1>
  {loading ? (
    <Spinner />
  ) : (
    <div
      className={`${
        myAuctions.length > 2 ? "flex-grow" : ""
      } flex flex-wrap gap-8 justify-center`}
    >
      {myAuctions.length > 0 ? (
        myAuctions.map((element) => (
          <CardTwo
            title={element.title}
            startingBid={element.startingBid}
            endTime={element.endTime}
            startTime={element.startTime}
            imgSrc={element.image?.url}
            id={element._id}
            key={element._id}
            className="bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          />
        ))
      ) : (
        <h3 className="text-gray-400 text-xl font-semibold mt-8 text-center">
          You have not posted any auction.
        </h3>
      )}
    </div>
  )}
</div>

    </>
  );
};

