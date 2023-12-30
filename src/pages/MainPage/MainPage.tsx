import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/UI/Header/Header";

import { useGetCountriesQuery } from "../../store/API/authApi";
import { Supheader } from "../../components/Supheader/Supheader";
import { Menu } from "../../components/Menu/Menu";
import { StyledMainPage } from "./MainPage.style";

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
        <Menu />
        <Supheader />
        <StyledMainPage>
          <div className="footballList">
            <div className="listTitle">
              <h1>Текстовые трансляции LiveResult</h1>
            </div>
            <div className="recommendations">
              <div className="tabCurrent">
                <p>Актуально</p>
              </div>
              <div className="tabFootbal">
                <p>Футбол</p>
              </div>
            </div>
          </div>
        </StyledMainPage>
      </Container>
    </>
  );
};
