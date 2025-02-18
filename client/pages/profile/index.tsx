import React from "react";
import { Profile } from "@/components/Profile";

const ProfilePage = () => {
  return (
    <Profile
      username="john_doe"
      email="john@example.com"
      profilePicture="https://via.placeholder.com/150"
      bio="This is a sample bio."
    />
  );
};

export default ProfilePage;
