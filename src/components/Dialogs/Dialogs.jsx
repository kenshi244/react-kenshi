import React from "react";
/* import style from "./styles/Dialogs.module.css"; */
import AnimatedPage from "../../AnimatedPage";
import { Container, Row } from "react-bootstrap";

const Dialogs = (props) => {
  return (
    <div className={`col-10`}>
      <AnimatedPage>
        <h2>Мои диалоги</h2>
        <Container>
          <Row>
            <div className="col-6">
              <img src="https://sharelab.no/wp-content/uploads/2017/10/placeholder-1920x1080.png" alt="Placeholder" className="w-100" />
            </div>
            <div className="col-6">Right</div>
          </Row>
        </Container>
      </AnimatedPage>
    </div>
  );
};

export default Dialogs;
