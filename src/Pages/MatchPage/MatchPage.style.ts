import styled from "styled-components";

export const StyledMatchPage = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .match-item {
    width: 750px;
    height: 90px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 30px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .match-item:hover {
    transform: scale(1.05);
  }

  /* Для матча в процессе (IN_PLAY) */
  .match-item.in-play {
    background-color: rgba(0, 255, 60, 0.5);  /* Зеленый фон с прозрачностью */
    border: solid 2px rgba(0, 255, 60, 1);      /* Зеленая рамка */
  }

  /* Для матча, который еще не начался (TIMED) */
  .match-item.timed {
    background-color: rgba(128, 128, 128, 0.5);  /* Серый фон для TIMED */
  }

  /* Для завершенного матча, если ничья */
  .match-item.finished-draw {
    background-color:  rgba(128, 128, 128, 0.5);;  /* Серый фон для ничьей */
    border: 2px solid  rgba(128, 128, 128, 1);;  /* Добавим более темную рамку для ничьей */
  }

  /* Для завершенного матча, если выиграл домашний */
  .match-item.finished-home {
    background-image: linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(0, 255, 60, 0.5));
  }

  /* Для завершенного матча, если выиграл гость */
  .match-item.finished-away {
    background-image: linear-gradient(to left, rgba(255, 0, 0, 0.5), rgba(0, 255, 60, 0.5));
  }

  /* Для остальных состояний (по умолчанию) */
  .match-item.default {
    background-color: wheat;  /* Стандартный цвет фона */
  }

  /* Стиль для блока с матчами */
  .match-item .MatchVS {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Стиль для домашней команды */
  .match-item .homeTeam {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  /* Стиль для выездной команды */
  .match-item .awayTeam {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  /* Заголовки и текст внутри матча */
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

  /* Размер изображений для логотипов команд */
  .match-item img {
    width: 100%;
    max-width: 60px;
  }

  /* Стиль для заголовка на странице */
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  
`;
