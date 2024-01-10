import React from "react";
import { Button } from "../../components/UI/Button/Button";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { Heading } from "../../components/Typograohy/Heading";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { changeUser } from "../../store/slice/userSlice";

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
});

interface IRegistrationForm {
  username: string;
  userphone: string;
  userpassword: string;
  useremail: string;
  usercity: string;
}

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      useremail: "",
      usercity: "",
    },
  });

  // console.warn("ERRORS: ", errors);
  const navigate = useNavigate();

  const onRegistrationSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    dispatch(
      changeUser({
        username: data.username,
        userphone: data.userphone,
        useremail: data.useremail,
        userpassword: data.userpassword,
        usercity: data.usercity,
      })
    );
    navigate("/profile");
    console.log(data, "DATA: ");
  };

  return (
    <Container>
      <StyledRegistrationPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.username ? true : false}
                errorMessage={errors.username?.message}
                type="text"
                placeholder="Имя и фамилия"
                {...field}
              />
            )}
          />
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
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userphone ? true : false}
                errorMessage={errors.userphone?.message}
                type="tel"
                placeholder="Номер телефона"
                {...field}
              />
            )}
          />
          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.usercity ? true : false}
                errorMessage={errors.usercity?.message}
                type="text"
                placeholder="city"
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
            buttonText="Зарегистрироваться"
          />
        </form>
        <RegistrationInfo
          question="Уже есть аккаунт?"
          linkURL="/"
          linkLabel="Войти"
        />
      </StyledRegistrationPage>
    </Container>
  );
};
