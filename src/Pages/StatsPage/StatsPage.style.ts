import styled from "styled-components";

export const StyledStatsPage = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  ul{
    display: flex;
    flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  }
  li {
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
    background-color: wheat;
    border-radius: 20px;
  }
  .MatchVS {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .homeTeam {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }
    .awayTeam {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }
    h2 {
      font-size: 20px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
    }
    img {
      width: 100%;
      max-width: 60px;
    }

  }
`;
