import React from "react";

const TextArea = ({ name, label, cssClassName, error, ...rest }) => {
  return (
    <div className="form-group contact-forms">
      <textarea
        style={{ color: "white", fontSize: "20" }}
        {...rest}
        placeholder={label}
        name={name}
        id={name}
        className="form-control"
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
