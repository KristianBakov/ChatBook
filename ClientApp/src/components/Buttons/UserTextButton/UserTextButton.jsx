import React from "react";
import ImageTextButton from "../TextButton/ImageTextButton";

const UserTextButton = ({ user, onClick }) => {
  return (
    <ImageTextButton hasImage imageSrc={user.profileIcon} onClick={onClick}>
      {user.name}
    </ImageTextButton>
  );
};

export default UserTextButton;
