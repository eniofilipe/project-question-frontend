import React, { useState, useRef, useEffect } from "react";
import api from "../../services/api";

import { Container } from "./styles";

import { useField } from "@unform/core";
interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;
const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: "avatarId",
        path: "dataset.file",
        ref: inputRef.current,
      });
    }
  }, [registerField, inputRef]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FormData();

    data.append("avatar", e.target.files ? e.target.files[0] : "");

    const response = await api.post("avatar", data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  };

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || "https://api.adorable.io/avatars/50/abott@adorable.png"
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={inputRef}
        />
      </label>
    </Container>
  );
};
export default Input;
