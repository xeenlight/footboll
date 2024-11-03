import  { useEffect, useState } from "react";
import { Header } from "../../Components/Header/Header";
import { StyledMainPage } from "./MainPage.style";

interface Area {
  id: number;
  name: string;
  code: string;
  flag: string | null;
  parentAreaId: number | null;
  parentArea: string | null;
  childAreas: ChildArea[];
}

interface ChildArea {
  id: number;
  name: string;
  countryCode: string;
  flag: string | null;
  parentAreaId: number;
  parentArea: string;
}

export const MainPage = () => {
  const [area, setArea] = useState<Area | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArea = async () => {
      try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/http://api.football-data.org/v4/areas/", {
          method: "GET",
          headers: {
            "X-Auth-Token": "494e431e8bb14822bd60d706d0355379",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setArea(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArea();
  }, []);

  return (
    <>
      <Header />
      <StyledMainPage>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {area && (
          <div>
            <h2>{area.name} (ID: {area.id})</h2>
            <h3>Child Areas:</h3>
            <ul>
              {area.childAreas.map((child) => (
                <li key={child.id}>
                  {child.name} - {child.countryCode} {child.flag && <img src={child.flag} alt={`${child.name} flag`} />}
                </li>
              ))}
            </ul>
          </div>
        )}
      </StyledMainPage>
    </>
  );
};
