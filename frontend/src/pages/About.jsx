import React from "react";
import H1Heading from "../custom-components/h1Heading";

const About = () => {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "We prioritize honesty and transparency in all our dealings, ensuring a fair and ethical auction experience for everyone.",
    },
    {
      id: 2,
      title: "Innovation",
      description:
        "We continually enhance our platform with cutting-edge technology and features to provide users with a seamless and efficient auction process.",
    },
    {
      id: 3,
      title: "Community",
      description:
        "We foster a vibrant community of buyers and sellers who share a passion for finding and offering exceptional items.",
    },
    {
      id: 4,
      title: "Customer Focus",
      description:
        "We are committed to providing exceptional customer support and resources to help users navigate the auction process with ease.",
    },
  ];

  return (
    <>
      
       {/* <section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 justify-center bg-gradient-to-b from-[#fdf2e9] to-[#fae1dd] text-gray-900">
    <div className="max-w-5xl mx-auto space-y-6">
        <H1Heading content={"About Us"} color={"#d6482b"} />
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Welcome to <span className="font-bold text-black">AuctionEdge</span>, the ultimate destination for online auctions and bidding excitement. 
            Founded in 2025, we are dedicated to providing a dynamic and user-friendly platform for buyers and sellers to connect, explore, 
            and transact in a secure and seamless environment.
        </p>
    </div>

    <div className="max-w-5xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-black">Our Mission</h3>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            At <span className="font-bold text-black">AuctionEdge</span>, our mission is to revolutionize the way people buy and sell items online. 
            We strive to create an engaging and trustworthy marketplace that empowers individuals and businesses to discover unique products, 
            make informed decisions, and enjoy the thrill of competitive bidding.
        </p>
    </div>

    <div className="max-w-5xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-black">Our Values</h3>
        <ul className="list-disc list-inside space-y-3">
            {values.map((element) => (
                <li className="text-lg sm:text-xl text-gray-700" key={element.id}>
                    <span className="font-bold text-black">{element.title}</span>: {element.description}
                </li>
            ))}
        </ul>
    </div>

    <div className="max-w-5xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-black">Our Story</h3>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Founded by <span className="font-bold text-black">Prince Malaviya</span>, AuctionEdge was born out of a passion for connecting people with unique and valuable items. 
            With years of experience in the auction industry, our team is committed to creating a platform that offers an unparalleled auction experience for users worldwide.
        </p>
    </div>

    <div className="max-w-5xl mx-auto space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-black">Join Us</h3>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Whether you're looking to buy, sell, or simply explore, <span className="font-bold text-black">AuctionEdge</span> invites you to join our growing community of auction enthusiasts. 
            Discover new opportunities, uncover hidden gems, and experience the thrill of winning your next great find.
        </p>
    </div>

    <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl font-bold text-[#d6482b] animate-pulse">
            Thank you for choosing AuctionEdge. We look forward to being a part of your auction journey!
        </p>
    </div>
</section> */}
 <section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
  <div className="max-w-5xl mx-auto space-y-6">
    <h1 className="text-4xl font-bold text-yellow-400">About Us</h1>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
      Welcome to <span className="font-bold text-white">AuctionEdge</span>, the ultimate destination for online auctions and bidding excitement.
      Founded in 2025, we provide a dynamic and user-friendly platform for buyers and sellers to connect, explore,
      and transact securely.
    </p>
  </div>

  <div className="max-w-5xl mx-auto space-y-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
      At <span className="font-bold text-white">AuctionEdge</span>, our mission is to revolutionize online buying and selling.
      We create an engaging and trustworthy marketplace that empowers individuals and businesses.
    </p>
  </div>

  <div className="max-w-5xl mx-auto space-y-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Values</h3>
    <ul className="list-disc list-inside space-y-3 text-gray-300">
      {values.map((element) => (
        <li className="text-lg sm:text-xl" key={element.id}>
          <span className="font-bold text-yellow-400">{element.title}</span>: {element.description}
        </li>
      ))}
    </ul>
  </div>

  <div className="max-w-5xl mx-auto space-y-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Story</h3>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
      Founded by <span className="font-bold text-yellow-400">Prince Malaviya</span>, AuctionEdge was created to connect people with unique items.
      Our team is dedicated to providing an unparalleled auction experience worldwide.
    </p>
  </div>

  <div className="max-w-5xl mx-auto space-y-4">
    <h3 className="text-2xl sm:text-3xl font-bold text-white">Join Us</h3>
    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
      Whether you're buying, selling, or exploring, <span className="font-bold text-white">AuctionEdge</span> welcomes you!
      Discover new opportunities and experience the thrill of winning great finds.
    </p>
  </div>

  <div className="max-w-5xl mx-auto text-center">
    <p className="text-2xl font-bold text-yellow-400 animate-pulse">
      Thank you for choosing AuctionEdge. We look forward to being part of your journey!
    </p>
  </div>
</section>


        
    </>
  );
};

export default About;

           
