import { Row, Container } from "react-bootstrap";
import BaseCard from "../components/BaseCard";
import Title from "../components/Title";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";

export default function Carriera() {
  return (
    <>
      <Title
        icon={
          <FaUserGraduate
            size={28}
            style={{ position: "relative", bottom: "1px" }}
          />
        }
        sectionName="Carriera"
      />
      <Container style={{ marginLeft: "0px", maxWidth: "1416px" }}>
        <Row>
          <BaseCard
            icon={<BsCreditCard2BackFill size="42" className="card-icon" />}
            service={"Tasse e agevolazioni"}
            description={"Pagamento e richiesta riduzione tasse."}
            servicePath={"/carriera"}
          />
          <BaseCard
            icon={<IoIosListBox size="42" className="card-icon" />}
            service={"Piano carriera"}
            description={
              "Compilazione o modifica del piano carriera e/o del carico didattico, iscrizione al nuovo accademico."
            }
            servicePath={"/carriera"}
          />
          <BaseCard
            icon={<MdEditDocument size="42" className="card-icon" />}
            service={"Gestione carriera"}
            description={
              "Richiesta approvazione di attività esterne e modifica stato carriera."
            }
            servicePath={"/carriera"}
          />
          <BaseCard
            icon={<FaUserEdit size="42" className="card-icon" />}
            service={"Apply"}
            description={"Visualizzazione e verifica stato della tua carriera."}
            servicePath={"/carriera"}
          />
          <BaseCard
            icon={<FaGraduationCap size="42" className="card-icon" />}
            service={"Laurea ed Esame Finale"}
            description={
              "Visualizzazione stato della tesi e degli step per conseguire il titolo."
            }
            servicePath={"/carriera/laurea_ed_esame_finale"}
          />
          <BaseCard
            icon={<HiLightBulb size="42" className="card-icon" />}
            service={"Proposte di tesi"}
            description={"Elenco delle proposte di tesi."}
            servicePath={"/carriera/proposte_di_tesi"}
          />
        </Row>
      </Container>
    </>
  );
}
