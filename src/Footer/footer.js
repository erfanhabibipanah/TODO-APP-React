import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div
        className="bg-gray-100 z-1 border-t"
        style={{
          width: "100%",
          display: "inline-flex",
          flexFlow: "column nowrap",
        }}
      >
        <div
          class="flex pb-5 px-3 m-auto pt-5 text-gray-800 pt-8 mb-5 flex-col
      flex-row max-w-6xl text-center grid grid-cols-10 xl:gap-10 lg:gap-10 md:gap-10 sm:gap-5"
        >
          <div class="text-center col-start-2 col-span-8">
            © Erfan Habibi Panah Fard. All Rights Reserved.
          </div>
          <div class="flex col-end-11 col-span-1 linkedin">
            <a
              rel="preconnect noopener noreferrer"
              href="https://www.linkedin.com/in/erfanhabibipanah"
              target="_blank"
              className="w-6 mx-1"
            >
              <svg
                class="fill-current cursor-pointer text-gray-700 hover:text-gray-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#0e76a8"
                  d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
