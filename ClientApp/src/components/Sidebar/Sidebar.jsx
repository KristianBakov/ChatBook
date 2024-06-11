import { Col } from "reactstrap";

const Sidebar = ({ children }) => {
  return <Col className={"sidebar-container open"}>{children}</Col>;
};

export default Sidebar;
