import { useLocation } from "react-router-dom";

export default function CoursePage(props) {
    const location = useLocation();
    const { codice, nome, periodo, crediti } = location.state;

    return (
        <>
            <h3>{codice}</h3>
            <h3>{nome}</h3>
            <h3>{periodo}</h3>
            <h3>{crediti}</h3>
            <h2>Informazioni ok</h2>
        </>
    );  

}