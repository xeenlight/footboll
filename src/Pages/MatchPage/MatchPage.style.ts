import styled from "styled-components";

export const StyledMatchPage = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;

  /* Стиль для заголовка */
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  /* Стили для кнопок фильтрации */
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

  /* Стили для списка матчей */
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Легкая тень для визуального отделения */
  }

  .match-item:hover {
    transform: scale(1.05);
  }
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Легкая тень для визуального отделения */
  }
  /* Для матча в процессе (IN_PLAY) */
  .MatchVS.in-play {
    background-color: rgba(0, 255, 60, 0.5); /* Зеленый фон с прозрачностью */
  }

  /* Для матча, который еще не начался (TIMED) */
  .MatchVS.timed {
    background-color: rgba(128, 128, 128, 0.5); /* Серый фон для TIMED */
  }

  .MatchVS.paused {
    background-color: rgba(0, 128, 255, 0.5);
  }

  /* Для завершенного матча, если ничья */
  .MatchVS.finished-draw {
    background-color: rgba(128, 128, 128, 0.5); /* Серый фон для ничьей */
  }

  /* Для завершенного матча, если выиграл домашний */
  .MatchVS.finished-home {
    background-image: linear-gradient(
      to left,
      rgba(255, 0, 0, 0.5),
      rgba(0, 255, 60, 0.5)
    );
  }

  /* Для завершенного матча, если выиграл гость */
  .MatchVS.finished-away {
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.5),
      rgba(0, 255, 60, 0.5)
    );
  }

  /* Для остальных состояний (по умолчанию) */
  .MatchVS.default {
    background-color: wheat; /* Стандартный цвет фона */
  }

  /* Стиль для блока с матчами */
  .match-item .MatchVS {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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




  /* Основной контейнер для счета */
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

/* Контейнеры для половинного и полного времени */
.halfTimeContainer,
.fullTimeContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* Заголовки h5 скрыты по умолчанию */
h5 {
  margin: 0;
  opacity: 0; /* Скрываем заголовок по умолчанию */
  height: 0; /* Скрываем заголовок */
  transition: opacity 0.3s ease, height 0.3s ease; /* Плавное скрытие */
}

/* При наведении на родительский элемент li заголовок становится видимым */
.match-item:hover .halfTimeContainer h5,
.match-item:hover .fullTimeContainer h5 {
  opacity: 1; /* Заголовок появляется */
  height: auto; /* Восстанавливаем высоту */
  transition: opacity 0.3s ease, height 0s 0s; /* Плавное восстановление */
}

/* Половина времени скрыта по умолчанию */
.halfTime {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  max-height: 0; /* Скрываем блоки по умолчанию */
  overflow: hidden; /* Скрываем контент */
  transition: max-height 0.1s ease-out; /* Плавное раскрытие */
}

/* Полное время всегда видно */
.fullTime {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  /* Блок fullTime не скрывается */
}

/* При наведении на родительский элемент li, раскрывается блок halfTime */
.match-item:hover .halfTime {
  max-height: 100px; /* Раскрытие блока Half time */
}

/* Стиль для элементов счета */
.score {
  padding: 5px 110px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  min-width: 50px;
  text-align: center;
}

.home-score {
  background-color: #007bff; /* Красный для домашней команды */
  color: white;
}

.away-score {
  background-color: #007bff; /* Синий для выездной команды */
  color: white;
}

.score-divider {
  font-size: 35px;
  font-weight: bold;
}

/* Контейнер для каждого матча */
.match-item {
  list-style-type: none;
  transition: transform 0.3s ease;
}

.match-item:hover {
  transform: scale(1.02); /* Легкий эффект при наведении на весь элемент */
}

  .VS {
    font-size: 30px;
    font-weight: bold;
  }
`;
