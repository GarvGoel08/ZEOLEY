import React from "react";

const TestimonialCard = ({ image, text, author }) => {
  return (
    <article className="flex gap-8 items-start p-9 py-4 rounded-xl border-2 border-white border-opacity-10 w-[470px] max-md:w-full max-md:h-auto">
      <img
        src={image}
        alt={`${author}'s testimonial`}
        className="w-[70px] h-[70px] rounded-[10px] flex-shrink-0"
      />
      <div className="flex flex-col">
        <p className="mb-4 text-lg leading-7 text-slate-900">{text}</p>
        <p className="text-sm font-bold leading-7 uppercase opacity-30 text-slate-900 tracking-[2px]">
          {author}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
