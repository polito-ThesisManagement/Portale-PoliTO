import { React } from "react";
import { Nav, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "../styles/Sidebar.css";
import "../styles/Utilities.css";

import { FaInfoCircle } from "react-icons/fa";
import {
  FaHouse,
  FaBookOpen,
  FaBriefcase,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa6";
import { MdApps } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <Col className={`col-md-1 custom-sidebar py-2 reduced`}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Item>
            <Link
              to="/"
              className={`nav-link text-style ${location.pathname === "/" ? "active" : ""}`}
            >
              <FaHouse size={28} />
              <span className="sidebar-text" style={{ marginTop: "3px" }}>
                Homepage
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/didattica"
              className={`nav-link text-style ${location.pathname.includes("/didattica") ? "active" : ""}`}
            >
              <FaBookOpen size={28} />
              <span className="sidebar-text" style={{ marginTop: "2px" }}>
                {t("sidebar.didattica")}
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/area_personale"
              className={`nav-link text-style ${location.pathname.includes("/area_personale") ? "active" : ""}`}
            >
              <FaUser size={28} />
              <span className="sidebar-text" style={{ marginTop: "2px" }}>
                {t("sidebar.area_personale")}
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/carriera"
              className={`nav-link text-style ${location.pathname.includes("/carriera") ? "active" : ""}`}
            >
              <FaUserGraduate size={25} style={{ marginLeft: "1px" }} />
              <span className="sidebar-text" style={{ marginTop: "3px" }}>
                {t("sidebar.carriera")}
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/opportunita"
              className={`nav-link text-style ${location.pathname.includes("/opportunita") ? "active" : ""}`}
            >
              <FaBriefcase size={25} style={{ marginLeft: "1px" }} />
              <span className="sidebar-text" style={{ marginTop: "1px" }}>
                {t("sidebar.opportunità")}
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/servizi"
              className={`nav-link text-style ${location.pathname.includes("/servizi") ? "active" : ""}`}
            >
              <MdApps size={28} style={{ marginLeft: "-1px" }} />
              <span className="sidebar-text" style={{ marginTop: "3px" }}>
                {t("sidebar.servizi")}
              </span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/help"
              className={`nav-link text-style ${location.pathname.includes("/help") ? "active" : ""}`}
            >
              <FaInfoCircle size={28} style={{ marginLeft: "-1px" }} />
              <span className="sidebar-text" style={{ marginTop: "3px" }}>
                Help
              </span>
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
    </>
  );
}
