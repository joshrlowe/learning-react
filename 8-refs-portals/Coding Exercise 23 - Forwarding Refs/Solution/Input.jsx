import React from "react";

const Input = React.forwardRef(({ type, label, ...props }, ref) => {
  return (
    <p className="control" {...props}>
      <label>{label}</label>
      <input type={type} ref={ref} />
    </p>
  );
});

export default Input;
