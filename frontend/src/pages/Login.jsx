import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../store/slices/userSlice'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, isAuthenticated } = useSelector((state) => state.user);

    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        dispatch(login(formData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigateTo("/");
        }
    }, [dispatch, isAuthenticated, loading]);

    return (
        <>
            {/* <section className="w-full ml-0 m-0 h-fit px-5 pt-20 lg:pl-[320px] flex flex-col min-h-screen py-4 justify-center">
                <div className="bg-white mx-auto w-full h-auto px-2 flex flex-col gap-4 items-center py-4 justify-center rounded-md sm:w-[600px] sm:h-[450px]">
                    <h1 className={`text-[#d6482b] text-2xl font-bold mb-2 min-[480px]:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}>
                        Login
                    </h1>
                    <form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[16px] text-stone-500">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-[16px] py-2 bg-transparent border-b-[1px] border-b-stone-500 focus:outline-none"
                            />
                        </div>
                        <button
                            className="bg-[#d6482b] font-semibold hover:bg-[#b8381e] transition-all duration-300 text-xl py-2 px-4 rounded-md text-white mx-auto my-4"
                            type="submit"
                        >
                            {loading ? "Logging In..." : "Login"}
                        </button>
                    </form> 
                </div>
            </section> */}

<section className="w-full min-h-screen px-6 pt-20 pb-10 lg:pl-[320px] flex flex-col gap-10 justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl w-full mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-400 text-center">Login</h1>
        <form onSubmit={handleLogin} className="mt-6 space-y-6">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-4 w-full bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition-all"
            type="submit"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
      </div>
    </section>
            
        </>

    )
}
