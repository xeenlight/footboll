import { StyledFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://www.football-data.org/" target="_blank">
        <img src="https://i.postimg.cc/tgtt4Xhj/image.png" alt="" />
        <span>API</span>
      </a>

      <div className="infoRight">
        <a href="https://github.com/xeenlight/footboll" target="_blank">
          <img src="https://i.postimg.cc/tCS3sSZs/image.png" alt="" />
          <span>Git Repositories</span>
        </a>

        <a href="https://github.com/xeenlight" target="_blank">
          <img src="https://i.postimg.cc/RZtWvXc5/image.png" alt="" />
          <span>My profile</span>
        </a>
      </div>
    </StyledFooter>
  );
};
