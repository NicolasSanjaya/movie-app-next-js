import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2";

const Login = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const localData = localStorage.getItem("data");
    const datas = JSON.parse(localData);
    if (datas) {
      if (data.email === datas.email && data.password === datas.password) {
        Swal.fire({
          title: "Login Sukses",
          icon: "success",
          timer: 1500,
        });
        setTimeout(() => {
          router.push("/");
        }, 1700);
      } else {
        Swal.fire({
          title: "Data Salah",
          icon: "error",
        });
      }
    }else{
      Swal.fire({
        title: "Belum ada data",
        text: "Silahkan register terlebih dahulu",
        icon: "error",
      });
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (data.username && router.pathname === "/auth/login") {
      router.push("/");
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center my-6">Login Form</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="bg-red-700 p-6 w-96 rounded-md text-white">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input name="email" id="email" type="email" required className="my-4 rounded p-3 text-black" onChange={(e) => handleChange(e)} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" required className="my-4 rounded p-3 text-black" onChange={(e) => handleChange(e)} />
            </div>
            <p className="text-base text-center">
              Belum Punya Akun ?{" "}
              <Link href="/auth/signup" className="text-blue-300 underline">
                Register disini
              </Link>
            </p>
            <div className="flex justify-center w-full">
              <button className="w-full py-4 bg-slate-200 text-black hover:text-white hover:bg-slate-500 m-6 rounded" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
