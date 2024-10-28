import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Promessa() {
    var compara = "";

    if("0" === 0) {
        compara = "verdadeiro";
    } else {
        compara = "falso";
    }



    const [prometido, setPrometido] = useState(" ")
    useEffect(()  => {});
    setTimeout(() => {
        setPrometido(mudaTexto("Olá texto novo"));
        document.title="Promessa é divida"
    }, 4000);

}); 
    return <>
     <Menu />
     <Container>
     Promessa {prometido === "" ? <img src="./gif fw2.gif" width={50} height={40}/> : prometido}
     </Container>
     <Footer />
        </>
}

function mudaTexto(texto) {
    return new Promisse ((resolva) => 
     setTimeout(() => {
        resolva(texto);
     }, 1000)
    );
}