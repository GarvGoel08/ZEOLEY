import React from "react";
import IconSVG from "./IconSVG";

const FooterSocial = () => {
  const socialIcons = [
    {
      name: "Facebook",
      icon: `<svg id="74:413" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      url: "https://www.facebook.com/Zeoley/",
    },
    {
      name: "LinkedIn",
      icon: `<svg id="74:416" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 9H2V21H6V9Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      url: "https://www.linkedin.com/company/Zeoley/",
    },
    {
      name: "Instagram",
      icon: `<svg id="74:421" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 11.3698C16.1234 12.2021 15.9812 13.052 15.5937 13.7988C15.2062 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4077 15.9057C10.5771 15.7721 9.80971 15.3799 9.21479 14.785C8.61987 14.1901 8.22768 13.4227 8.09402 12.592C7.96035 11.7614 8.09202 10.9097 8.47028 10.1582C8.84854 9.40667 9.45414 8.79355 10.2009 8.40605C10.9477 8.01856 11.7977 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8716 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 6.5H17.51" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      url: "https://www.instagram.com/zeoleymedia/",
    },
    {
      name: "Twitter",
      icon: `<svg id="74:426" layer-name="Frame" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[24px] h-[24px]"> <path d="M23 2.9998C22.0424 3.67528 20.9821 4.19191 19.86 4.5298C19.2577 3.83731 18.4573 3.34649 17.567 3.12373C16.6767 2.90096 15.7395 2.957 14.8821 3.28426C14.0247 3.61151 13.2884 4.1942 12.773 4.95352C12.2575 5.71283 11.9877 6.61214 12 7.5298V8.5298C10.2426 8.57537 8.50127 8.18561 6.93101 7.39525C5.36074 6.60488 4.01032 5.43844 3 3.9998C3 3.9998 -1 12.9998 8 16.9998C5.94053 18.3978 3.48716 19.0987 1 18.9998C10 23.9998 21 18.9998 21 7.4998C20.9991 7.22126 20.9723 6.9434 20.92 6.6698C21.9406 5.6633 22.6608 4.39251 23 2.9998Z" stroke="#E3DEDE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      url: "https://x.com/ZeoleyMedia",
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-white">Follow Us</h3>
      <div className="flex gap-4">
        {socialIcons.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            aria-label={`Follow us on ${social.name}`}
            className="hover:opacity-80 transition-opacity"
          >
            <IconSVG svg={social.icon} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default FooterSocial;
