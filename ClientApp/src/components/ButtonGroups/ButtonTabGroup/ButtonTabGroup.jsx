import React, { useState } from "react";
import { Button } from "reactstrap";
import "./ButtonTabGroup.css";

const ButtonTabGroup = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0]);

  return (
    <div className="button-tab-group">
      {children.map((tab, index) => (
        <Button
          className="button-tab-group-button btn-tab"
          key={index}
          onClick={() => setActiveTab(tab)}
          active={activeTab === tab}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default ButtonTabGroup;
