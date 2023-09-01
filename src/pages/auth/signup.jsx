import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";

const SignUp = () => {
  const [datas, setDatas] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const [validate, setValidate] = useState("");

  useEffect(() => {
    const localData = localStorage.getItem("data");
    const datas = JSON.parse(localData);
    if(datas.username && router.pathname === "/auth/signup"){
      router.push('/')
    }
  }, []);

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datas.confirmPassword === datas.password) {
      setValidate("");
      Swal.fire({
        title: "Register Success!",
        icon: "success",
        timer: 1500,
      });
      localStorage.setItem("data", JSON.stringify(datas))
      setDatas({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      setTimeout(() => {
        router.push("/auth/login");
      }, 1700);
    } else {
      setValidate("Password tidak sama");
    }
    console.log("datas", datas);
  };

  const handlePush = () => {};

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center my-20">
        <div>
          <h1 className="text-4xl font-bold text-center my-6">Register Form</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="bg-blue-700 p-6 w-[500px] rounded-md">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input name="email" type="email" id="email" required className="my-4 rounded p-3" value={datas.email} onChange={(e) => handleChange(e)} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="username" className="text-white">
                  Username
                </label>
                <input name="username" type="text" id="username" required className="my-4 rounded p-3" value={datas.username} onChange={(e) => handleChange(e)} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input name="password" type="password" id="password" required className="my-4 rounded p-3" value={datas.password} onChange={(e) => handleChange(e)} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="confirmpassword" className="text-white">
                  Confirm Password
                </label>
                <input name="confirmPassword" type="password" id="confirmpassword" required className="my-4 rounded p-3" value={datas.confirmPassword} onChange={(e) => handleChange(e)} />
              </div>
              <p className="text-base text-center text-white">
                Sudah Punya Akun ?{" "}
                <Link href="/auth/login" className="text-red-300 underline">
                  Login disini
                </Link>
              </p>
              <p className="text-red-400 text-center font-bold mt-4">{validate}</p>
              <div className="flex justify-center w-full">
                <button type="submit" className="w-full py-4 bg-slate-200 text-black hover:text-white hover:bg-slate-500 m-6 rounded" onClick={handlePush}>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
