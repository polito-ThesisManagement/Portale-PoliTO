import '../styles/Notification.css'

import { Container } from "react-bootstrap";

export default function CourseNotice(props) {

    return(
    <Container className="notice-container">
        <div className="p-2">
            <div className="notice-info mb-1">
                Titolo
            </div>

            <span className="notice-title">
                Materiale 5 - Audio Analysis
            </span>

            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </div>
        </div>
        
    </Container>
    )
}