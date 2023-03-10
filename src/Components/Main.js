import styled from "styled-components";
import Notizie from "./Notizie";
// import PostSections from "./PostSections";

const Main = (props) => {
  return (
    <Container>
      <div className="post">
        <Notizie />
      </div>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
  flex: 0.4;
  margin-top: 80px;
  margin-left: 10px;
  margin-right: 10px;
`;

const FeedInputContainer = styled.div`
background-color: white;
padding: 10px;
padding-bottom: 20px;
border-radius: 10px;
margin-bottom: 20px;

.feed-inputFlex{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

}

.hover:hover{
  background-color: whitesmoke;
border-radius: 10px;

}

button {
  outline: none;
  color: rgba(0,0,0,0.6);
  font-size: 14px;
  line-height:1.5;
  min-height: 48px;
  background-color: transparent;
  border: none;
  font-weight: 600;
`;

const FeedInput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;

  form {
    display: flex;
    width: 100%;
  }

  input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline-width: 0;
    font-weight: 600;
  }

  button {
    display: none;
  }
`;

export default Main;
