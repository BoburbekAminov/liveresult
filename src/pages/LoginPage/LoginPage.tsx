import React, { useEffect } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/UI/Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";
import { StyleLoginPage } from "./LoginPage.style";
import { Container } from "../../components/UI/Container/Container.style";
import { Heading } from "../../components/Typograohy/Heading";
import { StyledLink } from "../../components/Typograohy/StyledLink";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { setUser } from "../../store/slice/authSlice";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержат ")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(
      setUser({ useremail: data.useremail, userpassword: data.userpassword })
    );
    navigate("/profile");
    console.log(data, "data");
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <StyleLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Войти"
          />
        </form>
        <StyledLink to="/register" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/register"
        />
      </StyleLoginPage>
    </Container>
  );
};
