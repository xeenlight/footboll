import styled from "styled-components";

export const StyledSavedMatchesPage = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 100px 0px;


  /* Заголовок */
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  /* Фильтры */
  .filter-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 30px;
  }

  .filter-buttons button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    text-transform: capitalize;
  }

  .filter-buttons button:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  .filter-buttons button.active {
    background-color: #28a745;
  }

  .filter-buttons button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }

  /* Список матчей */
  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .match-item {
    width: 750px;
    padding: 0 0 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 30px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  .match-item:hover {
    transform: scale(1.05);
  }

  /* Статусы матчей */
  .MatchVS {
    width: 750px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
/* Стили для кнопки в .buttonsSave */
.buttonsSave {
  width: 100%;
}

.buttonsSave button {
  width: 100%;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
  border: none;
  transition: background-color 0.3s; /* Плавный переход */
}

/* Добавляем отдельный стиль для кнопки с классом .remove-button */
.remove-button {
  background-color: #ff0000; /* Красный цвет */
  color: white;
}

.remove-button:hover {
  background-color: #cc0000; /* Темный красный при наведении */
}


  .MatchVS.in-play {
    background-color: rgba(0, 255, 60, 0.7);
  }

  .MatchVS.timed {
    background-color: rgba(128, 128, 128, 0.5);
  }

  .MatchVS.paused {
    background-color: rgba(0, 128, 255, 0.7);
  }

  .MatchVS.finished-draw {
    background-color: rgba(128, 128, 128, 0.7);
  }

  .MatchVS.postponed {
    background-color: rgba(255, 0, 0, 0.7);
  }

  .MatchVS.finished-home {
    background-image: linear-gradient(
      to left,
      rgba(255, 0, 0, 0.7),
      rgba(0, 255, 60, 0.7)
    );
  }

  .MatchVS.finished-away {
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.7),
      rgba(0, 255, 60, 0.7)
    );
  }

  .MatchVS.default {
    background-color: wheat;
  }

  /* Контейнеры для команд */
  .match-item .MatchVS {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .match-item .homeTeam {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  .match-item .awayTeam {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  /* Названия команд */
  .match-item h2 {
    font-size: 20px;
  }

  .match-item h3 {
    font-size: 20px;
  }

  .match-item h4 {
    font-size: 15px;
  }

  .match-item p {
    font-size: 10px;
  }

  /* Логотипы команд */
  .match-item img {
    width: 100%;
    max-width: 60px;
  }

  /* Счёт */
  .score-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    gap: 10px;
    position: relative;
  }

  .halfTimeContainer,
  .fullTimeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  h5 {
    margin: 0;
    opacity: 0;
    height: 0;
    transition: opacity 0.3s ease, height 0.3s ease;
  }

  .match-item:hover .halfTimeContainer h5,
  .match-item:hover .fullTimeContainer h5 {
    opacity: 1;
    height: auto;
    transition: opacity 0.3s ease, height 0s 0s;
  }

  .halfTime {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.1s ease-out;
  }

  .fullTime {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .match-item:hover .halfTime {
    max-height: 100px;
  }

  .score {
    padding: 5px 110px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    min-width: 50px;
    text-align: center;
  }

  .home-score {
    background-color: #007bff;
    color: white;
  }

  .away-score {
    background-color: #007bff;
    color: white;
  }

  .score-divider {
    font-size: 35px;
    font-weight: bold;
  }

  /* Стиль для контейнера матчей */
  .match-item {
    list-style-type: none;
    transition: transform 0.3s ease;
  }

  .match-item:hover {
    transform: scale(1.02);
  }

  .VS {
    font-size: 30px;
    font-weight: bold;
  }

  /* Медиазапросы для адаптивности */
  @media (max-width: 768px) {
    .match-item {
      width: 100%;
      font-size: 18px;
    }

    .filter-buttons {
      flex-direction: column;
      gap: 10px;
    }

    .filter-buttons button {
      width: 100%;
      padding: 10px;
      font-size: 14px;
    }

    .match-item .homeTeam,
    .match-item .awayTeam {
      width: 100%;
      justify-content: center;
    }

    .match-item .MatchVS {
      flex-direction: column;
      align-items: center;
    }

    .score-container {
      font-size: 24px;
    }
  }
`;
