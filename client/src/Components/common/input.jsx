import React from "react";

const Input = ({ name, label, cssClassName, color, error, ...rest }) => {
  let className = cssClassName
    ? "form-group contact-forms"
    : "col-md-6 form-group contact-forms";

  let colorstyle = color ? color : "white";
  return (
    <div className={className}>
      <input
        style={{ color: colorstyle, fontSize: "20" }}
        {...rest}
        placeholder={label}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
