import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import H1Heading from '../custom-components/h1Heading';
import { register } from '../store/slices/userSlice';


const SignUp = () => {


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [bankAccountName, setBankAccountName] = useState("");
    const [bankAccountNumber, setBankAccountNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [gpayUPI, setGpayUPI] = useState("");
    const [paypalEmail, setPaypalEmail] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [profileImagePreview, setProfileImagePreview] = useState("");

    const { loading, isAuthenticated } = useSelector((state) => state.user);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    

    const handleRegister = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("userName", userName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("password", password);
        formData.append("address", address);
        formData.append("role", role);
        formData.append("profileImage", profileImage); // File object
    
        if (role === "Auctioneer") {
            formData.append("bankAccountName", bankAccountName);
            formData.append("bankAccountNumber", bankAccountNumber);
            formData.append("bankName", bankName);
            formData.append("gpayUPI", gpayUPI);
            formData.append("paypalEmail", paypalEmail);
        }
    
        // ✅ Log each key-value pair
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": ", pair[1]);  
        }
    
        console.log("Profile Image Details:", profileImage?.name, profileImage?.size, profileImage?.type);
    
        dispatch(register(formData)); 
    };
    
    

    useEffect(() => {
        if (isAuthenticated) {
            navigateTo("/");
        }
    }, [dispatch, loading, isAuthenticated]); // if this(dispatch, loading, isAuthenticated) changes then it executes 


    const imageHandler = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader(); 
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProfileImagePreview(reader.result);
            setProfileImage(file);
        };
    };

    

    return (
        <>
            {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center" >

                <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md">
                    {/* <h1 className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}>
                            Register
                        </h1> */}
                    {/* <H1Heading color={"#d6482b"} content={"Register"} />


                    <form className="flex flex-col gap-5 w-full"
                        onSubmit={handleRegister}>
                        <p className="font-semibold text-xl md:text-2xl">
                            Personal Details
                        </p> */}

                        {/* Full name and Email  */}
                        {/* <div className="flex flex-col gap-4 sm:flex-row">

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Full Name</label>
                                <input type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Email</label>
                                <input type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none" />

                            </div>

                        </div> */}

                        {/* Phone and Address  */}
                        {/* <div className="flex flex-col gap-4 sm:flex-row">

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Phone</label>
                                <input type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Address</label>
                                <input type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none" />

                            </div>

                        </div> */}

                        {/* Role & Password  */}
                        {/* <div className="flex flex-col gap-4 sm:flex-row">

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Role</label>
                                <select value={role} onChange={(e) => setRole(e.target.value)} className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none">
                                    <option value="">Select Role</option>
                                    <option value="Auctioneer">Auctioneer</option>
                                    <option value="Bidder">Bidder</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-1">
                                <label className="text-[16px] text-stone-600">Password</label>
                                <input type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none" />

                            </div>

                        </div> */}

                        {/* Profile Image */}
                        {/* <div className="flex flex-col sm:flex-1 gap-2">
                            <label className="text-[16px] text-stone-600">
                                Profile Image
                            </label>
                            <div className="flex items-center gap-3">
                                <img
                                    src={
                                        profileImagePreview
                                            ? profileImagePreview
                                            : "/imageHolder.jpg" 
                                    }
                                    alt=""
                                    className="w-14 h-14 rounded-full"
                                />
                                <input type="file" onChange={imageHandler} className='block w-full text-xs text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#d6482b] file:text-white hover:file:bg-[#b53722] cursor-pointer'/>
                            </div>
                        </div> */}

                        {/* Payment Method Details */}
                        {/* <div className="flex flex-col gap-4">

                            <label className="font-semibold text-xl md:2xl flex flex-col">
                                Payment Method Details{" "}
                                <span className="text-[12px] text-stone-500">
                                    Fill Payment Details Only If you are registering as an
                                    Auctioneer
                                </span>
                            </label> */}

                            {/* Bank Payment  */}
                            {/* <div className="flex flex-col gap-2">
                                <label className="text-[16px] text-stone-500">
                                    Bank Details
                                </label>
                                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                                    <select
                                        value={bankName}
                                        onChange={(e) => setBankName(e.target.value)}
                                        className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                                        disabled={role === "Bidder"}
                                    >
                                        <option value="">Select Your Bank</option>
                                        <option value="SBI">SBI</option>
                                        <option value="HDFC">HDFC</option>
                                        <option value="ICICI">ICICI</option>
                                        <option value="KOTAK">KOTAK</option>
                                    </select>
                                    <input
                                        type="text"
                                        value={bankAccountNumber}
                                        placeholder="IFSC"
                                        onChange={(e) => setBankAccountNumber(e.target.value)}
                                        className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                                        disabled={role === "Bidder"}
                                    />
                                    <input
                                        type="text"
                                        value={bankAccountName}
                                        placeholder="Bank Account UserName"
                                        onChange={(e) => setBankAccountName(e.target.value)}
                                        className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                                        disabled={role === "Bidder"}
                                    />
                                </div>
                            </div> */}

                            {/* Online Payment  */}
                            {/* <div>
                                <label className="text-[16px] text-stone-600 font-semibold">
                                    Google Pay & Paypal Details
                                </label>
                                <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                                    <input
                                        type="text"
                                        value={gpayUPI}
                                        placeholder="example@upi"
                                        onChange={(e) => setGpayUPI(e.target.value)}
                                        className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                                        disabled={role === "Bidder"}
                                    />
                                    <input
                                        type="email"
                                        value={paypalEmail}
                                        placeholder="Paypal Email"
                                        onChange={(e) => setPaypalEmail(e.target.value)}
                                        className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none sm:flex-1"
                                        disabled={role === "Bidder"}
                                    />
                                </div>
                            </div>

                        </div>

                        <button
                            className="bg-[#d6482b] w-[420px] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto lg:w-[640px] my-4"
                            type="submit"
                            disabled={loading}
                        >
                            {loading && "Registering..."}
                            {!loading && "Register"}
                        </button>
                    </form>
                </div>
            </section> */} 

{/* <section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">

<div className="bg-gray-800 mx-auto w-full h-auto px-6 flex flex-col gap-6 items-center py-6 justify-center rounded-md shadow-lg">
    <h1 className="text-yellow-400 text-4xl font-bold">Register</h1>

    <form className="flex flex-col gap-6 w-full" onSubmit={handleRegister}>
        <p className="font-semibold text-2xl text-white">Personal Details</p>

        <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Full Name</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white" />
            </div>
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white" />
            </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Phone</label>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white" />
            </div>
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white" />
            </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white">
                    <option value="">Select Role</option>
                    <option value="Auctioneer">Auctioneer</option>
                    <option value="Bidder">Bidder</option>
                </select>
            </div>
            <div className="flex flex-col sm:flex-1">
                <label className="text-lg text-gray-300">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="text-lg py-2 bg-transparent border-b border-gray-500 focus:outline-none text-white" />
            </div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl font-bold text-yellow-400 animate-pulse">Join AuctionEdge and start your journey today!</p>
        </div>

        <button className="bg-yellow-500 w-[420px] font-semibold hover:bg-yellow-600 transition-all duration-300 text-xl py-3 px-6 rounded-md text-black mx-auto lg:w-[640px] my-4" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
        </button>
    </form>
</div>
</section> */}

<section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl w-full mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-400 text-center">Register</h1>

        <form className="mt-6 space-y-6">
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-300">Full Name</label>
              <input type="text" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300">Email</label>
              <input type="email" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          {/* Phone & Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-300">Phone</label>
              <input type="number" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300">Address</label>
              <input type="text" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          {/* Role & Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-300">Role</label>
              <select
                className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Auctioneer">Auctioneer</option>
                <option value="Bidder">Bidder</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-gray-300">Password</label>
              <input type="password" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>
          </div>

          {/* Profile Image */}
          {/* <div className="flex flex-col gap-2">
            <label className="text-gray-300">Profile Image</label>
            <input
              type="file"
              className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleImageChange}
            />
            {/* Image Preview */}
            {/* <img
              src={profileImagePreview || "/imageHolder.jpg"}
              alt="Profile Preview"
              className="w-14 h-14 rounded-full mt-2"
            />
          </div>  */}
          <div className="flex flex-col sm:flex-1 gap-2">
                            <label className="text-gray-300">
                                Profile Image
                            </label>
                            <div className="flex items-center gap-3">
                                <img
                                    src={
                                        profileImagePreview
                                            ? profileImagePreview
                                            : "/imageHolder.jpg" 
                                    }
                                    alt=""
                                    className="w-14 h-14 rounded-full"
                                />
                                <input type="file" onChange={imageHandler} className='block w-full text-xs text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:bg-[#d6482b] file:text-white hover:file:bg-[#b53722] cursor-pointer text-yellow-400' />
                            </div>
                        </div>

          {/* Payment Details (Hidden for Bidders) */}
          {role !== "Bidder" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Payment Method Details</h3>

              {/* Bank Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="">Select Your Bank</option>
                  <option value="SBI">SBI</option>
                  <option value="HDFC">HDFC</option>
                  <option value="ICICI">ICICI</option>
                  <option value="KOTAK">KOTAK</option>
                </select>
                <input type="text" placeholder="IFSC" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                <input type="text" placeholder="Bank Account UserName" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>

              {/* Online Payment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="example@upi" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                <input type="email" placeholder="Paypal Email" className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
            </div>
          )}

          <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition-all">
            Register
          </button>
        </form>
      </div>
    </section>


    
            
        </>
    )
}

export default SignUp;