import { useEffect, useState } from 'react';
import { Header } from "../../Components/Header/Header";
import { StyledMainPage } from "./MainPage.style";

export const MainPage = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'ad7c3083e6155a3ef810eb4d8d9edd69';
  const API_URL = 'https://thingproxy.freeboard.io/fetch/https://v3.football.api-sports.io/leagues';

  useEffect(() => {
    const fetchLeagues = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            'x-apisports-key': API_KEY,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setLeagues(data.response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagues();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <StyledMainPage>
        <h1>Football Leagues</h1>
        <ul>
          {leagues.map((league) => (
            <li key={league.league.id}>
              <img src={league.league.logo} alt={`${league.league.name} logo`} />
              <h2>{league.league.name}</h2>
              <p>Type: {league.league.type}</p>
              <p>Country: {league.country.name}</p>
            </li>
          ))}
        </ul>
      </StyledMainPage>
    </>
  );
};
