import React from "react";

const FormTextArea = ({ label,value,handleChange, placeholder, required = false }) => {
  return (
    <div className="mb-6">
      <label className="mb-1.5 text-xs font-bold text-gray-900">
        {label}
        {required && <span className="text-rose-500">*</span>}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={2}
        required={required}
        className="p-2.5 w-full text-base border-b border-solid resize-none border-[none] outline-none hover:border-secondary focus:border-secondary border-b-gray-900"
      />
    </div>
  );
};

export default FormTextArea;
