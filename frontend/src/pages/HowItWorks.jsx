import React from "react";
import {
  FaUser,
  FaGavel,
  FaEnvelope,
  FaDollarSign,
  FaFileInvoice,
  FaRedo,
} from "react-icons/fa";
import H1Heading from "../custom-components/h1Heading";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUser />,
      title: "User Registration",
      description:
        "Users must register or log in to perform operations such as posting auctions, bidding on items, accessing the dashboard, and sending payment proof.",
    },
    {
      icon: <FaGavel />,
      title: "Role Selection",
      description:
        'Users can register as either a "Bidder" or "Auctioneer." Bidders can bid on items, while Auctioneers can post items.',
    },
    {
      icon: <FaEnvelope />,
      title: "Winning Bid Notification",
      description:
        "After winning an item, the highest bidder will receive an email with the Auctioneer's payment method information, including bank transfer, Easypaisa, and PayPal.",
    },
    {
      icon: <FaDollarSign />,
      title: "Commission Payment",
      description:
        "If the Bidder pays, the Auctioneer must pay 5% of that payment to the platform. Failure to pay results in being unable to post new items, and a legal notice will be sent.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Proof of Payment",
      description:
        "The platform receives payment proof as a screenshot and the total amount sent. Once approved by the Administrator, the unpaid commission of the Auctioneer will be adjusted accordingly.",
    },
    {
      icon: <FaRedo />,
      title: "Reposting Items",
      description:
        "If the Bidder does not pay, the Auctioneer can republish the item without any additional cost.",
    },
  ];

  return (
    <>
      {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center"> */}
        {/* <h1
          className={`text-[#d6482b] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
        >
          Discover How AuctionEdge Operates
        </h1> */}
        {/* <H1Heading color={"#d6482b"}content={"Discover How AuctionEdge Operates"} />
        
        <div className="flex flex-col gap-4 my-5">
          {steps.map((element, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-md p-2 lg:p-5 flex flex-col gap-2 group hover:bg-black transition-all duration-300"
              >
                <div className="bg-black text-white p-3 text-xl rounded-full w-fit group-hover:bg-[#d6482b] transition-all duration-300">
                  {element.icon}
                </div>
                <h3
                  className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
                >
                  {element.title}
                </h3>
                <p className="text-xl text-stone-700 group-hover:text-[#fff] transition-all duration-300">
                  {element.description}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

<section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center bg-gradient-to-r from-gray-900 via-[#1E293B] to-black animate-gradient">
  <h1 className="text-red-500 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl animate-typing">
    <span className="text-yellow-400">Discover</span> How AuctionEdge <span className="text-yellow-400">Operates</span>
  </h1>

  <div className="flex flex-col gap-6 my-8">
    {steps.map((element, index) => (
      <div
        key={index}
        className="bg-blue-200 shadow-lg rounded-xl p-4 lg:p-6 flex flex-col gap-3 group hover:bg-yellow-400 transition-all duration-300 border border-gray-200"
      >
        <div className="bg-gray-900 text-white p-4 text-2xl rounded-full w-fit group-hover:bg-[#e76f51] transition-all duration-300">
          {element.icon}
        </div>
        <h3 className="text-[#D6482B] text-xl font-semibold min-[480px]:text-xl md:text-2xl lg:text-3xl">
          {element.title}
        </h3>
        <p className="text-lg sm:text-xl text-gray-700 group-hover:text-white transition-all duration-300">
          {element.description}
        </p>
      </div>
    ))}
  </div>
</section>



    </>
  );
};

export default HowItWorks;