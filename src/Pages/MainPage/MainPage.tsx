import Card from "../../Components/Card/Card";
import { Footer } from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { StyledMainPage } from "../../Theme/mainPage";

export const MainPage = () => {
  return (
    <>
      <Header />
      <StyledMainPage>
        <h1>Football Coverage</h1>
        <div className="Card">
          <Card
            image="https://crests.football-data.org/CL.png"
            title="Champions League"
            description="Europe"
            link="/1"
          />
          <Card
            image="https://crests.football-data.org/PPL.png"
            title="Primeira Liga"
            description="Portugal"
            link="/2"
          />
          <Card
            image="https://crests.football-data.org/PL.png"
            title="Premier League"
            description="England"
            link="/3"
          />

          <Card
            image="https://crests.football-data.org/ED.png"
            title="Eredivisie"
            description="Netherlands"
            link="/4"
          />
          <Card
            image="https://crests.football-data.org/BL1.png"
            title="Bundesliga"
            description="Germany"
            link="/5"
          />
          <Card
            image="https://crests.football-data.org/FL1.png"
            title="Ligue 1"
            description="France"
            link="/6"
          />

          <Card
            image="https://crests.football-data.org/SA.png"
            title="Serie A"
            description="Italy"
            link="/7"
          />
          <Card
            image="https://crests.football-data.org/laliga.png"
            title="La Liga"
            description="Spain"
            link="/8"
          />
          <Card
            image="https://crests.football-data.org/ELC.png"
            title="Championship"
            description="England"
            link="/9"
          />

          <Card
            image="https://crests.football-data.org/bsa.png"
            title="Serie A"
            description="Brazil"
            link="/10"
          />
          <Card
            image="https://crests.football-data.org/qatar.png"
            title="Worldcup"
            description="World"
            link="/11"
          />
          <Card
            image="https://crests.football-data.org/ec.png"
            title="Europe"
            description="European Championships"
            link="/12"
          />
        </div>
      </StyledMainPage>
      <Footer />
    </>
  );
};
