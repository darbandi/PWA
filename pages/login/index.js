import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import InputText from "src/components/input-text";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSnackbar } from "notistack";
import {
  Container,
  Main,
  Logo,
  Label,
  Description,
  SubmitButton,
  Header,
  LoginSocials,
  Loading,
} from "./style";
import { getLogin } from "../../src/store/slices/auth";

const index = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { token, error, isLoading } = useSelector(
    (state) => state.auth
  );
  const { data } = useSession();
  const [values, setValues] = useState({});
  const { accessToken } = data || {};
  const dispatch = useDispatch();

  const handleLoginSocials = () => {
    signIn();
  };

  const handleSubmit = () => {
    dispatch(getLogin(values));
  };

  const handleChangeInput = (e) => {
    setValues((x) => ({
      ...x,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (token || accessToken) router.push("/countries");
  }, [token, accessToken]);

  useEffect(() => {
    console.log("error", error);
    if (error)
      enqueueSnackbar("اطلاعات ورودی صحیح نیست", {
        variant: "error",
      });
  }, [error]);

  return (
    <Container>
      <Main>
        <Logo>لوگو</Logo>
        <Header>
          <Label>ورود</Label>
          <Description>اطلاعات ورود خود را وارد کنید.</Description>
        </Header>
        <InputText
          name="email"
          onChange={handleChangeInput}
          label="آدرس ایمیل"
        />
        <InputText
          name="password"
          onChange={handleChangeInput}
          label="رمز عبور"
          type="password"
        />
        {isLoading ? (
          <Loading loading variant="contained">
            ورود
          </Loading>
        ) : (
          <SubmitButton onClick={handleSubmit} variant="contained">
            ورود
          </SubmitButton>
        )}

        <LoginSocials onClick={handleLoginSocials} variant="outlined">
          لاگین با اکانت شبکه‌های اجتماعی
        </LoginSocials>
      </Main>
    </Container>
  );
};

export default index;
