import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen bg-white-500">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-purple">Contact</p>
        <h2 className="py-4">GET IN TOUCH</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-2 w-full h-full shadow-xl shadow-grey-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div className="w-full">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/projects/404/124d12157752087.Y3JvcCwxODQxLDE0NDAsNDEsMA.jpg"
                  alt=""
                  width="600"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
                <div>
                  <h2 className="py-2 text-4xl">IYIOLA OLUWAFISAYO</h2>
                  <p className="text-bold text-base">FRONTEND ENGINEER</p>
                  <p className="py-4 uppercase text-sm text-extrabolder">
                    I AM AVAILABLE FOR FULL TIME AND PERTIME ROLE
                  </p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
              </div>
              <div className="flex items-center justify-between py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://linkedin.com/in/iyiola-oluwafisayo-a52481165">
                    <FaLinkedinIn color="blue" />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://github.com/Fisto123">
                    <FaGithub color="black" />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="mailto:iyiolafisayo@gmail.com?subject = Feedback&body = Message">
                    <AiOutlineMail color="red" />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href="https://wa.me/+2347067796826?text=please send your message">
                    <FaWhatsapp color="green" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* left */}
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-grey-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col w-full">
                    <label className="text-sm">NAME</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-sm">PHONE NUMBER</label>
                    <input
                      type="number"
                      className="border-2 rounded-lg p-3 border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm" htmlFor="EMAIL">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm" htmlFor="EMAIL">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm" htmlFor="EMAIL">
                    MESSAGE
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  />
                </div>
                <button className="p-4 w-full mt-4 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          {/* right */}
        </div>
      </div>
      <div className="flex justify-center p-10">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6">
            <HiOutlineChevronDoubleUp
              size={30}
              className="m-auto text-purple-600 "
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
