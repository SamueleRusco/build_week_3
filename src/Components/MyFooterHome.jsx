import { Container, Row, Col, Image, Form } from "react-bootstrap";

const MyFooterHome = () => {
  return (
    <Container id="footer" className="">
      

          <Row className="footerHome">
            <a href=""> Infromazioni </a>
            <a href=""> Accessibilità </a>
          </Row>
        
          <Row className="footerHome">
            <a href="">Centro assistenza</a>  
            <a href="">Privacy e condizioni</a>
          </Row>
              
          <Row className="footerHome">
            <a href=""> Opzioni per gli annunci pubblicitari </a>   
          </Row> 

          <Row className="footerHome">
            <a href="">Pubblicità</a>
            <a href="">Servizi alle aziende</a>
          </Row>

          <Row className="footerHome">
            <a href="">Scarica l'app LinkedIn</a>
            <a href="">Altro</a>
          </Row> 
          
          <Row>
            <p> <Image src="../images/promoted/linkedinADS.png" alt="linkedin logo" />  linkedin corporation &copy; {new Date().getFullYear()}</p>
          </Row>


    </Container>
  );
};

/*gdgd*/

export default MyFooterHome;
