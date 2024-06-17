import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./ButtonTabGroup.css";

const ButtonTabGroup = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]);

  return (
    <ButtonGroup className="button-tab-group">
      {children.map((tab, index) => (
        <Button
          className="button-tab-group-button"
          key={index}
          onClick={() => setActiveTab(tab)}
          active={activeTab === tab}
        >
          {tab}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ButtonTabGroup;
