import React from "react";
import { TextField } from "@mui/material";
import { Container } from "./styles";

const Input = ({
  value,
  onChange,
  label,
  placeholderText,
  style,
  disabled,
  ref,
  type = "text",
}) => {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        variant="outlined"
        className="input"
        label={label}
        value={value}
        onChange={onChange}
        style={style}
        placeholder={placeholderText}
        disabled={disabled}
        ref={ref}
        type={type}
      />
    </Container>
  );
};

export default Input;
