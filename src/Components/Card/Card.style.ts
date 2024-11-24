import styled from "styled-components";
import { colors } from "../../Theme/colors";

export const StyledCard = styled.div`

  background: ${colors.matchIcon};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
a{
  text-decoration: none;
}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background: ${({ theme }) => theme.activetext};

    .card-text {
    text-align: center;
    margin: 10px 0;
    color: ${colors.colorWhite};

    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
      color: #ccc;
    }
  }
  }

  img {
    width: 100%;
max-width: 300px;

    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .card-text {
    text-align: center;
    margin: 10px 0;
    color: ${colors.colorBlack};

    h3 {
      font-size: 18px;
      font-weight: bold;
    }

    p {
      font-size: 14px;
    }
  }
`;
