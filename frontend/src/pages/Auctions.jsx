import Card from "@/custom-components/Card";
import Spinner from "../custom-components/Spinner";
import React from "react";
import { useSelector } from "react-redux";
import H1Heading from "../custom-components/h1Heading";

export const Auctions = () => {
  const { allAuctions, loading } = useSelector((state) => state.auction);
  return (
    <>
      {/* {loading ? (
        <Spinner />
      ) : (
        <article className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col">
          <section className="my-8"> */}
            {/* <h1
              className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
            >
              Auctions
            </h1> */}
            {/* <H1Heading content={"Auctions"} color={"#d6482b"}/>
            <div className="flex flex-wrap gap-6">
              {allAuctions.map((element) => (
                <Card
                  title={element.title}
                  startTime={element.startTime}
                  endTime={element.endTime}
                  imgSrc={element.image?.url}
                  startingBid={element.startingBid}
                  id={element._id}
                  key={element._id}
                />
              ))}
            </div>
          </section>
        </article>
      )} */}

<section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
  {loading ? (
    <Spinner />
  ) : (
    <article className="w-full">
      <section className="my-12"> 
        <div className="mb-16"> {/* Increased spacing */}
          <H1Heading content={"Auctions"} color={"#d6482b"} />
        </div>
        <div className="flex flex-wrap gap-8 justify-center"> {/* Increased gap here */}
          {allAuctions.map((element) => (
            <Card
              title={element.title}
              startTime={element.startTime}
              endTime={element.endTime}
              imgSrc={element.image?.url}
              startingBid={element.startingBid}
              id={element._id}
              key={element._id}
              className="bg-gray-800 text-white border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            />
          ))}
        </div>
      </section>
    </article>
  )}
</section>


    </>
  );
};

