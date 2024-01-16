import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Header } from "../../components/Header/Header";
import { MatchItem, useLazyGetCountriesQuery } from "../../store/API/matchApi";
import { FullscreenLoader } from "../../components/UI/FullscreenLoader/FullscreenLoader";
import { Supheader } from "../../components/Supheader/Supheader";
import { Menu } from "../../components/Menu/Menu";
import { StyledMainPage } from "./MainPage.style";
import { Match } from "../../components/Match/Match";
import { ThemeContext, themes } from "../../contexts/themeContext";
import { League } from "../../components/League/League";

export const MainPage = () => {
  const [fetchTrigger, { data, isLoading, error }] = useLazyGetCountriesQuery(
    {}
  );
  const [index, setIndex] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log("theme", theme);
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
      <Container
        style={{
          background: theme === themes.dark ? "#333" : "#fff",
          color: theme === themes.dark ? "#169ea2" : "",
        }}
      >
        <Header />
        {isLoading && <FullscreenLoader />}
        <Menu />
        <Supheader />
        <StyledMainPage>
          <div className="footballList">
            <div className="listTitle">
              <h1>Текстовые трансляции LiveResult</h1>
            </div>
            <div className="recommendations">
              <div className="league">
                {!!data?.response.length && index === 0 && (
                  <League
                    leagueFlag={data.response[14].league.flag}
                    leagueLogo={data.response[14].league.logo}
                    leaguename={data.response[14].league.name}
                    season={data.response[14].league.season}
                  />
                )}
              </div>
              <div className="recommendationTitle">
                <div
                  className="tabFootball"
                  onClick={() => {
                    setIndex(0);
                  }}
                >
                  <p>Актуально</p>
                </div>
                <div
                  className="tabFootball"
                  onClick={() => {
                    setIndex(1);
                  }}
                >
                  <p>Футбол</p>
                </div>
              </div>
              <div className={index === 0 ? "matchs" : "matchTwo"}>
                {!!data?.response.length &&
                  data?.response.map((match) => (
                    <Match
                      key={match.fixture.id}
                      homeLogo={match?.teams?.home.logo}
                      homeName={match?.teams?.home.name}
                      awayLogo={match?.teams?.away.logo}
                      awayName={match?.teams?.away.name}
                      long={match?.fixture?.status.long}
                      homeGoal={match?.goals?.home}
                      awayGoal={match?.goals?.away}
                    />
                  ))}
              </div>
            </div>
          </div>
        </StyledMainPage>
      </Container>
    </>
  );
};
