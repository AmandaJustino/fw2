import { Container } from "react-bootstrap";
import Footer from "./component/footer";
import Menu from "./component/navbar";

export default function noticias(){
    return (
    <> 
    <Menu/> 
       <Container>
          Lista
       </Container>
          <Footer /> 
    </>
    );
}