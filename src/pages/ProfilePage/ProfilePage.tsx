import React from "react";
import { StyledProfilePage } from "./ProfilePage.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/slice/userSlice";

export const ProfilePage = () => {
  const userData = useSelector((state: RootState) => state.userSlice.user);
  return (
    <StyledProfilePage>
      <>
        {" "}
        <p>User Email: {userData?.useremail}</p>
        <p>User Password: {userData?.userpassword}</p>
        <p>User username: {userData?.username}</p>
        <p>User userphone: {userData?.userphone}</p>
        <p>User usercity: {userData?.usercity}</p>
      </>
    </StyledProfilePage>
  );
};
