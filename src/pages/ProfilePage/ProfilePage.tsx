import React from "react";
import { StyledProfilePage } from "./ProfilePage.style";
import {
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import { Header } from "../../components/Header/Header";

export const ProfilePage: React.FC = () => {
  const storedDataString = localStorage.getItem(
    "registrationFormData" || "loginFormData"
  );
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData ? storedData[0] : "N/A";
  const useremail = storedData ? storedData[3] : "N/A";

  return (
    <Container>
      <Header />
      <StyledProfilePage>
        <>
          <p>name: {username}</p>
          <p>Email: {useremail}</p>
        </>
      </StyledProfilePage>
    </Container>
  );
};
