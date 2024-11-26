import Card from "../../Components/Card/Card";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import ThemeButton from "../../Components/ThemeButton/ThemeButton";
import { StyledMainPage } from "../../Theme/mainPage";

export const MainPage = () => {
  return (
    <>
      <Header />
      <StyledMainPage>
        <h1>Football Coverage</h1>
        <ThemeButton/>
        <div className="Card">
          <Card
            image="https://crests.football-data.org/CL.png"
            title="Champions League"
            description="Europe"
            link="/ChampionsLeague"
          />
          <Card
            image="https://crests.football-data.org/PPL.png"
            title="Primeira Liga"
            description="Portugal"
            link="/PrimeiraLiga"
          />
          <Card
            image="https://crests.football-data.org/PL.png"
            title="Premier League"
            description="England"
            link="/PremierLeague"
          />

          <Card
            image="https://crests.football-data.org/ED.png"
            title="Eredivisie"
            description="Netherlands"
            link="/Eredivisie"
          />
          <Card
            image="https://crests.football-data.org/BL1.png"
            title="Bundesliga"
            description="Germany"
            link="/Bundesliga"
          />
          <Card
            image="https://crests.football-data.org/FL1.png"
            title="Ligue 1"
            description="France"
            link="/Ligue1"
          />

          <Card
            image="https://crests.football-data.org/SA.png"
            title="Serie A"
            description="Italy"
            link="/SerieA"
          />
          <Card
            image="https://crests.football-data.org/laliga.png"
            title="La Liga"
            description="Spain"
            link="/LaLiga"
          />
          <Card
            image="https://crests.football-data.org/ELC.png"
            title="Championship"
            description="England"
            link="/Championship"
          />

          <Card
            image="https://crests.football-data.org/bsa.png"
            title="Serie A"
            description="Brazil"
            link="/SerieABr"
          />
          <Card
            image="https://crests.football-data.org/qatar.png"
            title="Worldcup"
            description="World"
            link="/Worldcup"
          />
          <Card
            image="https://crests.football-data.org/ec.png"
            title="Europe"
            description="European Championships"
            link="/European"
          />
        </div>
      </StyledMainPage>
      <Footer />
    </>
  );
};
