import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [stateUsername, setStateUsername] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("data"));
    datas && setUsername(datas.username);
    datas && setData(datas);
    datas && setStateUsername(true);
  }, []);

  const handleClick = () => {
    if (data) {
      setData({});
      setUsername("");
      router.push("/");
    }
    if (username === "") {
      router.push("/auth/login");
    }
  };

  return (
    <div>
      <img src="/background.jpg" alt="" className="object-cover object-center h-[90vh] w-full -z-10 relative " />
      <div className="h-[90vh] w-full bg-black bg-opacity-60 py-6 px-44 absolute top-0 flex justify-center items-center">
        <div className="absolute top-4 w-full flex justify-between px-12 py-4">
          <div>
            <img src="/netflix.png" alt="" className="w-8 md:w-12 cursor-pointer" onClick={() => router.push("/")} />
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl text-center ">
              {router.pathname === "/" && stateUsername === "" && "Refresh To Load Page"}
              {stateUsername && "Welcome :"} {username}
            </h3>
            ;
          </div>
          <div>
            <button className="px-6 py-2 md:py-3 md:px-12 bg-red-600 text-white drop-shadow-lg rounded-lg hover:bg-red-800 text-lg font-semibold" onClick={handleClick}>
              {username ? "Logout" : "Login"}
            </button>
          </div>
        </div>
        <h1 className="font-bold text-slate-100 text-6xl text-center drop-shadow-md">List film terpopuler dari seluruh dunia ada disini</h1>
      </div>
    </div>
  );
};

export default Header;
