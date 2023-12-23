import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/UI/Header/Header";

import { useGetCountriesQuery } from "../../store/API/authApi";

export const MainPage = () => {
  // const { data, isLoading, error } = useGetCountriesQuery([]);

  // if (data) {
  //   console.log(data);
  // }

  // if (error) {
  //   console.log(error);
  // }

  return (
    <>
      {/* {isError && <h1>ERROR</h1>}  */}
      {/* {isLoading && <h1>Loading...</h1>} */}
      {/* {data?.response.length && data.response.map(() => (

      ))} */}
      <Container>
        <Header />
      </Container>
    </>
  );
};
