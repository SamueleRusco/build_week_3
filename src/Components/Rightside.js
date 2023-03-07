import styled from "styled-components";
import MyFooterPart from "./MyFooterPart";
import NewsWithFetch from "./NewsWithFetch";

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <p>LinkedIn Notizie</p>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <NewsWithFetch />
        </FeedList>

        <Recommendation>Visualizza altro</Recommendation>
      </FollowCard>
      <BannerCard className="fixed">
        <div>
          <img
            src="https://img.freepik.com/premium-psd/we-are-hiring-job-vacancy-web-banner-social-media-post-template_169307-1679.jpg?w=360"
            alt="OOOO"
          />
        </div>
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  grid-area: rightside;
  flex: 0.15;
`;

const FollowCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 600;

  width: 100%;
  color: #191919;
  p {
    margin-bottom: 0;
    margin: 0;
  }
`;

const FeedList = styled.ul`
  margin-top: 16px;
  padding-left: 0px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.div`
  color: #6c6c6c;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  width: fit-content;
  padding: 5px;
  border-radius: 7px;

  &:hover {
    background-color: #ebebeb;
  }
`;

const BannerCard = styled(FollowCard)`
position: sticky;
top: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default Rightside;
