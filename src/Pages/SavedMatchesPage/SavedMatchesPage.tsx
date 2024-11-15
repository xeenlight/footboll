import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { removeMatch } from "../../Store/Api/userSlice"; // Импортируем экшен для удаления матча
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { StyledMatchPage } from '../../Global.style';

const SavedMatchesPage = () => {
  const dispatch = useDispatch();
  const savedMatches = useSelector(
    (state: RootState) => state.user.savedMatches
  );

  const handleMouseEnter = (homeImgUrl: string, awayImgUrl: string) => {
    document.body.style.backgroundImage = `url(${homeImgUrl}), url(${awayImgUrl})`;
    document.body.style.backgroundSize = '400px';
    document.body.style.backgroundPosition = 'left center, right center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.position = 'relative';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.transition =
      'background-size 1s ease, background-position 1s ease';
  };

  const handleMouseLeave = () => {
    document.body.style.transition = 'none'; // Снятие переходов на время сброса
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundPosition = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundAttachment = '';
    document.body.style.position = '';
    document.body.style.transition = 'background-size 1s ease, background-position 1s ease'; // Восстановление переходов
  };

  // Функция для удаления матча
  const handleRemoveMatch = (matchId: string) => {
    dispatch(removeMatch({ id: matchId }));
  };

  return (
    <>
      <Header />
      <StyledMatchPage>
        <h1>Your saved matches</h1>
        <ul>
          {savedMatches.length === 0 ? (
            <p>No saved matches.</p>
          ) : (
            savedMatches.map((match) => {
              const winnerClass =
                match.score?.winner === "HOME_TEAM"
                  ? "finished-home"
                  : match.score?.winner === "AWAY_TEAM"
                  ? "finished-away"
                  : "";

              const statusClass =
                match.status === "IN_PLAY"
                  ? "in-play"
                  : match.status === "TIMED"
                  ? "timed"
                  : match.status === "FINISHED" &&
                    match.score?.winner === "DRAW"
                  ? "finished-draw"
                  : match.status === "FINISHED"
                  ? winnerClass
                  : match.status === "PAUSED"
                  ? "paused"
                  : match.status === "POSTPONED"
                  ? "postponed"
                  : "default";

              return (
                <li key={match.id} className={`match-item ${statusClass}`} onMouseEnter={() =>
                  handleMouseEnter(match.homeTeam.crest, match.awayTeam.crest)
                } onMouseLeave={handleMouseLeave}>
                  <div className={`MatchVS ${statusClass}`}>
                    <div className="homeTeam">
                      <img
                        src={match.homeTeam.crest}
                        alt={`${match.homeTeam.name} crest`}
                      />
                      <h2>{match.homeTeam.name}</h2>
                    </div>

                    <div className="VS">
                      <h3>VS</h3>
                      <p>{new Date(match.utcDate).toLocaleString()}</p>
                    </div>

                    <div className="awayTeam">
                      <h2>{match.awayTeam.name}</h2>
                      <img
                        src={match.awayTeam.crest}
                        alt={`${match.awayTeam.name} crest`}
                      />
                    </div>

                    <div className="buttonsSave">
                      <button
                        onClick={() => handleRemoveMatch(match.id)}
                        className="remove-button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="score-container">
                    <div className="halfTimeContainer">
                      <h5>Half time</h5>
                      <div className="halfTime">
                        <div className="score home-score">
                          {match.score?.halfTime.home ?? "N/A"}
                        </div>
                        <div className="score away-score">
                          {match.score?.halfTime.away ?? "N/A"}
                        </div>
                      </div>
                    </div>

                    <div className="fullTimeContainer">
                      <h5>Full time</h5>
                      <div className="fullTime">
                        <div className="score home-score">
                          {match.score?.fullTime.home ?? "N/A"}
                        </div>
                        <div className="score away-score">
                          {match.score?.fullTime.away ?? "N/A"}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </StyledMatchPage>
      <Footer />
    </>
  );
};

export default SavedMatchesPage;
 