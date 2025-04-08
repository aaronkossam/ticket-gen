import React from "react";
import Mobilebg from "/images/background-mobile.png";
import Desktopbg from "/images/background-desktop.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [initialvalues, setInitialvalues] = useState({
    fullname: "",
    email: "",
    github: "",
    file: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(initialvalues));
  };

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!initialvalues.fullname) {
      errors.fullname = "Full name is required";
    }
    if (!initialvalues.email) {
      errors.email = "Email is required";
    }
    if (!initialvalues.github) {
      errors.github = "Github username is required";
    }
    if (!initialvalues.file) {
      errors.file = "Your photo is required";
    }
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully!");
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialvalues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* {mobile} */}
      <div
        style={{
          backgroundImage: `url(${Mobilebg})`,
        }}
        className=" bg-cover bg-no-repeat   lg:hidden  "
      >
        <div className=" flex justify-center align-baseline gap-2 pt-7">
          <img
            src="/public/images/logo-mark.svg"
            className=" w-6 h-6 "
            alt=""
          />
          <h1 className="text-white font-bold text-xl -mt-1">Coding Conf</h1>
        </div>
        <p className=" text-white text-center text-3xl font-bold font-sans pt-6">
          Your Journey To Coding Conf 2025 Start Here!
        </p>
        <p className=" text-white  text-center pt-4 text-xl  font-serif">
          Secure your spot at the year's{" "}
        </p>
        <p className=" text-white   text-center pt-4 text-xl -mt-4  font-serif">
          biggest coding conference
        </p>
        <form
          onSubmit={handleSubmit}
          className=" grid gap-4 pt-7 ml-4 mr-4 lg:justify-center"
        >
          <label className=" text-white -mb-12 ">Upload Avater </label>,
          <div className=" border-2 border-dashed pt-3 pb-3   cursor-pointer bg-black/10 rounded-md border-white ">
            <img
              src="../public/images/icon-upload.svg"
              className="pl-40 h-10"
              alt=""
            />
            <p className="text-white flex  justify-center">
              Drag & Drop or click to upload
            </p>
            <input
              className="opacity-0"
              type="file"
              value={initialvalues.file}
              onChange={handleChange}
              name="file"
            ></input>
          </div>
          <p className=" text-white text-sm">
            upload your photo(jpg or png ,max size:500kg)
          </p>
          {errors.file && <p className="text-red-500">{errors.file}</p>}
          <label className="  text-white text-xl  font-sans ">Full name </label>
          <input
            type="text"
            value={initialvalues.fullname}
            onChange={handleChange}
            name="fullname"
            placeholder=""
            className=" p-4    bg-black/35 text-white  outline-none   rounded-md  "
          ></input>
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
          <label className=" text-white text-xl  font-sans ">
            Email address{" "}
          </label>
          <input
            className="p-4  bg-black/35 text-white  outline-none   rounded-md  "
            type="text"
            value={initialvalues.email}
            onChange={handleChange}
            name="email"
            placeholder="email address"
          ></input>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label className=" text-white text-xl  font-sans ">
            Github Username{" "}
          </label>
          <input
            className="p-4  bg-black/35 text-white  outline-none   rounded-md  "
            type="text"
            value={initialvalues.github}
            onChange={handleChange}
            name="gitgub"
            placeholder="@yourusername"
          ></input>
          {errors.github && <p className="text-red-500">{errors.github}</p>}
          <button
            type="submit"
            className=" font-bold  text-secondary  border-2 p-3 rounded-md text-xl  mb-4  bg-primary border-primary "
          >
            Generate My Ticket{" "}
          </button>
        </form>
      </div>
      {/* {Desktop} */}
      <div
        style={{ backgroundImage: `url(${Desktopbg})` }}
        className=" bg-cover bg-no-repeat  hidden lg:grid"
      >
        <div className=" flex justify-center align-baseline gap-2 pt-7">
          <img
            src="/public/images/logo-mark.svg"
            className=" w-6 h-6 "
            alt=""
          />
          <h1 className="text-white font-bold text-xl -mt-1">Coding Conf</h1>
        </div>
        <p className=" text-white text-center text-3xl font-bold font-sans pt-6">
          Your Journey To Coding Conf<br></br>
          2025 Start Here!
        </p>
        <p className=" text-white  text-center pt-4 text-xl  font-serif">
          Secure your spot at the year's biggest coding conference
        </p>
        <form
          onSubmit={handleSubmit}
          className=" grid gap-4 pt-7 ml-4 mr-4 lg:justify-center mb-14"
        >
          <label className=" text-white -mb-12 ">Upload Avater </label>,
          <div className=" border-2 border-dashed pt-3 pb-3 pl-24 pr-24  cursor-pointer bg-black/10 rounded-md border-white ">
            <img
              src="../public/images/icon-upload.svg"
              className="pl-32 h-10"
              alt=""
            />
            <p className="text-white flex  justify-center">
              Drag & Drop or click to upload
            </p>
            <input
              className="opacity-0"
              type="file"
              value={initialvalues.file}
              onChange={handleChange}
              name="file"
            ></input>
          </div>
          <p className=" text-white text-sm">
            upload your photo(jpg or png ,max size:500kg)
          </p>
          {errors.file && <p className="text-red-500">{errors.file}</p>}
          <label className="  text-white text-xl  font-sans ">Full name </label>
          <input
            {...errors.fullname}
            type="text"
            value={initialvalues.fullname}
            onChange={handleChange}
            name="fullname"
            placeholder=""
            className=" p-3  bg-black/35 text-white
              outline-none   rounded-md  "
          ></input>
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
          <label className=" text-white text-xl  font-sans ">
            Email address{" "}
          </label>
          <input
            className="p-3  bg-black/35 text-white  outline-none   rounded-md  "
            type="text"
            value={initialvalues.email}
            onChange={handleChange}
            name="email"
            {...errors}
            placeholder="email address"
          ></input>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label className=" text-white text-xl  font-sans ">
            Github Username{" "}
          </label>
          <input
            {...errors.github}
            className="p-3  bg-black/35 text-white  outline-none   rounded-md  "
            type="text"
            value={initialvalues.github}
            onChange={handleChange}
            name="github"
            placeholder="@yourusername"
          ></input>
          {errors.github && <p className="text-red-500">{errors.github}</p>}
          <button
            type="submit"
            className=" text-secondary  border-2 p-3 rounded-md text-xl bg-primary border-primary "
          >
            Generate My Ticket{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
