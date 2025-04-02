import React from "react";

const FormInput = ({ label, type,value,handleChange, placeholder, required = false }) => {
  return (
    <div className="mb-6 flex-grow">
      <label className="block mb-1.5 text-xs font-bold text-gray-900">
        <span>{label}</span>
        {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type={type}
        
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
        className="px-2.5 py-2.5 w-full text-base border-b border-solid border-[none] outline-none hover:border-secondary focus:border-secondary border-b-gray-900"
      />
    </div>
  );
};

export default FormInput;
