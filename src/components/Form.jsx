import React, { useState } from "react";
import Mobilebg from "/images/background-mobile.png";
import Desktopbg from "/images/background-desktop.png";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    fullname: "",
    email: "",
    github: "",
    file: null, // Use null for file input
  });
  const [errors, setErrors] = useState({});

  console.log("Current form data:", initialValues); // Debug form data

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(initialValues);
    console.log("Validation errors:", validationErrors); // Debug errors
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Navigating to /ticket with data:", initialValues); // Debug navigation
      // Persist to localStorage (excluding file)
      localStorage.setItem(
        "formData",
        JSON.stringify({
          fullname: initialValues.fullname,
          email: initialValues.email,
          github: initialValues.github,
        })
      );
      // Handle file separately as a data URL
      if (initialValues.file) {
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem("formImage", reader.result);
          navigate("/ticket");
        };
        reader.readAsDataURL(initialValues.file);
      } else {
        localStorage.setItem("formImage", null);
        navigate("/ticket");
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.fullname) errors.fullname = "Full name is required";
    if (!values.email) errors.email = "Email is required";
    else if (!regex.test(values.email)) errors.email = "Invalid email format";
    if (!values.github) errors.github = "GitHub username is required";
    if (!values.file) errors.file = "Your photo is required";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setInitialValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div>
      {/* Mobile View */}
      <div
        style={{ backgroundImage: `url(${Mobilebg})` }}
        className="bg-cover bg-no-repeat lg:hidden"
      >
        <div className="flex justify-center items-baseline gap-2 pt-7">
          <img src="/images/logo-mark.svg" className="w-6 h-6" alt="Logo" />
          <h1 className="text-white font-bold text-xl">Coding Conf</h1>
        </div>
        <p className="text-white text-center text-3xl font-bold font-sans pt-6">
          Your Journey To Coding Conf 2025 Starts Here!
        </p>
        <p className="text-white text-center pt-4 text-xl font-serif">
          Secure your spot at the year's biggest coding conference
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4 pt-7 ml-4 mr-4">
          <label htmlFor="file" className="text-white">
            Upload Avatar
          </label>
          <div className="border-2 border-dashed pt-3 pb-3 cursor-pointer bg-black/10 rounded-md border-white relative">
            <img
              src="/images/icon-upload.svg"
              className="mx-auto h-10"
              alt="Upload Icon"
            />
            <p className="text-white text-center">
              Drag & Drop or click to upload
            </p>
            <input
              id="file"
              type="file"
              name="file"
              onChange={handleChange}
              accept="image/jpeg,image/png"
              className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
            />
          </div>
          <p className="text-white text-sm">
            Upload your photo (jpg or png, max size: 500kb)
          </p>
          {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}

          <label htmlFor="fullname" className="text-white text-xl font-sans">
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            value={initialValues.fullname}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
            className="p-4 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname}</p>
          )}

          <label htmlFor="email" className="text-white text-xl font-sans">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={initialValues.email}
            onChange={handleChange}
            placeholder="email@example.com"
            autoComplete="email"
            className="p-4 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <label htmlFor="github" className="text-white text-xl font-sans">
            GitHub Username
          </label>
          <input
            id="github"
            type="text"
            name="github"
            value={initialValues.github}
            onChange={handleChange}
            placeholder="@yourusername"
            autoComplete="username"
            className="p-4 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.github && (
            <p className="text-red-500 text-sm">{errors.github}</p>
          )}

          <button
            type="submit"
            className="font-bold text-secondary border-2 p-3 rounded-md text-xl  bg-primary border-primary mt-2 mb-6"
          >
            Generate My Ticket
          </button>
        </form>
      </div>

      {/* Desktop View */}
      <div
        style={{ backgroundImage: `url(${Desktopbg})` }}
        className="bg-cover bg-no-repeat hidden lg:grid"
      >
        <div className="flex justify-center items-baseline gap-2 pt-7">
          <img src="/images/logo-mark.svg" className="w-6 h-6" alt="Logo" />
          <h1 className="text-white font-bold text-xl">Coding Conf</h1>
        </div>
        <p className="text-white text-center text-3xl font-bold font-sans pt-6">
          Your Journey To Coding Conf
          <br />
          2025 Starts Here!
        </p>
        <p className="text-white text-center pt-4 text-xl font-serif">
          Secure your spot at the year's biggest coding conference
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 pt-7 ml-4 mr-4 lg:max-w-lg lg:mx-auto mb-14"
        >
          <label htmlFor="file-desktop" className="text-white">
            Upload Avatar
          </label>
          <div className="border-2 border-dashed pt-3 pb-3 cursor-pointer bg-black/10 rounded-md border-white relative">
            <img
              src="/images/icon-upload.svg"
              className="mx-auto h-10"
              alt="Upload Icon"
            />
            <p className="text-white text-center">
              Drag & Drop or click to upload
            </p>
            <input
              id="file-desktop"
              type="file"
              name="file"
              onChange={handleChange}
              accept="image/jpeg,image/png"
              className="absolute opacity-0 w-full h-full top-0 left-0 cursor-pointer"
            />
          </div>
          <p className="text-white text-sm">
            Upload your photo (jpg or png, max size: 500kb)
          </p>
          {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}

          <label
            htmlFor="fullname-desktop"
            className="text-white text-xl font-sans"
          >
            Full Name
          </label>
          <input
            id="fullname-desktop"
            type="text"
            name="fullname"
            value={initialValues.fullname}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
            className="p-3 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname}</p>
          )}

          <label
            htmlFor="email-desktop"
            className="text-white text-xl font-sans"
          >
            Email Address
          </label>
          <input
            id="email-desktop"
            type="email"
            name="email"
            value={initialValues.email}
            onChange={handleChange}
            placeholder="email@example.com"
            autoComplete="email"
            className="p-3 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <label
            htmlFor="github-desktop"
            className="text-white text-xl font-sans"
          >
            GitHub Username
          </label>
          <input
            id="github-desktop"
            type="text"
            name="github"
            value={initialValues.github}
            onChange={handleChange}
            placeholder="@yourusername"
            autoComplete="username"
            className="p-3 bg-black/35 text-white outline-none rounded-md"
          />
          {errors.github && (
            <p className="text-red-500 text-sm">{errors.github}</p>
          )}

          <button
            type="submit"
            className="font-bold text-secondary border-2 p-3 rounded-md text-xl bg-primary border-primary   "
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
