import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialGrid = ({ testimonials }) => {
  return (
    <div className="flex flex-row flex-wrap gap-8 justify-center mx-auto ">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          image={testimonial.image}
          text={testimonial.text}
          author={testimonial.author}
        />
      ))}  
    </div>
  );
};

export default TestimonialGrid;
