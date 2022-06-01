import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AppRouters from "../routes/AppRouters";

const ColumnLayout = () => {
  return (
    <>
      <Row>
        <Col sm="12">
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm="4" md="3" lg="2" className="d-none d-sm-block">
          <Sidebar />
        </Col>
        <Col sm="8" md="9" lg="10">
          <AppRouters />
        </Col>
      </Row>
    </>
  );
};

export default ColumnLayout;
