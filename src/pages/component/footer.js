import { Container } from "react-bootstrap";
import style from "@/styles/footer.module.css"

export default function Footer() {
    return (
    <>
        <Container>
            <footer className={`${style.footerGradiente} px-4 my-4 border-3 border border-info-subtle rounded-3`}>
                <ul className="nav justify-content-center border-bottom border-3 border-info-subtle">
                    <li> Disciplina de Frameworks 2</li>
                </ul>
                <p>&copy; 2024 - IFMS </p>
            </footer>
        </Container>
    </>
    );
}