import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


export const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigateTo = useNavigate();
    const handleContactForm = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name,
            email,
            phone,
            subject,
            message,
        };

        emailjs
            .send(
                "service_t3ih9lj",
                "template_i5929g8",
                templateParams,
                "H95QgrbBmHNAbg7lC"
            )
            .then(() => {
                toast.success("Thank You! Your message has been sent successfully.");
                setLoading(false);
                navigateTo("/");
            })
            .catch((err) => {
                toast.error("Failed to send message.");
                setLoading(false);
            });
    };

    return (
        <>
            {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
                <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
                    <form
                        className="flex flex-col gap-5 w-full"
                        onSubmit={handleContactForm}
                    >
                        <h3
                            className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}
                        >
                            Contact Us
                        </h3>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Your Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Your Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Your Phone</label>
                            <input
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Message</label>
                            <textarea
                                rows={7}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B]"
                                required
                            />
                        </div>

                        <button
                            className="bg-[#d6482b] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
                            type="submit"
                        >
                            {loading ? "Sending Message..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section> */}

<section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gray-950">
  <div className="bg-white mx-auto w-full h-auto px-4 sm:px-6 flex flex-col gap-6 items-center py-6 sm:py-8 justify-center rounded-lg shadow-mdjustify-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
    <form className="flex flex-col gap-6 w-full max-w-2xl" onSubmit={handleContactForm}>
      <h3 className="text-[#D6482B] text-2xl sm:text-3xl font-semibold mb-2 text-center">
        Contact Us
      </h3>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-gray-700 font-medium">Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all bg-gray-50 text-gray-800 shadow-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-gray-700 font-medium">Your Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all bg-gray-50 text-gray-800 shadow-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-gray-700 font-medium">Your Phone</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all bg-gray-50 text-gray-800 shadow-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-gray-700 font-medium">Subject</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all bg-gray-50 text-gray-800 shadow-sm"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-gray-700 font-medium">Message</label>
        <textarea rows={7} value={message} onChange={(e) => setMessage(e.target.value)}
          className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D6482B] transition-all bg-gray-50 text-gray-800 shadow-sm"
          required
        />
      </div>

      <button
        className="bg-red-500 mx-auto font-semibold hover:bg-[#b8381e] hover:scale-105 text-xl transition-all duration-300 py-3 px-6 rounded-md text-white my-4 shadow-md hover:shadow-lg"
        type="submit"
      >
        {loading ? "Sending Message..." : "Send Message"}
      </button>
    </form>
  </div>
</section>





        </>
    );
};

