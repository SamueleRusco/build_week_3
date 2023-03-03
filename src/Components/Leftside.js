import styled from "styled-components";

const Leftside = (props) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Ti diamo il benvenuto Paolo!</Link>
          </a>
          <a>
            <AddPhotoText>Aggiungi una foto</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span className="collegamenti">Collegamenti</span>
              <span className="espandi">Espandi la tua rete</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />I miei Elementi
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span className="spanBlue">Gruppi</span>
        </a>
        <a>
          <span className="spanBlue">
            Eventi
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span className="spanBlue">Hashtags seguiti</span>
        </a>
        <a>
          <span className="scopri">Scopri di più</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 80px;
  grid-area: leftside;
  flex: 0.15;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: white;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    height: 54px;


    &:hover {
      background-color: #EBEBEB;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      

      span {
        font-size: 12px;
        line-height: 1.333;
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
          font-weight: 500;

        }
        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
          font-weight: 500;

        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;
  text-decoration: none;

  
  span {

    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    
    img {
      color: #5E5E5E;
      margin-right: 5px;

      
    }
  }

  &:hover {
    background-color: #EBEBEB;
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 4px 12px 4px 12px;
    font-size: 12px;

    &:hover {
      text-decoration: underline !important;
    
    }

    .spanBlue {
      display: flex;
      color:#0D68C3;
      align-items: center;
      justify-content: space-between;
      font-weight: 500;

    }
  
    .scopri {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;

    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none !important;

      border-top: 1px solid #d6cec2;
      padding: 12px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default Leftside;
