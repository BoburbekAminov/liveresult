import React, { useEffect, useState } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/UI/Header/Header";
import {
  // useGetCountriesQuery,
  useLazyGetCountriesQuery,
} from "../../store/API/matchApi";
import { Supheader } from "../../components/Supheader/Supheader";
import { Menu } from "../../components/Menu/Menu";
import { StyledMainPage } from "./MainPage.style";
import { Match } from "../../components/Match/Match";

export const MainPage = () => {
  // const { data, isLoading, error } = useGetCountriesQuery({
  //   h2h: "33-34",
  //   status: "ft",
  //   last: "10",
  // });
  const [fetchTrigger, { data, isLoading, error }] = useLazyGetCountriesQuery(
    {}
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchTrigger(null);
  }, [fetchTrigger, data]);

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {/* {isError && <h1>ERROR</h1>}  */}
      {isLoading && <h1>Loading...</h1>}
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
              <div className="recommendationTitle">
                <div
                  onClick={() => {
                    setIndex(0);
                  }}
                  className="tabCurrent"
                >
                  <p>Актуально</p>
                </div>
                <div
                  onClick={() => {
                    setIndex(1);
                  }}
                  className="tabFootbal"
                >
                  <p>Футбол</p>
                </div>
              </div>
              {/* <div className="tab"> */}
              {index === 0 ? (
                <div className="matchs">
                  {!!data?.response.length &&
                    data?.response.map((match) => (
                      <Match
                        date={match?.fixture?.date}
                        long={match?.fixture?.status.long}
                        home={match?.goals?.home}
                        away={match?.goals?.away}
                      />
                    ))}
                </div>
              ) : (
                <div className="">tab2</div>
              )}
              {/* </div> */}
            </div>
          </div>
        </StyledMainPage>
      </Container>
    </>
  );
};
