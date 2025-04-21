import React from "react";

const ContactInfo = () => {
  return (
    <aside className="p-10 bg-secondary w-[30%] max-md:w-full max-md:max-w-none max-sm:p-8 flex justify-center items-center">
      <div className="flex flex-col gap-4 mx-auto my-0 text-center">
        <h2 className=" max-md:mb-3 text-2xl font-poppins font-semibold text-[#2c3e50] max-sm:text-2xl">
          How To Reach Us
        </h2>
        <div className=" max-md:hidden">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M13.3334 66.6668C11.5 66.6668 9.91669 66.0279 8.58335 64.7502C7.30558 63.4168 6.66669 61.8335 6.66669 60.0002V20.0002C6.66669 18.1668 7.30558 16.6113 8.58335 15.3335C9.91669 14.0002 11.5 13.3335 13.3334 13.3335H66.6667C68.5 13.3335 70.0556 14.0002 71.3334 15.3335C72.6667 16.6113 73.3334 18.1668 73.3334 20.0002V60.0002C73.3334 61.8335 72.6667 63.4168 71.3334 64.7502C70.0556 66.0279 68.5 66.6668 66.6667 66.6668H13.3334ZM40 43.3335L66.6667 26.6668V20.0002L40 36.6668L13.3334 20.0002V26.6668L40 43.3335Z"
              fill="#2C3E50"
            />
          </svg>
        </div>
        <p className="max-md:mt-1 font-poppins text-base leading-5 text-black">
          Reach out to us through the form and we will reach out to you!
        </p>
      </div>
    </aside>
  );
};

export default ContactInfo;

