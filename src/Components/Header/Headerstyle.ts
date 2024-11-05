import styled from "styled-components";

export const StyledHeader = styled.div`

  width: 100%;
  background-color: rgb(33, 186, 69);
  box-shadow: 0px 0px 25px rgba(228, 428, 428, 0.6);
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;

  .Buttons {
    display: flex;
    align-items: center;
    
    .Login {
      width: 120px;
      height: 40px;
      background-color: aqua;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(
        82% 100%,
        30% 100%,
        0% 100%,
        0% 65%,
        30% 0%,
        100% 0%,
        100% 26%,
        82% 75%
      );
      margin-right: -15px; /* Отрицательный отступ для наложения */
    }

    .Register {
      width: 120px;
      height: 40px;
      background-color: rebeccapurple;
      display: flex;
      align-items: center;
      justify-content: center;
      clip-path: polygon(
        18% 0%,
        70% 0%,
        100% 0%,
        100% 35%,
        70% 100%,
        0% 100%,
        0% 74%,
        18% 25%
      );
    }
  }

  ul {
    display: flex;
    gap: 20px;
    font-size: 30px;
    list-style: none; /* Убираем стандартные маркеры списка */
    padding: 0; /* Убираем отступы списка */

    li {
      position: relative; /* Нужно для псевдоэлемента */
      text-align: center;
      transition: transform 0.3s ease; /* Плавный эффект увеличения */
      
      &:hover {
        transform: scale(1.1); /* Увеличиваем размер при наведении */
      }

      a {
        color: white; /* Цвет текста ссылок */
        text-decoration: none; /* Убираем подчеркивание */
        font-weight: bold; /* Жирный шрифт */
        display: inline-block; /* Даем ссылке блоковое поведение */
        padding: 5px 0; /* Чтобы было место для подчеркивания */
        transition: color 0.3s ease;
      }

      /* Псевдоэлемент для подчеркивания */
      &::after {
        content: ""; /* Создаем пустое содержимое */
        position: absolute;
        bottom: 0; /* Размещаем подчеркивание по низу элемента */
        left: 0; /* Выравниваем по левому краю */
        width: 0; /* Начальная ширина подчеркивания */
        height: 3px; /* Высота линии */
        background-color: #ffd700; /* Цвет подчеркивания */
        transition: width 0.3s ease; /* Плавное расширение линии */
      }

      &:hover::after {
        width: 100%; /* При наведении линия растягивается на всю ширину */
      }
    }
  }
`;
