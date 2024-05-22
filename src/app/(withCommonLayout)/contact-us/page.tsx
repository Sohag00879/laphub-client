import React from 'react'
import { FaRegAddressCard } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";


const ContactUs = () => {
  return (
    <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 container pt-16 text-center">
        <h2 className="text-4xl font-bold ">Contact</h2>
        <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto">
        We are here to help! Whether you have questions about our products, need assistance with your order, or want to provide feedback, our team is ready to assist you. Get in touch with us through any of the following methods
        </p>
    </div>
    <div
        className="max-w-7xl mx-auto px-4 container pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="max-w-sm mt-4 mb-4 ">Have something to say? We are here to help. Fill up the
                form or send email or call phone.</p>
            <div className="flex items-center mt-8 space-x-2 text-dark-600">
                <FaRegAddressCard />
               <span>Block-D,Mirpur-1,1216</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600 ">
                <CgMail/>
                <a href="mailto:shishirsohagislam@gmail.com">shishirsohagislam@gmail.com</a>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-dark-600">
                <FaPhoneAlt/>
                <a href="tel:11111111111">+8801302176538</a>
            </div>
        </div>
        <div>
            <form>
                <input type="checkbox"/>
                <div className="mb-5">
                    <input type="text" placeholder="Full Name"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800  rounded-md outline-none  focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 "/>
                </div>
                <div className="mb-5">
                    <label className="sr-only">Email Address</label>
                    <input id="email_address" type="email" placeholder="Email Address"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800  outline-none  focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 "/>
                </div>
                <div className="mb-3">
                    <textarea placeholder="Your Message"
                        className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  border-gray-300 focus:border-gray-600 ring-gray-100 "
                        name="message">
                    </textarea>
                </div>
                <button type="submit"
                    className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 ">Send
                    Message
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default ContactUs