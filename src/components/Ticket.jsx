import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Mobilebg from "/images/background-mobile.png";
import Desktopbg from "/images/background-desktop.png";
import Ticketbg from "/images/pattern-ticket.svg";

const Ticket = () => {
  const navigate = useNavigate();
  // Get data from localStorage
  const formData = JSON.parse(localStorage.getItem("formData")) || {};
  const formImage = localStorage.getItem("formImage");

  // Redirect to form if no data
  useEffect(() => {
    if (!formData.fullname) {
      navigate("/");
    }
  }, [formData, navigate]);

  if (!formData.fullname) return null;

  return (
    <div>
      {/* {desktop} */}
      <div
        style={{ backgroundImage: `url(${Desktopbg})` }}
        className="hidden lg:grid bg-blend-screen bg-cover bg-no-repeat h-screen"
      >
        <div className="flex justify-center items-baseline gap-2 pt-7">
          <img
            src="/public/images/logo-mark.svg"
            className="w-6 h-6"
            alt="Logo"
          />
          <h1 className="text-white font-bold text-xl">Coding Conf</h1>
        </div>
        <p className="text-white flex justify-center text-5xl">
          Congrats,{" "}
          <span className="text-primary font-bold"> {formData.fullname}! </span>
        </p>
        <p className="text-white -mt-12 text-3xl flex justify-center">
          {" "}
          Your ticket is ready.
        </p>
        <div className=" text-center text-white  text-xl">
          <p>we've have emailed your ticket to </p>
          <p>
            <span className="text-primary ">{formData.email} </span> and will
            send you updates in{" "}
          </p>
          <p>the run up to the event </p>
        </div>

        <div style={{ backgroundImage: `url(${Ticketbg})` }}>
          <div className="flex justify-center -ml-28  gap-2 pt-7">
            <img
              src="/public/images/logo-mark.svg"
              className="w-6 h-6"
              alt="Logo"
            />
            <h1 className="text-white font-bold -mt-2   text-2xl">
              Coding Conf
            </h1>
          </div>
          <p className="text-white  -ml-24 font-thin text-center">
            jan 31, 2025 / Austin, Tx
          </p>

          <div className="flex justify-center gap-3 mt-9">
            {formImage ? (
              <div>
                <img
                  src={formImage}
                  alt="Uploaded Avatar"
                  className="mt-2 w-10 h-10 object-cover  rounded-md"
                />
              </div>
            ) : (
              <p>No image uploaded</p>
            )}

            <div className="grid text-white">
              <span>{formData.fullname}</span>
              <span className="-mt-2">{formData.github}</span>
            </div>
          </div>
        </div>
      </div>

      {/* {Mobile} */}
      <div
        style={{ backgroundImage: `url(${Mobilebg})` }}
        className=" lg:hidden bg-blend-screen bg-cover bg-no-repeat h-screen"
      >
        <div className="flex justify-center items-baseline gap-2 pt-7">
          <img
            src="/public/images/logo-mark.svg"
            className="w-6 h-6"
            alt="Logo"
          />
          <h1 className="text-white  font-bold text-xl">Coding Conf</h1>
        </div>
        <p className="text-white flex mt-3 justify-center text-2xl">
          Congrats,{" "}
          <span className="text-primary font-bold"> {formData.fullname}! </span>
        </p>
        <p className="text-white  text-xl flex justify-center">
          {" "}
          Your ticket is ready.
        </p>
        <div className=" text-center text-white mt-3  text-sm">
          <p>we've have emailed your ticket to </p>
          <p>
            <span className="text-primary ">{formData.email} </span> and will
            send you updates in{" "}
          </p>
          <p>the run up to the event </p>
        </div>

        <div style={{ backgroundImage: `url(${Ticketbg})` }}>
          <div className="flex justify-center -ml-20  mt-3 gap-2 pt-7">
            <img
              src="/public/images/logo-mark.svg"
              className="w-6 h-6"
              alt="Logo"
            />
            <h1 className="text-white font-bold -mt-2   text-2xl">
              Coding Conf
            </h1>
          </div>
          <p className="text-white  -ml-24 font-thin text-center">
            jan 31, 2025 / Austin, Tx
          </p>

          <div className="flex justify-center gap-3 mt-9">
            {formImage ? (
              <div>
                <img
                  src={formImage}
                  alt="Uploaded Avatar"
                  className="mt-2 w-10 h-10 object-cover  rounded-md"
                />
              </div>
            ) : (
              <p>No image uploaded</p>
            )}

            <div className="grid text-white">
              <span>{formData.fullname}</span>
              <span className="-mt-2">{formData.github}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
