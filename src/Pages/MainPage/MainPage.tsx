import { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledMainPage } from "./MainPage.style";

export const MainPage = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(areas);
  

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("https://thingproxy.freeboard.io/fetch/http://api.football-data.org/v4/areas/", {
          headers: {
            "X-Auth-Token": "494e431e8bb14822bd60d706d0355379"
          }
        });
        const data = await response.json();
        setAreas(data.areas);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, []);

  if (loading) {
    return <StyledMainPage>Loading...</StyledMainPage>;
  }

  if (error) {
    return <StyledMainPage>Error: {error}</StyledMainPage>;
  }

  return (
    <>
      <Header />
      <StyledMainPage>
        <h1>Areas</h1>
        <ul>
          {areas.map(area => (
            <li key={area.id}>
              {area.name} - {area.parentArea}
            </li>
          ))}
        </ul>
      </StyledMainPage>
    </>
  );
};
