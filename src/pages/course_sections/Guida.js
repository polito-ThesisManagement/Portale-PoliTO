import { useLocation } from "react-router-dom";

export default function Guida() {
    const location = useLocation();
    const { linkGuida } = location.state;

    //non presente nella nuova architettura, se elimi la pagina elimina anche il tutto su Data.json 
    return (
        <>
        {/* }
            <iframe 
            title="guida" width="100%" height="100%" seamless
            src={linkGuida}
            ></iframe>
    */}
        </>
    );  

}