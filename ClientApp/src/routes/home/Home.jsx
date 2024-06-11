import React from "react";
import Feed from "../../components/Feed/Feed";
import { Col } from "reactstrap";
import HomeSidebar from "../../components/Sidebar/RouteSidebars/Home/HomeSidebar";
import AdSidebar from "../../components/Sidebar/AdSidebar/AdSidebar";

const Home = () => {
  return (
    <div className="row home-wrapper">
      <HomeSidebar md="3" className="d-none d-md-block" />

      <Col xs="12" md="6">
        <Feed />
      </Col>

      <AdSidebar md="3" className="d-none d-md-block" />
    </div>
  );
};

export default Home;
