import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AbstractArt from "../../assets/abstractArt.svg";
import WaveHand from "../../assets/WaveHand.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (email === storedEmail && password === storedPassword) {
      navigate("/home");
      alert("Login Successfully");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex-1 bg-indigo-100">
          <div className="logo-container container flex h-full md:hidden">
            <img
              className="h-full w-auto object-cover"
              src={AbstractArt}
              alt="logo"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex-1 bg-indigo-100">
          <div className="flex flex-row items-center">
            <h1 className="text-5xl font-bold pt-32 sm:text-5xl sm:-ml-52 -ml-18">
              Hey, Hello!
            </h1>
            <div className="pt-24">
              <img src={WaveHand} alt="WaveHand" loading="lazy" />
            </div>
          </div>
          <h2 className="text-md sm:-ml-52 font-light pt-2 pl-4">
            Welcome to PicQuest!
          </h2>
          <div className="sm:-ml-44 ml-8 lg:-ml-18">
            <form onSubmit={handleLogin}>
              <div className="pt-32 sm:pt-32">
                <input
                  className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                  type="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="pt-3">
                <input
                  className="rounded border text-xl border-b-gray-300 w-96 h-12 pl-4"
                  type="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-sm font-thin mt-2 pt-1 mb-0">
                  Don't have an account?
                  <a
                    href="/register"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </a>
                </p>
                <div className="pt-10 pl-28">
                  <button
                    type="submit"
                    className="font-bold text-center py-3 rounded bg-green-700 text-white hover:bg-green-dark hover:bg-green-400 w-44 h-12 pl-4 pr-4"
                  >
                    LOG IN
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
