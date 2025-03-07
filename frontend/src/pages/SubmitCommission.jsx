// import { postCommissionProof } from "../store/slices/commissionSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCommissionProof } from "../store/slices/commissionSlice";



const SubmitCommission = () => {
    const [proof, setProof] = useState("");
    const [amount, setAmount] = useState("");
    const [comment, setComment] = useState("");

    const proofHandler = (e) => {
        const file = e.target.files[0];
        setProof(file);
    };

    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.commission);
    const handlePaymentProof = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("proof", proof);
        formData.append("amount", amount);
        formData.append("comment", comment);
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        dispatch(postCommissionProof(formData));
    }
    return (
        <>
            {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start">
        <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={handlePaymentProof}
          >
            <h3 className={`text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl`}>Upload Payment Proof</h3>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">
                Payment Proof (ScreenShot)
              </label>
              <input
                type="file"
                onChange={proofHandler}
                className="className='block w-full text-xs text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#d6482b] file:text-white hover:file:bg-[#b53722] cursor-pointer'"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] text-stone-500">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={7}
                className="text-[16px] py-2 bg-transparent border-[1px] rounded-md px-1 border-stone-500 focus:outline-none"
              />
            </div>
              <button
                className="bg-[#d6482b] mx-auto font-semibold hover:bg-[#b8381e] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
                type="submit"
              >
                {loading ? "Uploading..." : "Upload Payment Proof"}
              </button>
          </form>
        </div>
      </section> */}

<section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-start bg-gradient-to-b from-gray-900 via-gray-800 to-black">
  <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md shadow-md">
    <form className="flex flex-col gap-5 w-full" onSubmit={handlePaymentProof}>
      <h3 className="text-[#D6482B] text-xl font-semibold mb-2 min-[480px]:text-xl md:text-2xl lg:text-3xl">
        Upload Payment Proof
      </h3>
      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#8B949E]">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-[#30363D] focus:outline-none focus:border-yellow-400 text-white"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#8B949E]">
          Payment Proof (Screenshot)
        </label>
        <input
          type="file"
          onChange={proofHandler}
          className="block w-full text-xs text-[#8B949E] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#D6482B] file:text-white hover:file:bg-[#B53722] cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[16px] text-[#8B949E]">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={7}
          className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-[#30363D] focus:outline-none focus:border-yellow-400 text-white"
        />
      </div>
      <button
        className="bg-[#D6482B] mx-auto font-semibold hover:bg-[#B8381E] text-xl transition-all duration-300 py-2 px-4 rounded-md text-white my-4"
        type="submit"
      >
        {loading ? "Uploading..." : "Upload Payment Proof"}
      </button>
    </form>
  </div>
</section>


        </>
    )
};

export default SubmitCommission;