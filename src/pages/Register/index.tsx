import React, { useRef } from "react";
import history from "../../services/history";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { toast } from "react-toastify";

import api from "../../services/api";
import Input from "../../components/Input";
import AvatarInput from "../../components/AvatarInput";
import * as yup from "yup";

import { MdReply } from "react-icons/md";
import { Container } from "./styles";

const RegisterSchema = yup
  .object({
    name: yup.string().required("Username required"),
    email: yup.string().email().required("E-mail required"),
    password: yup
      .string()
      .min(6, "Min of 6 digits")
      .required("Password required"),
    passwordConfirm: yup
      .string()
      .when("password", (password: yup.StringSchema, field: yup.StringSchema) =>
        password
          ? field
              .required("Confirm Password required")
              .oneOf([yup.ref("password")], "Passwords does not match")
          : field
      ),
    avatarId: yup.number().integer().notRequired(),
  })
  .defined();
type IRegister = yup.InferType<typeof RegisterSchema>;

interface IValidationErrors {
  [name: string]: String;
}
const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      formRef.current?.setErrors({});

      await RegisterSchema.validate(data, {
        abortEarly: false,
      }).then(async (res) => {
        if (res) {
          await api.post("/users", res);

          toast.success("Success!", {
            onClose: () => backToHome(),
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    } catch (err) {
      const validationErrors: IValidationErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      } else {
        toast.error("Register fail, reviw your entries!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  function backToHome() {
    history.goBack();
  }

  return (
    <Container>
      <button type="button" onClick={backToHome}>
        <MdReply size={32} color="#EE6352" />
      </button>
      <div>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <AvatarInput name="avatarId" />
          <Input name="name" placeholder="username" />
          <Input name="email" type="email" placeholder="email" />
          <Input name="password" type="password" placeholder="password" />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="confirm password"
          />
          <button type="submit">DONE</button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
